import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        {/* <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> I am a final year student pursuing an Integrated MSc (IMSc)
            in Maths and Computing at BIT Mesra.
            <br />
            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote> */}

        <blockquote className="blockquote mb-0">
          {/* <p style={{ textAlign: "justify" }}> */}
          <p>
            Hello, my name is <span className="purple">Ariel Curtido</span>, I'm from Paraguay and I am a Software Engineer with 10 years of experience in web solutions and ERP platforms. I have worked on projects involving front-end and back-end development, database design, system integration, and cloud computing.
            <br />
            <br />
            I have extensive knowledge of web technologies such as <span className="purple">HTML, CSS, JavaScript, C#, Python and SQL</span>. I am proficient in using frameworks and libraries such as <span className="purple">React, Redux, Django and DRF</span>. I am also familiar with cloud platforms such as <span className="purple">AWS, Azure and Google Cloud</span>. I enjoy solving complex problems and learning new skills. I am looking for new opportunities to apply my expertise and grow as a professional.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
