"use client";
import React, { useState } from 'react';

export default function RiskCalculator() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', company: '' });

    const questions = [
        "Does your facility have a fully implemented Safety Management System that strictly enforces a Permit to Work (PTW) process for high-risk operations like Work at Height or confined space entry?",
        "Do your frontline workers undergo regular, practical Safety Training, and is there enough Psychological Safety for them to report near-misses without fear of blame as part of a broader Cultural Transformation?",
        "Are robust Risk Assessments (like HAZOP/QRA) and Process Safety Management (PSM) protocols regularly updated, and is Incident Management used effectively to find root causes rather than just fixing symptoms?",
        "Do you have a dedicated Transportation Safety and journey management program in place to monitor driver competency, fatigue, and fleet integrity outside your factory gates?",
        "If a major disruption occurs today, do you have a frequently tested Emergency Response Plan and Crisis Management framework ready to protect your people and ensure rapid business continuity?"
    ];

    const handleAnswer = (points) => {
        setScore(score + points);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowForm(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // This quietly sends the lead to your existing email system
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company, 
                    message: `NEW LEAD from Calculator! They scored ${score} out of 100.`
                })
            });
        } catch (err) {
            console.error(err);
        }
        setShowForm(false);
        setShowResult(true);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '60px auto', padding: '40px 20px', backgroundColor: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2em', color: '#002B5B', marginBottom: '10px', fontWeight: '700' }}>Safety Risk Calculator</h2>
            <p style={{ color: '#555', marginBottom: '30px', fontSize: '1.1em' }}>Find out your facility's safety score in 60 seconds.</p>

            {/* Quiz Section */}
            {!showForm && !showResult && (
                <div>
                    <div style={{ marginBottom: '20px', fontSize: '0.9em', color: '#888', fontWeight: 'bold' }}>
                        QUESTION {currentQuestion + 1} OF 5
                    </div>
                    <p style={{ fontSize: '1.2em', color: '#333', lineHeight: '1.6', marginBottom: '30px', minHeight: '80px' }}>
                        {questions[currentQuestion]}
                    </p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => handleAnswer(20)} style={{ padding: '12px 30px', fontSize: '1em', backgroundColor: '#002B5B', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Yes</button>
                        <button onClick={() => handleAnswer(10)} style={{ padding: '12px 30px', fontSize: '1em', backgroundColor: '#eab308', color: '#002B5B', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Partially</button>
                        <button onClick={() => handleAnswer(0)} style={{ padding: '12px 30px', fontSize: '1em', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>No</button>
                    </div>
                </div>
            )}

            {/* Lead Capture Form */}
            {showForm && (
                <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.3em', color: '#002B5B', marginBottom: '20px', textAlign: 'center' }}>You're done! Where should we send your Risk Score?</h3>
                    <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '6px' }} />
                    <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '6px' }} />
                    <input type="text" name="company" placeholder="Company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                    <button type="submit" style={{ width: '100%', padding: '15px', fontSize: '1.1em', backgroundColor: '#eab308', color: '#002B5B', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Get My Score</button>
                </form>
            )}

            {/* Final Result */}
            {showResult && (
                <div>
                    <h3 style={{ fontSize: '1.5em', color: '#002B5B', marginBottom: '15px' }}>Thank you, {formData.name}!</h3>
                    <div style={{ fontSize: '4em', fontWeight: 'bold', color: score > 70 ? '#22c55e' : score > 40 ? '#eab308' : '#ef4444', marginBottom: '10px' }}>
                        {score} / 100
                    </div>
                    <p style={{ color: '#555', fontSize: '1.1em', lineHeight: '1.6' }}>
                        {score > 70 ? "Great job! Your facility has a strong safety foundation, but there is always room to optimize." : score > 40 ? "You have some safety measures in place, but critical gaps exist that could expose your facility to risk." : "High Risk Detected. We strongly recommend an immediate consultation to address these compliance and safety gaps."}
                    </p>
                    <p style={{ marginTop: '20px', color: '#888' }}>We will be in touch shortly to discuss your results.</p>
                </div>
            )}
        </div>
    );
}