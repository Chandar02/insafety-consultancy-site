// components/VisionMissionSection.js
"use client";

export default function VisionMissionSection() {
    const primaryColor = '#1f3e66';
    const accentColor = '#007bff';
    const lightBackground = '#f4f7fa';

    return (
        <section
            id="vision-mission"
            style={{
                padding: '90px 8%',
                backgroundColor: 'white',
                textAlign: 'center',
            }}
        >
            <div
                className="two-column"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '50px',
                    textAlign: 'left',
                }}
            >
                {/* Left Column: Our Core Philosophy */}
                <div style={{ paddingRight: '20px' }}>
                    <h2
                        style={{
                            fontSize: '2.8em',
                            marginBottom: '28px',
                            color: primaryColor,
                            fontWeight: '700',
                        }}
                    >
                        Our Core Philosophy
                    </h2>

                    <div style={{
                        fontSize: '1.15em',
                        lineHeight: '1.75',
                        color: '#333',
                        fontWeight: '300',
                    }}>
                        <p style={{ marginBottom: '6px' }}>Our core philosophy is simple.</p>
                        <p style={{ marginBottom: '6px' }}><strong>Safety is built in, not bolted on.</strong></p>
                        <p style={{ marginBottom: '6px' }}>We support organisations at every life-cycle stage.</p>
                        <p style={{ marginBottom: '6px' }}>But our strength lies upstream.</p>
                        <p style={{ marginBottom: '6px' }}>Early decisions shape long-term risk.</p>
                        <p style={{ marginBottom: '6px', color: '#1a1a1a' }}>Design determines outcomes.</p>
<p style={{ marginBottom: '6px' }}>This approach builds resilience.</p>
<p style={{ marginBottom: '16px' }}>Protecting people, assets, and reputation.</p>

<p style={{ marginBottom: '6px', fontWeight: '700' }}>There is no one-size-fits-all solution in safety.</p>
<p style={{ marginBottom: '0' }}>Each solution is designed only after understanding your operations, risks, and decision context.</p>                    </div>
                </div>

                {/* Right Column: Vision and Mission Boxes */}
                <div>
                    {/* Vision Statement */}
                    <div
                        style={{
                            borderLeft: `5px solid ${accentColor}`,
                            padding: '24px',
                            backgroundColor: lightBackground,
                            borderRadius: '4px',
                            marginBottom: '28px',
                        }}
                    >
                        <h3
                            style={{
                                color: primaryColor,
                                fontSize: '1.7em',
                                marginTop: '0',
                                marginBottom: '14px',
                                fontWeight: '700',
                            }}
                        >
                            Vision Statement
                        </h3>
                        <p
                            style={{
                                fontSize: '1.05em',
                                color: '#444',
                                lineHeight: '1.7',
                                fontWeight: '300',
                                margin: '0',
                            }}
                        >
                            To be the trusted partner in helping organisations achieve
                            enduring operational safety, environmental stewardship,
                            and human wellbeing.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <div
                        style={{
                            borderLeft: `5px solid ${accentColor}`,
                            padding: '24px',
                            backgroundColor: lightBackground,
                            borderRadius: '4px',
                        }}
                    >
                        <h3
                            style={{
                                color: primaryColor,
                                fontSize: '1.7em',
                                marginTop: '0',
                                marginBottom: '14px',
                                fontWeight: '700',
                            }}
                        >
                            Mission Statement
                        </h3>
                        <p
                            style={{
                                fontSize: '1.05em',
                                color: '#444',
                                lineHeight: '1.7',
                                fontWeight: '300',
                                margin: '0',
                            }}
                        >
                            To deliver integrated, practical, and forward-looking
                            HSSEF solutions that strengthen business performance and
                            safeguard stakeholder trust.
                        </p>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .two-column {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                }
            `}</style>
        </section>
    );
}