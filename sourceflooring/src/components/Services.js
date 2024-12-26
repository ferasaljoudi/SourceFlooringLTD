import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

function Services() {
    const navigate = useNavigate();

    return (
        <div className="services">
        <h1>Our Services</h1>
        <p className="services-intro">
            We offer a wide range of professional flooring services to meet your needs:
        </p>
        <ul className="services-list">
            <li>Installations</li>
            <li>Repairs</li>
            <li>Old Floor Restoration</li>
            <li>Carpet</li>
            <li>Laminate Flooring</li>
            <li>Hardwood Flooring</li>
            <li>Vinyl Sheet Flooring</li>
            <li>Commercial Flooring</li>
            <li>Floor Leveling</li>
            <li>Luxury/Tile Vinyl Plank</li>
            <li>Stairs/Treads</li>
            <li>Gymnasiums</li>
            <li>Environmentally Friendly Finishes</li>
        </ul>
        <p className="services-quote">
            To get a free quote, please{" "}
            <span className="contact-link" onClick={() => navigate("/contact-us")}>
            contact us
            </span>.
        </p>
        </div>
    );
}

export default Services;
