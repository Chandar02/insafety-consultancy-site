// components/VisionMissionSection.js

export default function VisionMissionSection() {
    const primaryColor = '#1f3e66';
    const accentColor = '#007bff';
    const lightBackground = '#f4f7fa';

    return (
        <section id="vision-mission" style={{ padding: '80px 5%', backgroundColor: 'white', textAlign: 'center' }}>
            <div style={{ 
                maxWidth: '1200px', 
                margin: '0 auto', 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '40px',
                textAlign: 'left'
            }}>
                
                {/* Left Column: Our Core Philosophy */}
                <div style={{ paddingRight: '20px' }}>
                    <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: primaryColor }}>
                        Our Core Philosophy
                    </h2>
                    
                    {/* FIX APPLIED HERE: Using <strong> tags and corrected surrounding text */}
                    <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#333', marginBottom: '20px' }}>
                        Our core philosophy is simple: <strong>Safety is built-in, not bolted on</strong>. While we support businesses at any stage of their life cycle, our expertise shines in integrating safety from concept design and planning. This approach ensures every client achieves a sustainable, compliant, and continuously improving safety culture that protects assets, people, and reputation.
                    </p>
                    <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#333' }}>
                        We deliver comprehensive and practical solutions through Health, Safety, Security, Environment, Fire, and Risk Management (HSSEF).
                    </p>
                </div>

                {/* Right Column: Vision and Mission Boxes */}
                <div>
                    
                    {/* Vision Statement */}
                    <div style={{ 
                        borderLeft: `5px solid ${accentColor}`, 
                        padding: '20px', 
                        backgroundColor: lightBackground, 
                        borderRadius: '4px', 
                        marginBottom: '20px' 
                    }}>
                        <h3 style={{ color: primaryColor, fontSize: '1.5em', marginTop: '0', marginBottom: '10px' }}>
                            Vision Statement
                        </h3>
                        <p style={{ fontSize: '1em', color: '#555' }}>
                            To be the globally recognized partner for transforming safety from a required policy to an integral, value-driving design principle that fosters operational excellence and sustainable success for organizations worldwide.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div style={{ 
                        borderLeft: `5px solid ${accentColor}`, 
                        padding: '20px', 
                        backgroundColor: lightBackground, 
                        borderRadius: '4px' 
                    }}>
                        <h3 style={{ color: primaryColor, fontSize: '1.5em', marginTop: '0', marginBottom: '10px' }}>
                            Mission Statement
                        </h3>
                        <p style={{ fontSize: '1em', color: '#555' }}>
                            Our mission is to embed strategic Health, Safety, Security, Environment, Fire, and Risk Management (HSSEF) expertise into every stage of the business life cycle, from concept design through governance. Led by over 34 years of international experience, we deliver comprehensive, practical, and customized solutions that build a resilient, compliant, and continuously improving safety culture for our clients.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}