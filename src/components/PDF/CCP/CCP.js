import React from "react";
import { Form } from "react-bootstrap";
import "./CCP.css";

const CCP = ({ isEditMode, intialState, handleOnChange,page }) => {
  return (
    <div className="ccp">

      <h1 className="ccp_h">DIFFERENTIATORS</h1>

      {isEditMode ? (
        <Form.Control
          className="edit-textarea"
          as="textarea"
          rows={4}
          name="difference"
          value={intialState.difference}
          onChange={handleOnChange}
        />
      ) : (
        <p>{intialState.difference}</p>
      )}
    </div>
  );
};

export default CCP;
