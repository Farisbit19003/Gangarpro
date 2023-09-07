import React, { useState } from "react";
import "./PDF.css";
import Head from "./Head/Head";
import About from "./About/About";
import Core from "./Core/Core";
import Past from "./Past Performance/Past";
import CCP from "./CCP/CCP";
import { FaEdit } from "react-icons/fa";
import { Button, Modal, FormControl } from "react-bootstrap";
import ColorPicker from "./Color/ColorPicker";
import { useSelector } from "react-redux";

const PDF = () => {
  const pdf = useSelector((state) => state.pdf);
  console.log("pdf=>", pdf);
  const [intialState, setIntialState] = useState({
    userId: 2,
    pdf_name: "",
    company_info: pdf.company_info,
    company_address1: pdf.company_address1,
    company_address2: pdf.company_address2,
    owner_name: pdf.owner_name,
    owner_email: pdf.owner_email,
    owner_phone: pdf.owner_phone,
    url: pdf.url,
    about_us: pdf.about_us,
    core_competencies: pdf.core_competencies,
    core_competencies_image: pdf.core_competencies_image,
    core_competencies_info: pdf.core_competencies_info,
    past_performance: pdf.past_performance,
    past_performance_image: pdf.past_performance_image,
    difference: pdf.difference,
  });
  const [borderColor, setBorderColor] = useState("black");
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control the pop-up
  const [logoUrl, setLogoUrl] = useState("");
  const [pdfName, setPdfName] = useState("");
 


  const handleOnChange = () => {
    setIntialState();
  };
  const handleEditClick = () => {
    setIsEditMode(true);
  };
  const handleBorderColorChange = (color) => {
    setBorderColor(color);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    setShowPopup(true); // Show the pop-up
  };

  const handlePrint = (e) => {
    e.preventDefault();

    // Show only the content within the PDF div
    const pdfContainer = document.getElementById("pdfContainer");
    const originalDisplayStyle = pdfContainer.style.display;
    pdfContainer.style.display = "flex";

    // Print the content
    window.print();

    // Restore the original display style
    pdfContainer.style.display = originalDisplayStyle;
  };

  const handleClose = () => {
    setShowPopup(false); // Close the pop-up
  };

  return (
    <>
      <div className="edit">
        <ColorPicker
          borderColor={borderColor}
          onBorderColorChange={handleBorderColorChange}
        />
        <div className="edit-button" onClick={handleEditClick}>
          <FaEdit size={20} />
        </div>
      </div>
      <div id="pdfContainer" className="PDF" style={{ borderColor }}>
        <div className="PDF_main">
          <Head
            handleOnChange={handleOnChange}
            intialState={intialState}
            isEditMode={isEditMode}
          />
          <About
            handleOnChange={handleOnChange}
            intialState={intialState}
            isEditMode={isEditMode}
          />
          <Core
            handleOnChange={handleOnChange}
            intialState={intialState}
            isEditMode={isEditMode}
          />
          <Past
            handleOnChange={handleOnChange}
            intialState={intialState}
            isEditMode={isEditMode}
          />
          <CCP
            handleOnChange={handleOnChange}
            intialState={intialState}
            isEditMode={isEditMode}
          />
        </div>
      </div>

      <Button variant="danger" size="lg" onClick={handleSave}>
        Save
      </Button>

      {/* Modal for PDF Name and Print */}
      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set PDF Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            value={pdfName}
            placeholder="Enter pdf name"
            onChange={(event) => setPdfName(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="lg" onClick={handlePrint}>
            Print
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PDF;
