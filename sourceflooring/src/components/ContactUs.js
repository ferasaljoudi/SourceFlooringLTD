import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    work: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        setIsError(false);
        // Reset form fields
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          province: "",
          work: "",
        });
      } else {
        setMessage(result.message);
        setIsError(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Failed to send email. Please try again later.");
      setIsError(true);
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-left">
        <h2>Contact Information:</h2>
        <p>Belal Aljoudy</p>
        <p>
          Cellphone:{" "}
          <a href="tel:3065279333" className="clickable-link">
            306-527-9333
          </a>
        </p>
        <p>
          Address:{" "}
          <a
            href="https://www.google.com/maps/place/Regina,+SK"
            target="_blank"
            rel="noopener noreferrer"
            className="clickable-link"
          >
            Regina, SK
          </a>
        </p>
        <br />
        <p1>To get a free quote, please fill the form below.</p1>
        <p2>To get a free quote, please fill the form on the right.</p2>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="province"
            placeholder="Province"
            value={formData.province}
            onChange={handleChange}
            required
          />
          <textarea
            name="work"
            placeholder="Work to be performed (max 200 characters)"
            value={formData.work}
            onChange={handleChange}
            maxLength="200"
            required
          />
          <button type="submit">Send</button>
        </form>
        {message && (
          <p className={`response-message ${isError ? "error" : "success"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
