import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiOracle,
  SiUnity,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import pythonLogo from "../../Assets/Technologies/logo-python.png";
import dotNetLogo from "../../Assets/Technologies/logo-dotnet.png";
import gitLogo from "../../Assets/Technologies/logo-git.png";
import jsLogo from "../../Assets/Technologies/logo-javascript.png";
import nodeLogo from "../../Assets/Technologies/logo-node.png";
import oracleLogo from "../../Assets/Technologies/logo-oracle.png";
import postgresLogo from "../../Assets/Technologies/logo-postgres.png";
import reactLogo from "../../Assets/Technologies/logo-react.png";
import unityLogo from "../../Assets/Technologies/logo-unity.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pythonLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">Python</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={dotNetLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">.NET</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={jsLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">Javascript</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nodeLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">Node JS</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={reactLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">React</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={gitLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">Git</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={unityLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">Unity 3D</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={postgresLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">PostgreSQL</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={oracleLogo} alt="about" className="img-fluid" />
        <h5><strong className="purple">Oracle</strong></h5>
      </Col>
    </Row>
  );
}

export default Techstack;
