import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* First Section */}
      <section className="home-section first-section">
        <div className="overlay">
          <h1
            className="quote-link"
            onClick={() => navigate("/contact-us")}
          >
            To get a free quote, please contact us.
          </h1>
        </div>
      </section>

      <section className="home-section second-section">
        <p>
        At Source Flooring LTD, we pride ourselves on delivering exceptional professional flooring services tailored to meet your unique needs. Our team of experienced experts uses the best materials and advanced techniques to ensure outstanding results. We believe that quality should never be compromised, and that's why our competitive pricing is designed to offer the best value without cutting corners. Your satisfaction is our top priority, and we’re here to bring your vision to life.
        </p>
        <p
          className="services-link"
          onClick={() => navigate("/services")}
        >
          Have a look at what type of services we provide.
        </p>
      </section>

      <section className="home-section third-section">
        <p>
        Our customers are at the heart of everything we do. We’re committed to providing not only top-notch flooring solutions but also an exceptional experience from start to finish. Your trust and support mean the world to us, and we constantly strive to exceed your expectations. If you’ve had the opportunity to work with us, we’d love to hear your thoughts! Your feedback helps us improve and continue delivering the quality and service you deserve. Share your experience with us by leaving a review!
        </p>
        <a
          href="https://maps.app.goo.gl/q5b3haW2cCUD3mY37"
          target="_blank"
          rel="noopener noreferrer"
          className="review-link"
        >
          Add a review here.
        </a>
      </section>
    </div>
  );
}

export default Home;
