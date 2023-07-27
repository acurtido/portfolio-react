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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> <h5><strong className="purple">Python</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet /> <h5><strong className="purple">.NET</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <h5><strong className="purple">Javascript</strong></h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <h5><strong className="purple">Node JS</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <h5><strong className="purple">React</strong></h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <h5><strong className="purple">Git</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity /> <h5><strong className="purple">Unity 3D</strong></h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> <h5><strong className="purple">PostgreSQL</strong></h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle /> <h5><strong className="purple">Oracle</strong></h5>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
