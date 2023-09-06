import React from "react";
import { Form } from "react-bootstrap";
import "./Past.css";

const Past = ({
  isEditMode,
  pastPerformance,
  setPastPerformance,
  pastPerformanceImage,
  setPastPerformanceImage
}) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setPastPerformanceImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="past">
      <div className="past_img">
        {isEditMode ? (
          <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
        ) : (
          pastPerformanceImage && (
            <img className="past_img" src={pastPerformanceImage} alt="Uploaded" />
          )
        )}
      </div>

      <div className="performance">
        <h1>Past Performance</h1>
        {isEditMode ? (
          <Form.Control
            as="textarea"
            rows="5"
            cols={65}
            placeholder="Enter Past Performance (use = to display in cols and rows)"
            value={pastPerformance}
            onChange={(e) => setPastPerformance(e.target.value)}
          />
        ) : (
          <table className="performance-table">
            <tbody>
              {pastPerformance.split("=").map((item, index) => (
                index % 2 === 0 && (
                  <tr key={index}>
                    <td>{item}</td>
                    <td>
                      {pastPerformance.split("=")[index + 1] || ""}
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Past;
