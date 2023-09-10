import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./versionbutton.css";
import { AiOutlineEdit, AiFillDelete, AiOutlineLoading } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  DeleteStatement,
  GetTotalStatement,
  GetUserSpeicificStatement,
  ResetState,
} from "../../store/actions/PDF/pdf.actions";
import { useSelector } from "react-redux";

import { Button, Modal, FormControl } from "react-bootstrap";
import PDFVersion_A from "./Versions/PDFVersion_A";
import PDFVersion_B from "./Versions/PDFVersion_B";
import { toast } from "react-toastify";

const PDF = () => {
  const { pdfs, loading } = useSelector((state) => state.pdf);
  const [version, setVersion] = useState("");
  const [ok, setOk] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control the pop-up
  const [DeleteName, setDeleteName] = useState(""); // State to control the pop-up
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location?.search; // This will be "?Salman.pdf"
  // Remove the leading "?" character
  const queryParamValue = queryString.slice(1);
  const onClick = () => {
    setOk(true);
    setVersion("");
  };
  const handleDelete = (p) => {
    setDeleteName(p);
    setShowPopup(true);
  };
  const ConfirmDelete = () => {
    dispatch(DeleteStatement(DeleteName, setShowPopup, setOk, setVersion));
  };
  const handleEdit = (p) => {
    dispatch(GetUserSpeicificStatement(p, navigate, setVersion));
  };
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      toast.error("Please Login");
    } else {
      dispatch(GetTotalStatement());
    }
  }, []);

  const handleVersion = (v) => {
    setVersion(v);
    dispatch(ResetState(v));
  };
  useEffect(() => {
    if (queryParamValue) {
      dispatch(
        GetUserSpeicificStatement(queryParamValue, navigate, setVersion)
      );
    }
  }, [queryParamValue]);
  return (
    <>
      <div style={{ overflow: "auto" }}>
        {ok && version === "" ? (
          <>
            <h1 id="nb" className="text-center mt-5">
              CHOOSE YOUR VERSION
            </h1>
            <div id="nb" className="version">
              <Link className="link" onClick={() => handleVersion("A")}>
                <div className="v_box">
                  <img
                    className="v_pic"
                    src="https://res.cloudinary.com/dc367rgig/image/upload/v1694260593/VA_iup5ma.png"
                    alt="VERSION_A"
                  />
                </div>
              </Link>
              <Link className="link" onClick={() => handleVersion("B")}>
                <div className="v_box">
                  <img
                    className="v_pic"
                    src="https://res.cloudinary.com/dc367rgig/image/upload/v1694260594/VB_oljydc.png"
                    alt="VERSION_B"
                  />
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="in_row">
              <div id="nb" className="CCP_List">
                <h1 className="head">CCP PDFS</h1>
                {pdfs?.map((p) => {
                  return (
                    <div className="pdf_list">
                      {p}
                      <span className="icons">
                        {" "}
                        {loading ? (
                          <AiOutlineLoading size={20} color="blue" />
                        ) : (
                          <AiOutlineEdit
                            cursor="pointer"
                            onClick={() => handleEdit(p)}
                            size={20}
                            color="blue"
                          />
                        )}{" "}
                        <AiFillDelete
                          cursor="pointer"
                          onClick={() => handleDelete(p)}
                          size={20}
                          color="red"
                        />
                      </span>
                    </div>
                  );
                })}

                {pdfs?.length === 3 ? (
                  ""
                ) : (
                  <Button
                    onClick={onClick}
                    className="create_btn"
                    variant="primary"
                    size="lg"
                  >
                    Create New
                  </Button>
                )}
              </div>

              {version === "A" ? (
                <div className="ttp">
                  <PDFVersion_A />
                </div>
              ) : version === "B" ? (
                <div className="ttp">
                  {" "}
                  <PDFVersion_B />{" "}
                </div>
              ) : (
                <>
                  {" "}
                  <div className="c_main" id="nb">
                    <div className="c_head">
                      <img className="c_pic" src="https://res.cloudinary.com/dc367rgig/image/upload/v1694329491/c_statement_wwzghy.jpg" alt="" />
                      <h1 className="c_h1">Capability Statement</h1>
                    </div>
                   <div className="c_info">
                   <h2 className="c_title">
                      Empower Your Enterprise: Showcase Your Experience with
                      Precision and Clarity
                    </h2>
                    <p className="c_para">
                      Boast your corprate image using the Ganarpro Capability
                      Statement. Tailored to engage the businesses of all sizes,
                      this instrument provides a one-page view that encapsulates
                      your firm's foundational strength. With the availabilty of
                      two modifiable templates, creates a statement that aligns
                      seamlessly with your brand's voice. Present all pivotal
                      company information on one concise page.
                    </p>
                   </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <Modal id="nb" show={showPopup} onHide={() => setShowPopup(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Are you Sure You want to Delete?</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
            {/* <Button variant="primary" size="lg" onClick={handlePrint}>
            Print
          </Button> */}
            <Button
              disabled={loading}
              variant="primary"
              size="lg"
              onClick={ConfirmDelete}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default PDF;
