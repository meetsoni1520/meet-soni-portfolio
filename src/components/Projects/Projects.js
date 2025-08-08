import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BG from "../../Assets/Projects/BG1.png";
import SDN1 from "../../Assets/Projects/SDN.png";
import p2p from "../../Assets/Projects/p2p1.png";
import AP1 from "../../Assets/Projects/AP.png";
import ML from "../../Assets/Projects/Ml2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p2p}
              isBlog={false}
              title="Prompt2Packet: In‑Context Learning for End‑to‑End Packet Generation"
              description="Prompt2Packet is my Master’s research project that developed a pure prompt-engineering framework leveraging state-of-the-art LLMs (ChatGPT, Claude, Gemini, Grok) to generate fully RFC-compliant IPv4, ICMP, and ARP packet headers using zero-shot, one-shot, and five-shot paradigms. I built a reproducible Docker-based evaluation pipeline (Ubuntu 22.04) integrating Mininet and tcpdump to capture real traffic, converted it to JSON via Wireshark, and validated model outputs against a ground-truth schema. The project achieved up to 100% checksum accuracy and near-perfect semantic field inference without model fine-tuning, demonstrating LLMs’ potential for automated network traffic synthesis and protocol reasoning."
              ghLink="https://github.com/meetsoni1520"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="Machine Learning : Gender Classification of Drosophila Using Morphological Traits"
              description="Built a predictive classification model in Python (Pandas, NumPy, scikit-learn, Matplotlib) to determine the gender of Drosophila based on morphological measurements. Conducted extensive Exploratory Data Analysis (EDA) to identify key traits, followed by a robust data preprocessing pipeline that handled missing values, engineered features, and applied Principal Component Analysis (PCA) for dimensionality reduction. Developed and optimized Logistic Regression, Random Forest, and KNN models with cross-validation and hyperparameter tuning, achieving 92% accuracy using KNN with PCA while reducing feature dimensionality by 70%, outperforming baseline models."
              ghLink="https://github.com/meetsoni1520"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SDN1}
              isBlog={false}
              title="Real-Time DDoS Attack Detection in SDN Using Machine Learning"
              description="Developed and deployed a machine learning–based DDoS detection system for SDNs, integrating Random Forest, SVM, and Naive Bayes classifiers with the Ryu controller via OpenFlow. Leveraging a Mininet topology to capture live traffic metrics, the system classified network flows in real time as benign or DDoS. After comparative evaluation, Random Forest achieved 96.99% accuracy and a 0.82 F1-score, and was selected for deployment, enabling efficient and accurate intrusion detection in dynamic SDN environments."
              ghLink="https://github.com/meetsoni1520"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BG}
              isBlog={false}
              title="Big Data Query: Crop Yield Prediction"
              description="Analysed over 56,000 records of crop yield, temperature, rainfall, and pesticide usage across regions and years using PySpark on a Google Cloud VM. Performed data cleaning, normalisation, and outlier detection, storing processed datasets in HDFS for distributed computation. Executed SQL-style Spark queries to assess multivariate correlations, regional variability, and temporal trends, and visualised findings through scatter plots, violin plots, heatmaps, and line graphs. The analysis identified optimal pesticide levels and revealed climate zone–based yield performance patterns, offering actionable insights into agricultural productivity."
              ghLink="https://github.com/meetsoni1520"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AP1}
              isBlog={false}
              title="AutoProof - Vehicle History Management System"
              description="Designed and implemented a proof-of-concept decentralized application (DApp) on Ethereum using Hardhat, Solidity, and OpenZeppelin, where each vehicle is minted as an ERC-721 NFT storing VIN, PPSR status, service logs, accident history, and ownership transfers on an immutable ledger. Developed four modular smart contracts (CarNFT, ServiceHistory, OwnershipTransfer, TransactionManager) with full MetaMask integration to manage registration, service recording, multi-stage ownership hand-offs, escrow deposits, and sale cancellations via on-chain events and UI listeners. Built a responsive React + Web3.js interface to simulate end-user workflows, capture live transactions with sequence diagrams, and ensure transparent access for buyers, mechanics, insurers, and regulators."
              ghLink="https://github.com/meetsoni1520"
            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
