const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 93;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error);
  } else {
    console.log("SMTP connection successful!");
  }
});

// API endpoint to send an email
app.post("/send-email", async (req, res) => {
  const { name, phone, email, address, city, province, work } = req.body;

  // Define email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: "belal.jodeh123@gmail.com",
    subject: "Source Flooring LTD - New Quote Request",
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Address: ${address}, ${city}, ${province}
      Work to be performed: ${work}
    `,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Failed to send email. Please try again later." });
  }
});

// Serve React frontend
app.use(express.static(path.join(__dirname, "dist")));

// Fallback route for React SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
