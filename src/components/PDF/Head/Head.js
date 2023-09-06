import React from "react";
import { Form } from "react-bootstrap";
import "./Head.css";

const Head = ({
  isEditMode,
  logoUrl,
  setLogoUrl,
  companyInfo,
  setCompanyInfo,
  companyAddress1,
  setCompanyAddress1,
  companyAddress2,
  setCompanyAddress2,
  ownerName,
  setOwnerName,
  ownerPhone,
  setOwnerPhone,
  ownerEmail,
  setOwnerEmail,
  url,
  setUrl,
}) => {
  return (
    <>
      <div className="head">
        <div className="main">
          <div className="logo">
            <img className="logo" src="../ccp-logo.png" alt="default-logo" />
          </div>
          <div className="heading">
            <h2 className="head_h">CAPTABILTIES STATEMENT</h2>
          </div>
        </div>

        <div className="info">
          {isEditMode ? (
            <>
              <Form.Control
                className="edit"
                type="text"
                placeholder="compony info"
                value={companyInfo}
                onChange={(e) => setCompanyInfo(e.target.value)}
              />
              <Form.Control
                className="edit"
                type="text"
                placeholder="company address 1"
                value={companyAddress1}
                onChange={(e) => setCompanyAddress1(e.target.value)}
              />
              <Form.Control
                className="edit"
                type="text"
                placeholder=""
                value={companyAddress2}
                onChange={(e) => setCompanyAddress2(e.target.value)}
              />
              <Form.Control
                className="edit"
                type="text"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
              <Form.Control
                className="edit"
                type="text"
                value={ownerPhone}
                onChange={(e) => setOwnerPhone(e.target.value)}
              />
              <Form.Control
                className="edit"
                type="text"
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
              />
              <Form.Control
                className="edit-textarea"
                as="textarea"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </>
          ) : (
            <>
              <p className="company-info">{companyInfo}</p>
              <p className="company-address">{companyAddress1}</p>
              <p className="company-address">{companyAddress2}</p>
              <p className="owner-info">{ownerName}</p>
              <p className="owner-info">{ownerPhone}</p>
              <p className="owner-info">{ownerEmail}</p>
              <p className="website">
                <a href={url}>{url}</a>
              </p>
            </>
          )}
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Head;
