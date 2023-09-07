import { toast } from "react-toastify";
import { CapabilityStatement } from "../../../utils/requests/pdf";
import { PDFSAVING_SUCCESS,PDFSAVING_START,PDFSAVING_FAILED } from "../../actionTypes";

  export const SavingPDFStart = () => {
    return {
      type: PDFSAVING_START,
    };
  };
  
  export const SavingPDFSuccess = (data) => {
    return {
      type: PDFSAVING_SUCCESS,
      data,
    };
  };
  
  export const SavingPDFFailed = (Error) => {
    return {
      type: PDFSAVING_FAILED,
      Error,
    };
  };

  export const SaveCapabilityStatement = (PDFDetail,setIsEditMode,setShowPopup ) => {
    return async (dispatch) => {
      dispatch(SavingPDFStart());
  
      return CapabilityStatement(PDFDetail)
        .then(async (response) => {
          await dispatch(SavingPDFSuccess(response));
          toast.success("PDF Save Successful");
          setIsEditMode(false)
          setShowPopup(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("PDF Saving Failed")
          dispatch(SavingPDFFailed("PDF Saving Failed"));
        });
    };
  };
  
  
