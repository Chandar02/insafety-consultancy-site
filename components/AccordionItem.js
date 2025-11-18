// components/AccordionItem.js
"use client";

import { useState, useEffect, useRef } from "react";

export default function AccordionItem({
    index,
    title,
    icon,
    content,
    activeIndex,
    setActiveIndex
}) {
    const isActive = index === activeIndex;
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (isActive && contentRef.current) {
            setHeight(contentRef.current.scrollHeight + "px");
        } else {
            setHeight("0px");
        }
    }, [isActive]);

    return (
        <div
            className={`accordion-card card-hover`}  
            style={{
                marginBottom: "12px",
                borderRadius: "6px",
                backgroundColor: "#ffffff",
                border: "1px solid #ddd",
                transition: "var(--transition)"
            }}
        >
            {/* ======= HEADER ======= */}
            <button
                onClick={() =>
                    setActiveIndex(isActive ? null : index)
                }
                className="accordion-header"
                style={{
                    width: "100%",
                    padding: "18px 20px",
                    fontSize: "1.1em",
                    background: "none",
                    border: "none",
                    outline: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    color: "#1f3e66",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: "600"
                }}
            >
                <span>
                    {icon} &nbsp; {title}
                </span>

                {/* Arrow */}
                <span
                    style={{
                        transition: "transform 0.3s",
                        transform: isActive ? "rotate(90deg)" : "rotate(0deg)"
                    }}
                >
                    ▶
                </span>
            </button>

            {/* ======= CONTENT AREA ======= */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: height,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease"
                }}
            >
                <div style={{ padding: "0 20px 15px 20px" }}>
                    {content}
                </div>
            </div>
        </div>
    );
}
