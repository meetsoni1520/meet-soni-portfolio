import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import profileImg from "../../Assets/profile.jpg";
import ExperienceTimeline from "./ExperienceTimeline";

function About() {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <Container fluid className="about-section" style={{ padding: 0 }}>
      <Particle />
      {/* Sub-section 1: Bio & Illustration */}
      <div className="scroll-animate">
        <div className="about-row">
          <div className="about-bio-col">
            <h1 className="about-title">
              Know Who <span className="purple">I'm</span>
            </h1>
            <div className="about-bio-text">
              <p>
                I'm <strong style={{ color: '#fff' }}>Meet Soni</strong>, a Brisbane-based technologist with a global academic journey — from earning my Bachelor in Information Technology in India to completing my Master of Computer Science at The University of Queensland.
              </p>
              <p>
                Beyond code and data, I'm driven by curiosity and a commitment to continuous growth. I enjoy working at the intersection of problem-solving and creativity — whether that means exploring emerging technologies, refining processes for efficiency, or collaborating with diverse teams to bring ideas to life.
              </p>
              <p>
                For me, technology is a tool to enable better decisions, smoother experiences, and lasting impact.
              </p>
              <blockquote className="about-quote">
                "Learn deeply, adapt quickly, and create with purpose."
                <span className="about-quote-author">— Meet Soni</span>
              </blockquote>
            </div>
          </div>
          <div className="about-photo-col">
            <div className="about-photo-card">
              <img
                src={profileImg}
                alt="Meet Soni profile"
                className="about-photo-img"
              />
              <div className="about-photo-gradient"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-section 2: Energizers + Experience */}
      <div className="scroll-animate" style={{ width: '100%', padding: '2rem 0.25rem' }}>
        <Container fluid style={{ padding: 0, maxWidth: '1200px', margin: '0 auto' }}>
          {/* Energizers in a responsive grid */}
          <Row>
            <Col xs={12} className="text-center" style={{ marginBottom: 24 }}>
              <p style={{ 
                fontSize: '1rem', 
                color: '#fff',
                padding: '0'
              }}>
                Apart from coding and data wrangling, here are a few things that energize me:
              </p>
            </Col>
          </Row>
          <Row className="text-center" style={{ marginBottom: 32 }}>
            <Col xs={12} sm={6} lg={3} className="mb-3">
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🎓</div>
              <h5 style={{ fontWeight: 600, fontSize: '1rem' }}>Mentoring & Workshops</h5>
              <div style={{ color: '#aaa', fontSize: '0.9rem', padding: '0 0.5rem' }}>Cultivating growth and knowledge-sharing.</div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="mb-3">
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🤖</div>
              <h5 style={{ fontWeight: 600, fontSize: '1rem' }}>Hackathons & Side Projects</h5>
              <div style={{ color: '#aaa', fontSize: '0.9rem', padding: '0 0.5rem' }}>Driving innovation through rapid experimentation.</div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="mb-3">
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🌏</div>
              <h5 style={{ fontWeight: 600, fontSize: '1rem' }}>Travel & Culture</h5>
              <div style={{ color: '#aaa', fontSize: '0.9rem', padding: '0 0.5rem' }}>Exploring new places, cuisines, and perspectives.</div>
            </Col>
            <Col xs={12} sm={6} lg={3} className="mb-3">
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>🏊‍♂️</div>
              <h5 style={{ fontWeight: 600, fontSize: '1rem' }}>Sports & Swimming</h5>
              <div style={{ color: '#aaa', fontSize: '0.9rem', padding: '0 0.5rem' }}>Staying active with team sports and long-course swims.</div>
            </Col>
          </Row>
          <ExperienceTimeline />
        </Container>
      </div>

      <div className="scroll-animate" style={{ padding: '0 0.25rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Techstack showHeading />
      </div>

      {/* <h1 className="project-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Toolstack /> */}
    </Container>
  );
}

export default About;
