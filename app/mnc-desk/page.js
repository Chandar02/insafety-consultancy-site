//app/mnc-desk/page.js
// app/mnc-desk/page.js
export const dynamic = "force-static";
/* ============================
   SEO METADATA
   ============================ */
export const metadata = {
  title: "Global MNC Desk | HSE Compliance for Foreign Companies in India",
  description:
    "Strategic HSE Integration for Multinational Corporations Operating or Expanding in India. Risk management, legal compliance, process safety and crisis management bridging international standards with Indian statutory requirements.",
  keywords: [
    "HSE consultant for MNC India",
    "EHS compliance foreign companies India",
    "multinational safety consultant India",
    "European MNC safety compliance India",
    "ISO 45001 India MNC",
    "CBAM compliance India",
    "ESG assurance India",
    "data centre safety India NFPA",
    "machine safety ISO 12100 India",
    "Factories Act compliance MNC",
    "global enterprise safety India",
    "safety consultant for foreign companies India",
    "international standards Indian compliance bridge",
    "process safety MNC India",
    "risk management multinational India",
  ],
  alternates: {
    canonical: "https://www.insafetyservices.com/mnc-desk",
  },
  openGraph: {
    title: "Global MNC Desk | HSE Compliance for Foreign Companies in India",
    description:
      "Strategic HSE Integration for Multinational Corporations Operating or Expanding in India. Bridging international standards with Indian statutory requirements.",
    url: "https://www.insafetyservices.com/mnc-desk",
    siteName: "InSafety Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.insafetyservices.com/InSafety_Logo_Full.svg",
        width: 1200,
        height: 630,
        alt: "InSafety Services – Global MNC Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global MNC Desk | HSE Compliance for Foreign Companies in India",
    description:
      "Strategic HSE Integration for Multinational Corporations Operating or Expanding in India. Bridging international standards with Indian statutory requirements.",
    images: ["https://www.insafetyservices.com/InSafety_Logo_Full.svg"],
  },
};

/* ============================
   PAGE COMPONENT
   ============================ */
export default function MNCDeskPage() {

  const cards = [
    {
      number: "01",
      label: "Heavy Industry · Chemical · Steel · Energy",
      title: "EU CBAM & ESG Assurance",
      challenge:
        "With the EU Carbon Border Adjustment Mechanism fully in force and India's BRSR Core requirements tightening, heavy industry and chemical MNCs face simultaneous global sustainability and local safety obligations. Non-compliance creates regulatory exposure, insurance risk, and reputational damage across both jurisdictions.",
      solution:
        "We deliver advanced hazard modelling (QRA and HAZOP), Safety Management System verification, and process safety gap assessments aligned to both your global ESG reporting obligations and Indian statutory requirements. Your Indian operations stay compliant, auditable, and protected.",
      services: [
        "Quantitative Risk Assessment (QRA)",
        "HAZOP Study & Facilitation",
        "Process Safety Management (PSM)",
        "Safety Management System (SMS) Verification",
        "DISH / CIMAH / PNGRB Compliance",
        "ESG Safety Documentation Support",
      ],
    },
    {
      number: "02",
      label: "Technology · Finance · Data Centres · Corporate Campuses",
      title: "Data Centre & Tech Campus Safety",
      challenge:
        "Global technology and finance firms expanding into India are investing heavily in data centres, NOCs, and large corporate campuses. These mission-critical facilities carry unique fire, electrical, and physical security risks that generic safety consultants are not equipped to handle and where a single failure can trigger multi-jurisdictional liability.",
      solution:
        "We provide end-to-end life safety design and audit for mission-critical facilities, applying NFPA 75 and NFPA 76 (protection of IT and telecommunications equipment), NFPA 101 Life Safety Code, and the National Building Code of India. We cover clean agent fire suppression systems, emergency power safety, physical access control integration, and pre-occupancy compliance sign-off.",
      services: [
        "NFPA 75 / 76 Data Centre Fire Safety",
        "NFPA 101 / NBC Life Safety Code Audit",
        "Clean Agent Suppression System Review",
        "Emergency Power Systems Evaluation",
        "Physical Security Integration (OT/IT)",
        "Pre-Occupancy Compliance Sign-Off",
      ],
    },
    {
      number: "03",
      label: "Engineering · Automotive · Manufacturing · EPC",
      title: "Machine Safety & Export Compliance",
      challenge:
        "European engineering and manufacturing firms bringing CE-marked machinery and automated systems into India must satisfy both their home-country directives and the Indian Factories Act. These two frameworks are not the same and the gap between them is where incidents and regulatory violations happen.",
      solution:
        "We guide global firms through the full machine safety lifecycle in India from design review and risk assessment through to factory inspector sign-off. We bridge CE marking, ISO 12100 (Risk Assessment for Machinery), and ISO 13849-1 (Safety of Control Systems) with India's Factories Act and state-level regulatory requirements, ensuring your machinery is accepted by both your global auditors and local inspectors.",
      services: [
        "ISO 12100 Machine Risk Assessment",
        "ISO 13849-1 Control System Safety",
        "CE Marking to Factories Act Bridge",
        "Machinery Safety Audit",
        "HAZOP for Automated Systems",
        "Regulatory Submission Support",
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff" }}>

      {/* =====================
          HERO SECTION
          ===================== */}
      <section
        style={{
          backgroundColor: "#1f3e66",
          padding: "130px 5% 70px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,193,7,0.04) 0px, rgba(255,193,7,0.04) 1px, transparent 1px, transparent 80px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,193,7,0.15)",
              border: "1px solid rgba(255,193,7,0.4)",
              color: "#ffc107",
              fontSize: "0.78rem",
              fontWeight: "700",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "3px",
              marginBottom: "28px",
            }}
          >
            InSafety Services · Exclusive Advisory
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: "700",
              color: "#ffffff",
              lineHeight: "1.2",
              marginBottom: "12px",
            }}
          >
            Global MNC Desk
          </h1>

          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: "#ffc107",
              margin: "0 auto 28px",
              borderRadius: "2px",
            }}
          />

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(255,255,255,0.85)",
              lineHeight: "1.7",
              marginBottom: "0",
              fontWeight: "400",
            }}
          >
            Strategic HSE Integration for Multinational Corporations
            Operating or Expanding in India
          </p>
        </div>
      </section>

      {/* =====================
          INTRODUCTION BLOCK
          ===================== */}
      <section
        style={{
          padding: "70px 5%",
          backgroundColor: "#f4f7fa",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderLeft: "5px solid #007bff",
            paddingLeft: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "1.7rem",
              fontWeight: "700",
              color: "#1f3e66",
              marginBottom: "20px",
              lineHeight: "1.3",
            }}
          >
            Bridging International Standards with Indian Statutory Compliance
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "16px",
            }}
          >
            Establishing a corporate or industrial footprint in India requires
            navigating a complex web of regional regulations without
            compromising your global corporate safety mandates. Two frameworks,
            two sets of expectations, one operation.
          </p>
          <p
            style={{
              fontSize: "1.08rem",
              color: "#444",
              lineHeight: "1.8",
              marginBottom: "16px",
            }}
          >
            As Principal Safety Consultant with 35 years of global experience
            across APAC, EMEA, and Indian operations including assignments for
            multinational organisations in banking, shipping, technology, and
            manufacturing I act as the critical technical and regulatory bridge
            for MNCs entering the Indian market.
          </p>
          <p
            style={{
              fontSize: "1.08rem",
              color: "#1f3e66",
              lineHeight: "1.8",
              fontWeight: "600",
              marginBottom: "0",
            }}
          >
            My core value: seamlessly harmonising your international corporate
            standards with NBC, the Factories Act, and state-specific statutory
            laws across all 28 Indian states and union territories.
          </p>
        </div>
      </section>

      {/* =====================
          CAPABILITY CARDS
          ===================== */}
      <section style={{ padding: "70px 5%", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1f3e66",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Three Areas Where MNCs Need Us Most
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#666",
              fontSize: "1rem",
              marginBottom: "55px",
              lineHeight: "1.6",
            }}
          >
            Each capability is built around the specific regulatory and
            operational pressures global firms face when operating in India.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {cards.map((card, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #dde4ed",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(31,62,102,0.07)",
                }}
              >
                {/* Card header band */}
                <div
                  style={{
                    backgroundColor: "#1f3e66",
                    padding: "20px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: "800",
                        color: "rgba(255,193,7,0.35)",
                        lineHeight: "1",
                        minWidth: "48px",
                      }}
                    >
                      {card.number}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "700",
                        color: "#ffffff",
                        margin: "0",
                        lineHeight: "1.3",
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.55)",
                      fontStyle: "italic",
                    }}
                  >
                    {card.label}
                  </span>
                </div>

                {/* Card body */}
                <div
                  style={{
                    padding: "30px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "30px",
                  }}
                >
                  {/* Challenge */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#e74c3c",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: "700",
                          color: "#e74c3c",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        The Challenge
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.98rem",
                        color: "#555",
                        lineHeight: "1.75",
                        margin: "0",
                      }}
                    >
                      {card.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#007bff",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: "700",
                          color: "#007bff",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        Our Solution
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.98rem",
                        color: "#555",
                        lineHeight: "1.75",
                        margin: "0 0 20px",
                      }}
                    >
                      {card.solution}
                    </p>

                    {/* Service tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {card.services.map((service, i) => (
                        <span
                          key={i}
                          style={{
                            display: "inline-block",
                            backgroundColor: "#eef3fa",
                            border: "1px solid #c8d8ef",
                            color: "#1f3e66",
                            fontSize: "0.78rem",
                            fontWeight: "600",
                            padding: "4px 10px",
                            borderRadius: "3px",
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================
          TRUST STRIP
          ===================== */}
      <section
        style={{
          backgroundColor: "#f4f7fa",
          padding: "55px 5%",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.82rem",
              fontWeight: "700",
              color: "#999",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "28px",
            }}
          >
            Principal Consultant · Global Delivery Track Record
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "36px",
            }}
          >
            {[
              "Banking & Finance",
              "Shipping & Maritime",
              "Technology & IT",
              "Telecommunications",
              "Chemical & Process",
              "Heavy Manufacturing",
              "Ports & Terminals",
              "Infrastructure & EPC",
            ].map((sector, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  backgroundColor: "#ffffff",
                  border: "1px solid #c8d8ef",
                  color: "#1f3e66",
                  fontSize: "0.82rem",
                  fontWeight: "600",
                  padding: "7px 14px",
                  borderRadius: "4px",
                }}
              >
                {sector}
              </span>
            ))}
          </div>

          <p
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.8",
              maxWidth: "750px",
              margin: "0 auto",
            }}
          >
            35+ years of global HSE experience, including enterprise-wide
            safety programmes delivered across APAC, EMEA, and India for
            multinational organisations in banking, shipping, technology,
            chemical, and heavy industry sectors.
          </p>
        </div>
      </section>

      {/* =====================
          WHY THIS DESK EXISTS
          ===================== */}
      <section style={{ padding: "70px 5%", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "28px",
          }}
        >
          {[
            {
              icon: "⚖",
              title: "One Principal. Full Accountability.",
              body:
                "No junior consultants. No subcontracted thinking. You work directly with the Principal Consultant from boardroom briefing to site execution.",
            },
            {
              icon: "🌐",
              title: "Both Ends of the Stick.",
              body:
                "Strategic advisory at VP and MD level, operational execution at site level. We work across your entire risk hierarchy not just the comfortable middle.",
            },
            {
              icon: "📋",
              title: "Indian Regulatory Depth.",
              body:
                "DISH, CIMAH, PNGRB, PESO, OISD, Factories Act, NBC real working knowledge of Indian statutory frameworks that most international consultants simply do not have.",
            },
            {
              icon: "✅",
              title: "Built-In, Not Bolted On.",
              body:
                "Safety integrated at the earliest decision point strategy, design, procurement so compliance is never a last-minute scramble before your facility opens.",
            },
          ].map((point, i) => (
            <div
              key={i}
              style={{
                padding: "28px",
                backgroundColor: "#f4f7fa",
                borderRadius: "8px",
                borderTop: "4px solid #1f3e66",
              }}
            >
              <div
                style={{
                  fontSize: "1.6rem",
                  marginBottom: "14px",
                  lineHeight: "1",
                }}
              >
                {point.icon}
              </div>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "#1f3e66",
                  marginBottom: "10px",
                  lineHeight: "1.4",
                }}
              >
                {point.title}
              </h4>
              <p
                style={{
                  fontSize: "0.96rem",
                  color: "#555",
                  lineHeight: "1.7",
                  margin: "0",
                }}
              >
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================
          FINAL CTA
          ===================== */}
      <section
        style={{
          backgroundColor: "#1f3e66",
          padding: "70px 5%",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: "1.3",
            }}
          >
            Ready to Build Safe, Compliant Operations in India?
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: "1.7",
              marginBottom: "36px",
            }}
          >
            Start with a confidential conversation. No obligations, no templates, just an honest assessment of what your India operations
            need to be safe, compliant, and protected.
          </p>
          <a
            href="/#contact-form-anchor"
            className="cta-btn"
            style={{ display: "inline-block", fontSize: "1.05rem" }}
          >
            Consult the Global Desk
          </a>
          <p
            style={{
              marginTop: "20px",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Direct access to Principal Consultant &nbsp;·&nbsp; Chandarsingh Mehta CSP &nbsp;·&nbsp;{" "}
            <a
              href="mailto:chandarsingh@insafetyservices.com"
              style={{
                color: "#ffc107",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              chandarsingh@insafetyservices.com
            </a>
          </p>
        </div>
      </section>

    </div>
  );
}
