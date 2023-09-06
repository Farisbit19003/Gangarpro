import React from "react";
import { Form } from "react-bootstrap";
import "./CCP.css";

const CCP = ({ isEditMode, difference, setDifference }) => {
  const handleTextChange = (event) => {
    if (isEditMode) {
      setDifference(event.target.value);
    }
  };

  return (
    <div className="ccp">
      <h1 className="ccp_h">What’s the CCP difference?</h1>

      {isEditMode ? (
        <Form.Control
          className="edit-textarea"
          as="textarea"
          rows={4}
          value={difference}
          onChange={handleTextChange}
        />
      ) : (
        <p>{difference}</p>
      )}
    </div>
  );
};

export default CCP;
