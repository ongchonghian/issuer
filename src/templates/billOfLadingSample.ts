import { Document } from "@govtechsg/decentralized-renderer-react-components";

export interface BLCertificate extends Document {
  blNumber: string;
  vessel: string;
  voyageNo: string;
  portOfLoading: string;
  portOfDischarge: string;
  packages?: {
    description: string;
    weight: string;
    measurement: string;
  }[];
  shipper?: {
    name?: string;
    address?: {
      street: string;
      country: string;
    };
  };
  consignee?: { name?: string };
  notifyParty?: { name?: string };
}

export const blCertificate: BLCertificate = {
  blNumber: ("BL"+Math.floor(Math.random()*(999999)+100000)),
  packages: [
    {
      description: "description",
      weight: Math.floor(Math.random()*(999)+1),
      measurement: Math.floor(Math.random()*(999)+1)
    }
  ],
  shipper: {
    name: "Atlantic Logistics",
    address: {
      street: "92, Ubi Avenue 3 S408867",
      country: "SINGAPORE"
    }
  },
  vessel: "Atlantic Gold "+Math.floor(Math.random()*(999)+1),
  voyageNo: "VOG"+Math.floor(Math.random()*(999)+1),
  consignee: {
    name: "Consignee name"
  },
  notifyParty: {
    name: "Notify Party Name"
  },
  portOfDischarge: "Paris",
  portOfLoading: "Singapore"
};
