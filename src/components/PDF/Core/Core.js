import React from "react";
import { Form } from "react-bootstrap";
import "./Core.css";

const Core = ({ isEditMode, intialState, handleOnChange, page }) => {
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

  const handleCompetencyChange = (index, value) => {
    const competencyData = intialState.core_competencies.split("=");
    competencyData[index] = value;
    const updatedCompetencies = competencyData.join("=");
    handleOnChange({
      target: { name: "core_competencies", value: updatedCompetencies },
    });
  };

  const handleCompetencyInfoChange = (index, value) => {
    const competencyInfoData = intialState.core_competencies_info.split("=");
    competencyInfoData[index] = value;
    const updatedCompetenciesInfo = competencyInfoData.join("=");
    handleOnChange({
      target: { name: "core_competencies_info", value: updatedCompetenciesInfo },
    });
  };

  return (
    <>
      <div className="core">
        <div>
          <h1 className="core_h">Core Competencies</h1>
          {isEditMode ? (
            <div>
              {intialState.core_competencies.split("=").map((item, index) => (
                <div key={index}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Core Competency"
                    name={`core_competencies[${index}]`}
                    value={item}
                    onChange={(e) => handleCompetencyChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
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
                <Form.Label>Core Competencies Info</Form.Label>
                {intialState.core_competencies_info.split("=").map((item, index) => (
                  <div key={index}>
                    <Form.Control
                      type="text"
                      placeholder="Enter Core Competency Info"
                      name={`core_competencies_info[${index}]`}
                      value={item}
                      onChange={(e) => handleCompetencyInfoChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {intialState.core_competencies_info.split("=").map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>

        {page !== "VersionB" && (
          <div className="core_img">
            {isEditMode ? (
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            ) : (
              intialState.core_competencies_image && (
                <img
                  className="core_img"
                  src={intialState.core_competencies_image}
                  alt="Uploaded"
                />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Core;
