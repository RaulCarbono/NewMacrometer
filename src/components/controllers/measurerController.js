import { gql } from "@apollo/client";

export const GET_METTERS = gql`
  query GetMeters {
    getMeters {
      _id
      model
      serial
    }
  }
`;

// export const GET_ONE_VARIABLE = gql`
//     query(serial:string
//         CFA:string)
// `;

export const GET_METTERS_HISTORY = gql`
  query GetMeterHistory($serial: String!) {
    getMeterHistory(serial: $serial) {
      VFA
      VFB
      VFC
      CFA
      CFB
      CFC
      FPFA
      FPFB
      FPFC
      PAFA
      PAFB
      PAFC
    }
  }
`;

export const GET_METTERS_HISTORY_SERVICES = gql`
  query GetMeterHistoryVariables($serial: String!) {
    getMeterHistoryVariables(serial: $serial) {
      fecha
      FHz
      NC
      Ah
      TExKVarh
      TExKwh
      TImKVarh
      TImKwh
      TKWh
      VFBFC
      VFAFB
      VFCFA
      TSE
    }
  }
`;
