import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "devicon/devicon.min.css";
import { DiJava, DiPython, DiJavascript1, DiHtml5, DiCss3, DiGithub, DiDocker, DiMongodb } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiApachejmeter, SiTestcafe } from "react-icons/si";

function getInitials(name) {
  if (name === "C++") return "C++";
  return name
    .split(/[^A-Za-z0-9+]+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

const fallbackIcon = (name) => (
  <span style={{
    display: 'inline-block',
    fontWeight: 700,
    fontSize: '1.2em',
    color: '#C770F0',
    width: '1.2em',
    textAlign: 'center',
    fontFamily: 'monospace',
  }}>{getInitials(name)}</span>
);

const techSections = [
  {
    title: "LANGUAGES",
    items: [
      { icon: <i className="devicon-c-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "C" },
      { icon: <i className="devicon-cplusplus-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "C++" },
      { icon: <i className="devicon-java-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Java" },
      { icon: <i className="devicon-python-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Python" },
      { icon: <i className="devicon-javascript-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "JavaScript" },
      { icon: <i className="devicon-mysql-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "SQL" },
      { icon: <i className="devicon-html5-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "HTML" },
      { icon: <i className="devicon-css3-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "CSS" },
    ],
  },
  {
    title: "FRAMEWORKS",
    items: [
      { icon: <i className="devicon-angularjs-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Angular" },
      { icon: <i className="devicon-django-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Django" },
    ],
  },
  {
    title: "LIBRARIES",
    items: [
      { icon: <i className="devicon-numpy-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "NumPy" },
      { icon: <i className="devicon-pandas-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Pandas" },
      { icon: <i className="devicon-matplotlib-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Matplotlib" },
      { icon: <i className="devicon-scikitlearn-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Scikit-learn" },
      { icon: <i className="devicon-pytorch-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "PyTorch" },
      { icon: <i className="devicon-tensorflow-original" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "TensorFlow" },
    ],
  },
  {
    title: "PLATFORM AND TOOLS",
    items: [
      { icon: <i className="devicon-androidstudio-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Android Studio" },
      { icon: <i className="devicon-googlecloud-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Google Cloud Platform" },
      { icon: <i className="devicon-jira-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "JIRA" },
      { icon: <i className="devicon-confluence-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Confluence" },
      { icon: <i className="devicon-github-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Github" },
      { icon: <i className="devicon-docker-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Docker" },
      { icon: <i className="devicon-figma-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Figma" },
      { icon: <i className="devicon-postman-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Postman" },
      { icon: <SiApachejmeter style={{ fontSize: '2.2em', color: '#C770F0' }} />, name: "JMeter" },
      { icon: <i className="devicon-kubernetes-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Kubernetes" },
      { icon: <SiTestcafe style={{ fontSize: '2.2em', color: '#C770F0' }} />, name: "TestCafe" },
    ],
  },
  {
    title: "DATABASE",
    items: [
      { icon: <i className="devicon-mysql-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "MySQL" },
      { icon: <i className="devicon-mongodb-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "MongoDB" },
      { icon: <i className="devicon-postgresql-plain" style={{ fontSize: '2.2em', color: '#C770F0' }}></i>, name: "Postgres" },
    ],
  },
];

function Techstack({ showHeading }) {
  return (
    <Container className="techstack-section">
      {showHeading && (
        <h1 style={{ fontSize: "2.1em", fontWeight: 800, marginBottom: 24, textAlign: 'left' }}>
          Professional <span className="purple">Skillset</span>
        </h1>
      )}
      <style>{`
        .techstack-section {
          font-family: 'Montserrat', 'Poppins', 'Segoe UI', Arial, sans-serif;
          margin-top: 2.5rem;
        }
        .techstack-section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #bdbdbd;
          letter-spacing: 1.2px;
          margin-bottom: 1.1rem;
          margin-top: 2.1rem;
          text-align: left;
          text-transform: uppercase;
        }
        .tech-icons {
          position: relative;
          font-size: 2.2em !important;
          margin: 12px auto 6px auto !important;
          padding: 16px !important;
          opacity: 0.93 !important;
          border: 2px solid #C770F0 !important;
          vertical-align: middle !important;
          text-align: center !important;
          border-radius: 10px !important;
          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08) !important;
          background: rgba(40, 20, 60, 0.10) !important;
          transition: all 0.22s cubic-bezier(.4,2,.6,1) !important;
          cursor: pointer;
          z-index: 1;
        }
        .tech-icons::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          padding: 2px;
          background: transparent;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: background 0.3s;
          z-index: 2;
        }
        .tech-icons:hover::before {
          background: linear-gradient(90deg, #C770F0, #A855F7);
        }
        .tech-icons:hover {
          border-color: transparent !important;
          box-shadow: 0 6px 24px 0 #C770F099 !important;
          transform: scale(1.08);
        }
        .techstack-name {
          color: #fff;
          font-size: 1.08rem;
          font-weight: 500;
          letter-spacing: 0.1px;
          font-family: inherit;
          margin-top: 0.5em;
          text-align: center;
        }
        @media (max-width: 768px) {
          .techstack-section-title {
            font-size: 1rem;
            margin-top: 1.5rem;
          }
          .tech-icons {
            font-size: 1.3em !important;
            padding: 10px !important;
          }
          .techstack-name {
            font-size: 0.98rem;
          }
        }
      `}</style>
      {techSections.map((section, idx) => (
        <div key={idx}>
          <div className="techstack-section-title">{section.title}</div>
          <Row style={{ justifyContent: 'flex-start', rowGap: '0.5em' }}>
            {section.items.map((item, i) => (
              <Col xs={6} sm={4} md={3} lg={2} key={i} className="d-flex flex-column align-items-center justify-content-center">
                <div className="tech-icons">
                  {item.icon}
                </div>
                <span className="techstack-name">{item.name}</span>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Techstack;
