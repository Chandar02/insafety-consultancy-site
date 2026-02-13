"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
        company: "", // ⭐ Honeypot field
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    mobile: "",
                    message: "",
                    company: "", // ⭐ reset honeypot
                });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Error sending message.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            
            {/* ⭐ Honeypot Field (Hidden from users) */}
            <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ display: "none" }}
                autoComplete="off"
            />

            {/* Name */}
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
            />

            {/* Email */}
            <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
            />

            {/* Mobile */}
            <input
                type="text"
                name="mobile"
                placeholder="Mobile / WhatsApp"
                value={formData.mobile}
                onChange={handleChange}
                style={inputStyle}
            />

            {/* Message */}
            <textarea
                name="message"
                placeholder="Tell us about your project or challenge..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                style={{ ...inputStyle, resize: "none" }}
            />

            <button 
                type="submit"
                className="cta-btn"
                style={{ width: "100%", marginTop: "10px" }}
            >
                Start a Risk Conversation
            </button>

            <p style={{ marginTop: "10px", color: "white" }}>{status}</p>
        </form>
    );
}

const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
};
