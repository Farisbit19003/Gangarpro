import React from "react";
import { Form } from "react-bootstrap";
import "./Core.css";

const Core = ({
  isEditMode,
  coreCompetencies,
  setCoreCompetencies,
  coreCompetenciesInfo,
  setCoreCompetenciesInfo,
  coreCompetenciesImage,
  setCoreCompetenciesImage
}) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setCoreCompetenciesImage(e.target.result);
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
              value={coreCompetencies}
              onChange={(e) => setCoreCompetencies(e.target.value)}
            />
          ) : (
            <ul className="core-list">
              {coreCompetencies.split("=").map((item, index) => (
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
                value={coreCompetenciesInfo.scope}
                onChange={(e) =>
                  setCoreCompetenciesInfo({
                    ...coreCompetenciesInfo,
                    scope: e.target.value,
                  })
                }
              />
              </div>
              <div className="edit_core_info">
              <Form.Label>NAICS</Form.Label>
              <Form.Control
                type="text"
                value={coreCompetenciesInfo.naics}
                onChange={(e) =>
                  setCoreCompetenciesInfo({
                    ...coreCompetenciesInfo,
                    naics: e.target.value,
                  })
                }
              />
              </div>
              <div className="edit_core_info">
              <Form.Label>DUNS</Form.Label>
              <Form.Control
                type="text"
                value={coreCompetenciesInfo.duns}
                onChange={(e) =>
                  setCoreCompetenciesInfo({
                    ...coreCompetenciesInfo,
                    duns: e.target.value,
                  })
                }
              />
              </div>
            </div>
          ) : (
            <p className="core_p">
              Scope – {coreCompetenciesInfo.scope}
              <br />
              NAICS – {coreCompetenciesInfo.naics}
              <br />
              DUNS – {coreCompetenciesInfo.duns}
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
            coreCompetenciesImage && (
              <img
                className="core_img"
                src={coreCompetenciesImage}
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
