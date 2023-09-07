import { api } from "../constants/api";
import { get$, post$ } from "./index";

export const CapabilityStatement = (data) => {
  return post$(api.PDF.capabilityStatement, data);
};

