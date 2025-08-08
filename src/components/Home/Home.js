import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../../Assets/cover.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const blobRef = useRef(null);

  // Parallax effect for the photo blob (perf + a11y friendly)
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY * 0.5;
        if (blobRef.current) {
          blobRef.current.style.transform =
            `translate(-55%, -55%) scale(0.92) translateY(${y}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-hero-row py-5">
            {/* Left: Text Block */}
            <Col md={6} className="home-hero-text fade-in-up">
              <div className="home-hero-text-blob" aria-hidden="true"></div>

              {/* Use H1 for page hero */}
              <h1 className="hero-headline">
                Hello, I'm <span className="main-name">Meet Soni</span> <span className="wave-emoji">👋</span>
              </h1>

              <p className="hero-intro" style={{ marginTop: "0.75rem" }}>
                Graduate engineer with expertise across software development,
                quality assurance, and data analytics. I design and deliver
                robust, scalable, and insight-driven solutions—from building
                resilient backends and automating end-to-end testing to
                developing data pipelines, applying machine learning, and
                translating business requirements into actionable analytics.
              </p>

              <p className="hero-intro" style={{ marginTop: "0.75rem", marginBottom: 0 }}>
                My focus is on impact, efficiency, and reliability at every stage
                of the technology lifecycle.
              </p>

              <div className="typewriter-section" aria-label="Skills and focus areas">
                <Type />
              </div>
            </Col>

            {/* Right: Profile Pic with Accent Blob and Overlap */}
            <Col md={6} className="home-hero-image-col fade-in-up" style={{ position: "relative" }}>
              <div className="home-hero-photo-blob" ref={blobRef} aria-hidden="true"></div>
              <div className="home-hero-photo-card">
                <img
                  src={profilePic}
                  alt="Meet Soni"
                  className="home-hero-photo-img"
                  loading="eager"
                  decoding="async"
                />
                <div className="home-hero-photo-gradient" aria-hidden="true"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
