import React, { useEffect, useState } from "react";
import "./PDF.css";
import Head from "../Head/Head";
import About from "../About/About";
import Core from "../Core/Core";
import Past from "../Past Performance/Past";
import CCP from "../CCP/CCP";
import { FaEdit } from "react-icons/fa";
import { Button, Modal, FormControl } from "react-bootstrap";
import ColorPicker from "../Color/ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  GetUserSpeicificStatement,
  SaveCapabilityStatement,
} from "../../../store/actions/PDF/pdf.actions";
import { useLocation, useNavigate } from "react-router-dom";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import { useRef } from "react";
import { throttle } from "lodash";

const PDFVersion_B = () => {
  const Data = useSelector((state) => state.pdf);
  const [loading, setLoading] = useState(false);

  const pdf = Data.values;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const queryString = location?.search; // This will be "?Salman.pdf"
  const queryParamValue = queryString.slice(1);
  const [InitialWidth, setInitialWidth] = useState(false);

  const pdfWrapper = useRef(null);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
    console.log(InitialWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 5000));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 5000));
    };
  }, []);
  const [intialState, setIntialState] = useState({
    userId: 2,
    version: "B",
    pdf_name: pdf?.pdf_name,
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

  useEffect(() => {
    setIntialState({
      userId: 2,
      version: "B",
      pdf_name: pdf?.pdf_name,
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
  }, [pdf]);
  const handleOnChange = (e) => {
    setIntialState({
      ...intialState,
      [e.target.name]: e.target.value,
    });
    console.log(intialState);
  };
  const handleEditClick = () => {
    setIsEditMode(true);
  };
  const handleBorderColorChange = (color) => {
    setBorderColor(color);
  };

  const handlePopup = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    setShowPopup(true); // Show the pop-up
  };
  const handleSave = (e) => {
    let formData = new FormData();
    for (const key in intialState) {
      if (intialState[key] !== undefined) {
        formData.append(key, intialState[key]);
      }
    }
    // Check if any field is empty
    const isEmptyField = Object.values(intialState).some(
      (value) => value === ""
    );
    if (isEmptyField) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    dispatch(SaveCapabilityStatement(formData, setIsEditMode, setShowPopup));
  };

  const handlePrint = (e) => {
    e.preventDefault();
    //Show only the content within the PDF div
    const pdfContainer = document.getElementById("B_cont");
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

  //   const options = {
  //     page: {
  //        // margin is in MM, default is Margin.NONE = 0
  //        margin: Margin.SMALL,
  //        // default is 'A4'
  //     },
  //     canvas: {
  //        // default is 'image/jpeg' for better size performance
  //        qualityRatio: 1
  //     },

  //     overrides: {
  //        // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
  //        pdf: {
  //           compress: true
  //        },
  //        // see https://html2canvas.hertzen.com/configuration for more options
  //        canvas: {
  //           useCORS: true
  //        }
  //     },
  //  };

  // you can use a function to return the target element besides using React refs
  //const getTargetElement = () => document.getElementById('pdf');

  //  const generatepdf=()=>{
  //   setLoading(true)
  //   generatePDF(pdfWrapper,options).then((response)=>{
  //    console.log(response);
  //    setLoading(false)
  //   }).catch(()=>{

  //   })
  //  }
  return (
    <>
      <div id="nb" className="edit">
        <ColorPicker
          borderColor={borderColor}
          onBorderColorChange={handleBorderColorChange}
        />
        {!isEditMode && (
          <div className="edit-button" onClick={handleEditClick}>
            <FaEdit size={20} />
          </div>
        )}
        {isEditMode && (
          <Button
            variant="danger"
            size="lg"
            onClick={() => setIsEditMode(false)}
          >
            Cancel
          </Button>
        )}
      </div>
      <div >
        <div id="B_cont" className="PDF">
          <div className="PDF_main" style={{ borderColor }}>
            <Head
              handleOnChange={handleOnChange}
              intialState={intialState}
              isEditMode={isEditMode}
              Logo_Url={Data?.logo_url}
            />
            <br />
            <About
              handleOnChange={handleOnChange}
              intialState={intialState}
              isEditMode={isEditMode}
            />
            <br />
            <Core
              handleOnChange={handleOnChange}
              intialState={intialState}
              isEditMode={isEditMode}
            />
            <br />
            <Past
              handleOnChange={handleOnChange}
              intialState={intialState}
              isEditMode={isEditMode}
            />
            <br />
            <CCP
              handleOnChange={handleOnChange}
              intialState={intialState}
              isEditMode={isEditMode}
            />
            <>
              <ul className="c_list">
                <li>Annual subscription for GC Planify: $490.</li>
                <li>Zero enrollment fee.</li>
                <li>Recruitment fee: 20% of the new hire's salary.</li>
              </ul>
            </>
          </div>
        </div>
      </div>
      <div className="s-p" id="nb">
        <Button variant="primary" size="lg" onClick={handlePopup}>
          Save
        </Button>
        <Button variant="primary" size="lg" onClick={handlePrint}>
          Print
        </Button>
      </div>

      {/* Modal for PDF Name and Print */}
      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set PDF Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="text"
            value={intialState.pdf_name}
            name="pdf_name"
            placeholder="Enter pdf name"
            onChange={handleOnChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Close
          </Button>

          <Button
            disabled={Data.loading}
            variant="primary"
            size="lg"
            onClick={handleSave}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PDFVersion_B;
