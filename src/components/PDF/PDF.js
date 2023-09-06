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

const PDF = () => {
  const [borderColor, setBorderColor] = useState("black");
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State to control the pop-up
  const [logoUrl, setLogoUrl] = useState("");
  const [pdfName, setPdfName] = useState("");
  const [companyInfo, setCompanyInfo] = useState(
    "Construction Clean Partners LLC"
  );
  const [companyAddress1, setCompanyAddress1] = useState(
    "715 Peachtree St, Ste 100"
  );
  const [companyAddress2, setCompanyAddress2] = useState("Atlanta, GA 30308 ");
  const [ownerName, setOwnerName] = useState("Aduvie Okoh");
  const [ownerPhone, setOwnerPhone] = useState("(202) 544-1353");
  const [ownerEmail, setOwnerEmail] = useState("aduvie@final‐clean.com");
  const [url, setUrl] = useState("https://final‐clean.com/");
  const [aboutUs, setAboutUs] = useState(
    "Construction Clean Partners works with commercial general contractors as a subcontractor completing the post construction final clean scope. We estimate cleaning bids via the plans and physical site visit walk throughs. CCP mobilizes employee labor and equipment to new construction and renovation commercial projects to help clean interior building sites."
  );
  const [coreCompetencies, setCoreCompetencies] = useState(
    "Interior post construction cleanup=Pressure washing=Window washing=Covid disinfection and sanitation"
  );
  const [coreCompetenciesInfo, setCoreCompetenciesInfo] = useState({
    scope: "Final clean",
    naics: "561720",
    duns: "067345638",
  });

  const [coreCompetenciesImage, setCoreCompetenciesImage] = useState("");
  const [pastPerformance, setPastPerformance] = useState(
    "Canaan Crossing=Woda Cooper Companies=Allora At the Exchange=CORE Construction=Intrada Westside=JM Wilkerson=Harris County Carver Middle School=Freeman & Associates"
  );
  const [pastPerformanceImage, setPastPerformanceImage] = useState("");
  const [difference, setDifference] = useState(
    "We have been awarded contracts in over 41 cities. We have 9 managers and offices located around the USA that can supervise our local labor and equipment. CCP can get a site visit to confirm scope and pricing within 48 hours notice anywhere in the USA. We will always mobilize within an hour of your job site."
  );

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
            logoUrl={logoUrl}
            setLogoUrl={setLogoUrl}
            companyInfo={companyInfo}
            setCompanyInfo={setCompanyInfo}
            companyAddress1={companyAddress1}
            setCompanyAddress1={setCompanyAddress1}
            companyAddress2={companyAddress2}
            setCompanyAddress2={setCompanyAddress2}
            ownerName={ownerName}
            setOwnerName={setOwnerName}
            ownerPhone={ownerPhone}
            setOwnerPhone={setOwnerPhone}
            ownerEmail={ownerEmail}
            setOwnerEmail={setOwnerEmail}
            url={url}
            setUrl={setUrl}
            isEditMode={isEditMode}
          />
          <About
            aboutUs={aboutUs}
            setAboutUs={setAboutUs}
            isEditMode={isEditMode}
          />
          <Core
            coreCompetencies={coreCompetencies}
            setCoreCompetencies={setCoreCompetencies}
            coreCompetenciesInfo={coreCompetenciesInfo}
            setCoreCompetenciesInfo={setCoreCompetenciesInfo}
            coreCompetenciesImage={coreCompetenciesImage}
            setCoreCompetenciesImage={setCoreCompetenciesImage}
            isEditMode={isEditMode}
          />
          <Past
            pastPerformance={pastPerformance}
            setPastPerformance={setPastPerformance}
            pastPerformanceImage={pastPerformanceImage}
            setPastPerformanceImage={setPastPerformanceImage}
            isEditMode={isEditMode}
          />
          <CCP
            difference={difference}
            setDifference={setDifference}
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
