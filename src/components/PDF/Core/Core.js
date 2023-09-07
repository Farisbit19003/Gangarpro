import React from "react";
import { Form } from "react-bootstrap";
import "./Core.css";

const Core = ({ isEditMode, intialState, handleOnChange }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      intialState.core_competencies_image(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="core">
        <div>
          <h1 className="core_h">Core Competencies</h1>
          {isEditMode ? (
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter Core Competencies (use = to make bullets)"
              name="core_competencies"
              value={intialState.core_competencies}
              onChange={handleOnChange}
            />
          ) : (
            <ul className="core-list">
              {intialState.core_competencies.split("=").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {isEditMode ? (
            <div className="edit-core">
              <div className="edit_core_info">
                <Form.Label>Scope</Form.Label>
                <Form.Control
                  type="text"
                  name="core_competencies_info"
                  value={intialState.core_competencies_info.scope}
                  onChange={handleOnChange}
                />
              </div>
              <div className="edit_core_info">
                <Form.Label>NAICS</Form.Label>
                <Form.Control
                  type="text"
                  name="core_competencies_info."
                  value={intialState.core_competencies_info.naics}
                  onChange={handleOnChange}
                />
              </div>
              <div className="edit_core_info">
                <Form.Label>DUNS</Form.Label>
                <Form.Control
                  type="text"
                  name="core_competencies_info"
                  value={intialState.core_competencies_info.duns}
                  onChange={handleOnChange}
                />
              </div>
            </div>
          ) : (
            <p className="core_p">
              Scope – {intialState.core_competencies_info.scope}
              <br />
              NAICS – {intialState.core_competencies_info.naics}
              <br />
              DUNS – {intialState.core_competencies_info.duns}
              <br />
            </p>
          )}
        </div>

        <div className="core_img">
          {isEditMode ? (
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          ) : (
            intialState.core_competencies_inage && (
              <img
                className="core_img"
                src={intialState.core_competencies_image}
                alt="Uploaded"
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Core;
