import { toast } from "react-toastify";
import axios from 'axios';
import { api } from "../../../utils/constants/api";
import { isEmpty, toastSuccess } from "../../../utils/helpers/helper";
import { CapabilityStatement, DeleteUserStatement, GetSpecificStatement, TotalStatement } from "../../../utils/requests/pdf";
import { PDFSAVING_SUCCESS, PDFSAVING_START, PDFSAVING_FAILED, GetTotalStatement_FAILED, GetTotalStatement_SUCCESS, GetSpecificStatement_SUCCESS, GetSpecificStatement_FAILED } from "../../actionTypes";

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
export const GetTotalStatementSuccess = (data) => {
  return {
    type: GetTotalStatement_SUCCESS,
    data,
  };
};

export const GetSpecificStatementFailed = (Error) => {
  return {
    type: GetTotalStatement_FAILED,
    Error,
  };
};

export const GetSpecificStatementSuccess = (data) => {
  return {
    type: GetSpecificStatement_SUCCESS,
    data,
  };
};

export const GetTotalStatementFailed = (Error) => {
  return {
    type: GetSpecificStatement_FAILED,
    Error,
  };
};

export const SaveCapabilityStatement= (formData,setIsEditMode,setShowPopup) => async (dispatch, getState) => {
  try {
    dispatch(SavingPDFStart());

    let { access } = getState();
    if (isEmpty(access)) {
      access = JSON.parse(localStorage.getItem('token'));
    }

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${access}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/v1/`+api.PDF.capabilityStatement,
      formData,
      config
    );
    if(data.error)
    {
      toast.error(data.error);
      setIsEditMode(false);
      setShowPopup(false);
    }
    else{
      toast.success("PDF Saved");
      setIsEditMode(false);
      setShowPopup(false);
      dispatch(SavingPDFSuccess(data));
    }
    dispatch(GetTotalStatement())
  } catch (error) {
    const message =
      error.response && error.response.data
        ? error.response.data
        : error.message;
    if (message === 'Not authorized, token failed') {
      // Handle logout or other actions as needed
    }
    toast.error(message+"PDF Saving failed")
    dispatch(SavingPDFStart("PDF Saving Failed"));
  }
};

export const GetTotalStatement = () => {
  let user =JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return toast.error("Please Login")
    }
  return async (dispatch) => {
    return TotalStatement(user.id)
      .then(async (response) => {
        await dispatch(GetTotalStatementSuccess(response));
      })
      .catch((error) => {
        toast.error("Get Total Statement  Failed Failed")
        dispatch(GetTotalStatementFailed("Get Total Statement  Failed"));
      });
  };
};
export const DeleteStatement = (name,setShowPopup) => {
  let user =JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return toast.error("Please Login")
    }
  return async (dispatch) => {
    return DeleteUserStatement(user.id,name)
      .then(async (response) => {
        await dispatch(GetTotalStatement());
        toast.success("Statement Deleted")
        setShowPopup(false)
      })
      .catch((error) => {
        toast.error("Statement Deleted Failed")
      });
  };
};
export const GetUserSpeicificStatement = (name,navigate) => {
  let user =JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return toast.error("Please Login")
    }
  return async (dispatch) => {
    return GetSpecificStatement(user.id,name)
      .then(async (response) => {
        const {version,pdf_name}=response
        await dispatch(GetSpecificStatementSuccess(response));
        // if(version==="A"){
        //   navigate(`/pdf/Version-A?${pdf_name}`)
        // }else{
        //   navigate(`/pdf/Version-B?${pdf_name}`)
        // }
      })
      .catch((error) => {
        toast.error("Get Statement Failed")
        dispatch(GetSpecificStatement_FAILED("Get Statement Failed"));
      });
  };
};


