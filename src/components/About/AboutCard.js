import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ padding: '2rem 1.5rem' }}>
      <Card.Body>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 16 }}>
            I'm <strong style={{ color: '#fff' }}>Meet Soni</strong> from Brisbane, Australia—
            a recent Master of Computer Science (Management) graduate from UQ with a Bachelor in IT from Gujarat Technological University.
            I fuse academic rigor with hands-on expertise in back-end engineering, test automation, data pipelines, and analytics.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 32 }}>
            My mission? Turn complexity into clarity. Whether I'm building resilient services, architecting end-to-end QA pipelines, or deriving real-time insights with ML, I deliver reliable, scalable solutions that make a difference.
          </p>

          {/* Add this sentence before the energizers grid */}
          <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
            Apart from coding and data wrangling, here are a few things that energize me:
          </p>

          {/* Energizers: Two-column grid */}
          <Row style={{ marginBottom: 32 }}>
            <Col xs={12} sm={6} className="mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: '2rem' }}>🎓</span>
                <div>
                  <h5 style={{ fontWeight: 600, marginBottom: 4 }}>Mentoring & Workshops</h5>
                  <div style={{ color: '#aaa', fontSize: '1rem' }}>Cultivating growth and knowledge-sharing across teams.</div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} className="mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: '2rem' }}>🤖</span>
                <div>
                  <h5 style={{ fontWeight: 600, marginBottom: 4 }}>Hackathons & Side Projects</h5>
                  <div style={{ color: '#aaa', fontSize: '1rem' }}>Driving innovation through rapid experimentation.</div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} className="mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: '2rem' }}>🌏</span>
                <div>
                  <h5 style={{ fontWeight: 600, marginBottom: 4 }}>Travel & Culture</h5>
                  <div style={{ color: '#aaa', fontSize: '1rem' }}>Exploring new places, cuisines, and perspectives.</div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6} className="mb-4">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontSize: '2rem' }}>🏊‍♂️</span>
                <div>
                  <h5 style={{ fontWeight: 600, marginBottom: 4 }}>Sports & Swimming</h5>
                  <div style={{ color: '#aaa', fontSize: '1rem' }}>Staying active with team sports and long-course swims.</div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Quote */}
          <blockquote style={{ marginTop: 32, borderLeft: '4px solid #8B5CF6', paddingLeft: 16, fontStyle: 'italic', color: '#C4B5FD', background: 'rgba(139, 92, 246, 0.05)' }}>
            "Build once, learn forever—then build it even better."
            <span style={{ display: 'block', textAlign: 'right', marginTop: 8, color: '#fff', fontStyle: 'normal', fontWeight: 500 }}>— Meet Soni</span>
          </blockquote>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
