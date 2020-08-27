import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as blTemplates } from "./billOfLading";
import styled from "@emotion/styled";
import { SGInvoiceTemplate } from "./PEPPOLTemplate";
export const registry: TemplateRegistry<any> = {    
  BILL_OF_LADING: blTemplates
  PEPPOL_SG_TEMPLATE: 
};
