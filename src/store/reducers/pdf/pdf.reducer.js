import { updateObject } from "../../../utils/helpers/helper";
import { PDFSAVING_FAILED,PDFSAVING_SUCCESS,PDFSAVING_START } from "../../actionTypes/index";

const initialState = {
  id: "",
  pdf_name: "",
  logo_url:"",
  error: null,
  loading: false,
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
  core_competencies_image: "https://res.cloudinary.com/die5mkbau/image/upload/v1694085238/ccp-logo_wryb63.png",
  core_competencies_info: "Scope – Final clean = NAICS – 561720 = DUNS – 067345638",
  past_performance:
    "Canaan Crossing=Woda Cooper Companies=Allora At the Exchange=CORE Construction=Intrada Westside=JM Wilkerson=Harris County Carver Middle School=Freeman & Associates",
  past_performance_image: "https://res.cloudinary.com/die5mkbau/image/upload/v1694085238/ccp-logo_wryb63.png",
  difference:
    "We have been awarded contracts in over 41 cities. We have 9 managers and offices located around the USA that can supervise our local labor and equipment. CCP can get a site visit to confirm scope and pricing within 48 hours notice anywhere in the USA. We will always mobilize within an hour of your job site.",
};

const StartSavingPDF = (state) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};
const SavingPDFSuccess = (state, action) => {
  action.data.loading=false;
  console.log("Reducer",action.data);
  return updateObject(state, action.data);
};
console.log("Reducer",initialState);
const PDFSavingFail = (state, action) => {
  return updateObject(state, {
    error: action.Error,
    loading: false,
  });
};


export const pdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case PDFSAVING_START:
    return StartSavingPDF(state,action);
    case PDFSAVING_SUCCESS:
    return SavingPDFSuccess(state,action);
    case PDFSAVING_FAILED:
    return PDFSavingFail(state,action);
    default:
      return state;
  }
};