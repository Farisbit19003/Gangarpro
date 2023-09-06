import React from "react";
import { Form } from "react-bootstrap";
import "./About.css";

const About = ({ isEditMode, aboutUs, setAboutUs }) => {
  return (
    <div className="About">
      <h1 className="about_h">About Us</h1>

      {isEditMode ? (
        <Form.Control
          className="edit-textarea"
          as="textarea"
          rows={3}
          value={aboutUs}
          onChange={(event) => setAboutUs(event.target.value)}
        />
      ) : (
        <div className="about-content">{aboutUs}</div>
      )}
    </div>
  );
};

export default About;
