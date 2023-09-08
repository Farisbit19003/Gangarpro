import React from "react";
import { Form } from "react-bootstrap";
import "./Past.css";

const Past = ({ isEditMode, intialState, handleOnChange }) => {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      intialState.past_performance_image=e.target.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePerformanceChange = (index, column, value) => {
    const performanceData = intialState.past_performance.split("=");
    performanceData[index * 2 + column] = value;
    const updatedPerformance = performanceData.join("=");
    handleOnChange({ target: { name: "past_performance", value: updatedPerformance } });
  };

  return (
    <div className="past">
      <div className="past_img">
        {isEditMode ? (
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        ) : (
          intialState.past_performance_image && (
            <img
              className="past_img"
              src={intialState.past_performance_image}
              alt="Uploaded"
            />
          )
        )}
      </div>

      <div className="performance">
        <h1>Past Performance</h1>
        {isEditMode ? (
         <tbody>
              {[0, 1, 2, 3].map((index) => (
                <tr key={index}>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="Enter Performance"
                      name={`past_performance[${index}][0]`}
                      value={
                        intialState.past_performance.split("=")[index * 2] || ""
                      }
                      onChange={(e) =>
                        handlePerformanceChange(index, 0, e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="text"
                      placeholder="Enter Performance"
                      name={`past_performance[${index}][1]`}
                      value={
                        intialState.past_performance.split("=")[
                          index * 2 + 1
                        ] || ""
                      }
                      onChange={(e) =>
                        handlePerformanceChange(index, 1, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
        ) : (
          <table className="performance-table">
            <tbody>
              {intialState.past_performance.split("=").map((item, index) => (
                index % 2 === 0 && (
                  <tr key={index}>
                    <td>{item}</td>
                    <td>{intialState.past_performance.split("=")[index + 1] || ""}</td>
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
