require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// email functionality

app.post("/mail", (req, res) => {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = 'sandbox7fcfa03e79db46efb3aa81f47bd48a9a.mailgun.org';
  const mailgun = require('mailgun-js')({ apiKey, domain });

  const { from, subject, text } = req.body;
  console.log(req.body);

  let data = {
      from,
      to: 'kaylag044@gmail.com',
      subject,
      text
  };

  mailgun.messages().send(data, function (error, body) {
      console.log(error, body);
      if (error) {
          throw error;
      }
      console.log("Email Sent");
      res.status(200).json(body);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
