import { updateObject } from "../../../utils/helpers/helper";
import {
  USER_LOGIN_START,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_START,
  USER_RELOAD_SUCCESS,
  GET_USER_NOTIFICATIONS_SUCCESS,
} from "../../actionTypes/index";

import { GET_TOTAL_STATEMENT_OF_A_USER } from "../../actionTypes/index";

const initialState = {
  userId: 2,
  pdf_name: "",
  company_info: "Construction Clean Partners LLC",
  company_address1: "715 Peachtree St, Ste 100",
  company_address2: "Atlanta, GA 30308",
  owner_name: "Aduvie Okoh",
  owner_email: "aduvie@final‐clean.com",
  owner_phone: "(202) 544-1353",
  url: "https://final‐clean.com/",
  about_us:
    "Construction Clean Partners works with commercial general contractors as a subcontractor completing the post construction final clean scope. We estimate cleaning bids via the plans and physical site visit walk throughs. CCP mobilizes employee labor and equipment to new construction and renovation commercial projects to help clean interior building sites.",
  core_competencies:
    "Interior post construction cleanup=Pressure washing=Window washing=Covid disinfection and sanitation",
  core_competencies_image: "",
  core_competencies_info: {
    scope: "Final clean",
    naics: "561720",
    duns: "067345638",
  },
  past_performance:
    "Canaan Crossing=Woda Cooper Companies=Allora At the Exchange=CORE Construction=Intrada Westside=JM Wilkerson=Harris County Carver Middle School=Freeman & Associates",
  past_performance_image: "",
  difference:
    "We have been awarded contracts in over 41 cities. We have 9 managers and offices located around the USA that can supervise our local labor and equipment. CCP can get a site visit to confirm scope and pricing within 48 hours notice anywhere in the USA. We will always mobilize within an hour of your job site.",
};

const getTotalStatement = (state) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

export const pdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_STATEMENT_OF_A_USER:
      return getTotalStatement(state);
    // {
    //     ...state, // Ensure you include all existing properties from state
    //     pdf: action.payload, // Update the pdf property with the action payload
    //   };

    default:
      return state;
  }
};

// const loginSuccess = (state, action) => {
//   const { user, refresh, access } = action.data;
//   return updateObject(state, {
//     token: access,
//     loading: false,
//     user: user,
//     refreshToken: refresh,
//     isAuthenticated: true,
//   });
// };

// const loginFail = (state, action) => {
//   return updateObject(state, {
//     error: action.authError,
//     loading: false,
//   });
// };

// const logout = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false,
//     user: null,
//     refreshToken: null,
//     isAuthenticated: false,
//     token: null,
//   });
// };

// const userSignupStart = (state) => {
//   return updateObject(state, {
//     loading: true,
//     error: null,
//   });
// };

// const userSignupSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false,
//     user: null,
//     refreshToken: null,
//     isAuthenticated: false,
//     token: null,
//     message: "Registration Successful, login to continue",
//   });
// };

// const reloadSessionSuccess = (state, action) => {
//   return updateObject(state, {
//     error: null,
//     loading: false,
//     user: action.data,
//   });
// };

// const userSignupFail = (state, action) => {
//   return updateObject(state, {
//     error: action.authError,
//     loading: false,
//   });
// };

// const userNotificationSuccess = (state, action) => {
//   return updateObject(state, {
//     notifications: action.notifications,
//   });
// };
