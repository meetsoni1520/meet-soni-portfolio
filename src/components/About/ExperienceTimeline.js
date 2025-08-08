import React, { useState } from "react";
import { Badge, Collapse } from "react-bootstrap";

// Add CSS for pulse animation
const pulseAnimation = `
  @keyframes pulse {
    0% {
      box-shadow: 0 4px 16px rgba(199, 112, 240, 0.3);
    }
    50% {
      box-shadow: 0 6px 24px rgba(199, 112, 240, 0.5);
    }
    100% {
      box-shadow: 0 4px 16px rgba(199, 112, 240, 0.3);
    }
  }
`;

// Inject the CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = pulseAnimation;
  document.head.appendChild(style);
}

const experiences = [
  {
    company: "Crest Data",
    companyInitials: "CD",
    role: "Software Test Engineer",
    duration: "Jan 2022 — June 2023",
    bullets: [
      "Worked on QA initiatives for both an influencer marketing platform and a resource planning web application by designing and executing a comprehensive test strategy, developing over 300 automated test cases with TestCafe and achieving up to 85% test coverage, which reduced post-release defects by 42%.",
      "Conducted thorough manual testing and exploratory validation across key features and integrations, uncovering over 40 critical defects that contributed to a 25% reduction in customer-reported issues and ensured a robust user experience.",
      "Integrated automated UI tests with CI/CD pipelines via Git, slashing manual regression testing time by 40% and accelerating release cycles by 15%.",
      "Conducted thorough API testing using Postman and load testing with JMeter to identify and resolve critical bottlenecks, improving API response times by 40% and reducing high-severity production bugs.",
      "Streamlined test management and documentation, enhancing cross-functional collaboration, reducing bug-fix turnaround times by 20%, and introducing BDD-style acceptance tests to clarify requirements across teams.",
      "Collaborated in Agile/Scrum by participating in stand-ups, sprint planning, and retrospectives to align QA with development goals and foster teamwork.",
    ],
    tech: ["React", "Node.js", "Docker", "AWS", "CI/CD"],
  },
  {
    company: "BISAG",
    companyInitials: "BS",
    role: "Software Developer Intern",
    duration: "May 2021 — Aug 2021",
    bullets: [
      "Developed a Python-based face recognition attendance system using OpenCV and face recognition libraries, paired with a PostgreSQL-backed data management solution that auto-generates dynamic Excel reports per lecture—cutting manual attendance processing time by 40% and boosting data-processing eﬀiciency by 30%.",
      "Implemented an Angular front end with distinct super-admin, admin, and user sections, seamlessly integrated with back-end services to provide a cohesive, role-based interface.",
    ],
    tech: ["Python", "ETL", "SQL", "Tableau"],
  },
];

const purple = "#C770F0";
const darkPurple = "#8B5CF6";
const cardBg = "rgba(20, 16, 36, 0.92)";
const borderColor = "#8B5CF6";
const textColor = "#F5F5F5";
const pillBg = "rgba(139, 92, 246, 0.13)";
const fontFamily = 'Inter, "Poppins", "Segoe UI", Arial, sans-serif';

export default function ExperienceTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      className="experience-timeline"
      style={{ width: '100%', maxWidth: 1200, margin: '4rem auto', padding: '0 0.25rem' }}
    >
      <h2 style={{ color: textColor, fontFamily }}>
        My <span style={{ color: purple }}>Experience</span>
      </h2>
      <div
        className="experience-timeline-row"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        {experiences.map((exp, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={idx}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'stretch',
                gap: 16,
              }}
            >
              {/* Arrow Section */}
              <div
                className="experience-timeline-arrow"
                style={{
                  width: 60,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {/* Arrow Icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: isActive ? purple : darkPurple,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 4px 16px rgba(199, 112, 240, 0.3)' : '0 2px 8px rgba(139, 92, 246, 0.2)',
                    border: `2px solid ${isActive ? purple : borderColor}`,
                    transform: 'scale(1)',
                    animation: isActive ? 'pulse 2s infinite' : 'none',
                  }}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = isActive 
                      ? '0 6px 20px rgba(199, 112, 240, 0.4)' 
                      : '0 4px 16px rgba(139, 92, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = isActive 
                      ? '0 4px 16px rgba(199, 112, 240, 0.3)' 
                      : '0 2px 8px rgba(139, 92, 246, 0.2)';
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      filter: isActive ? 'drop-shadow(0 0 4px rgba(255,255,255,0.3))' : 'none',
                    }}
                  >
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </div>
              </div>

              {/* Main Card */}
              <div
                className="experience-timeline-card"
                style={{
                  flex: 1,
                  cursor: 'pointer',
                  position: 'relative',
                  background: cardBg,
                  border: isActive ? `2.5px solid ${purple}` : `2px solid ${borderColor}`,
                  borderRadius: 20,
                  color: textColor,
                  boxShadow: isActive ? '0 8px 32px rgba(139,92,246,0.10)' : '0 2px 12px rgba(139,92,246,0.04)',
                  transition: 'all 0.2s',
                  marginBottom: 0,
                  padding: 0,
                  backdropFilter: 'blur(8px)',
                  fontFamily,
                  minHeight: isActive ? undefined : 120,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="experience-timeline-card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2rem 2.5rem 2rem 2.5rem', minHeight: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                                          <span className="experience-timeline-company-initials" style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: darkPurple,
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(139,92,246,0.10)',
                        fontFamily,
                      }}>{exp.companyInitials}</span>
                    <div style={{ textAlign: 'left' }}>
                      <div className="experience-timeline-role" style={{ fontWeight: 600, fontSize: '1.3rem', color: '#fff', marginBottom: 2, fontFamily }}>{exp.role}</div>
                      <div className="experience-timeline-company" style={{ color: purple, fontWeight: 500, fontSize: '1rem', fontFamily }}>{exp.company}</div>
                    </div>
                  </div>
                  <div>
                    <Badge className="experience-timeline-duration" bg="" style={{ background: darkPurple, color: '#fff', fontWeight: 500, fontSize: '0.9rem', borderRadius: 18, padding: '0.5em 1.2em', fontFamily }}>{exp.duration}</Badge>
                  </div>
                </div>
                <Collapse in={isActive}>
                  <div>
                    <div className="experience-timeline-details" style={{ textAlign: 'justify', padding: '0 2.5rem 1rem 5.5rem', fontFamily }}>
                      <ul style={{ color: textColor, fontSize: '1rem', margin: '0.5rem 0 1rem 0', paddingLeft: 0, listStyle: 'none', fontFamily, textAlign: 'justify', textJustify: 'inter-word' }}>
                        {exp.bullets.map((b, i) => (
                          <li key={i} style={{ marginBottom: 10, display: 'flex', alignItems: 'flex-start', textAlign: 'justify', textJustify: 'inter-word' }}>
                            <span style={{ color: purple, fontSize: '1rem', marginRight: 12, marginTop: 2, flexShrink: 0 }}>•</span>
                            <span style={{ textAlign: 'justify', textJustify: 'inter-word', wordSpacing: '0.5px', letterSpacing: '0.2px', fontSize: '1rem' }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Tech section hidden for now */}
                      {/* <div className="experience-timeline-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        {exp.tech.map((t, i) => (
                          <span key={i} style={{ background: pillBg, color: purple, fontWeight: 600, borderRadius: 18, padding: '0.4em 1.2em', fontSize: '1rem', letterSpacing: 0.5, fontFamily }}>{t}</span>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 