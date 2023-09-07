import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./versionbutton.css";
import { Button } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

const PDF = () => {
  const [ok, setOk] = useState(false);
  const onClick = () => {
    setOk(true);
    console.log("clicked");
  };
  return (
    <>
      {!ok ? (
        <div className="CCP_List">
          <h1 className="head">CCP PDFS</h1>
          <div className="pdf_list">
            Hello.pdf{" "}
            <span className="icons">
              {" "}
              <AiOutlineEdit size={20} color="blue" />{" "}
              <AiFillDelete size={20} color="red" />
            </span>
          </div>
          <div className="pdf_list">
            Hello.pdf
            <span className="icons">
              <AiOutlineEdit size={20} color="blue" />
              <AiFillDelete size={20} color="red" />
            </span>
          </div>
          <div className="pdf_list">
            Hello.pdf{" "}
            <span className="icons">
              {" "}
              <AiOutlineEdit size={20} color="blue" />{" "}
              <AiFillDelete size={20} color="red" />
            </span>
          </div>
          <Button onClick={onClick} className="btn" variant="primary" size="lg">
            Create New
          </Button>
        </div>
      ) : (
        <div className="version">
          <Link className="link" to="/pdf/Version-A">
            <div className="v_box">Version A</div>
          </Link>
          <Link className="link" to="/pdf/Version-B">
            <div className="v_box">Version B</div>
          </Link>
        </div>
      )}
    </>
  );
};

export default PDF;
