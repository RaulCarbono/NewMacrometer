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

export const GET_TWELVE_HOUR_VOLTAGE = gql`
  query Query($serial: String!, $day: String!) {
    getTwelveHourVoltage(serial: $serial, Day: $day)
  }
`;

export const GET_TWELVE_HOUR_WATTS = gql`
  query Query($serial: String!, $day: String!) {
    getTwelveHourWatt(serial: $serial, Day: $day)
  }
`;

export const GET_TWELVE_HOUR_CURRENT = gql`
  query Query($serial: String!, $day: String!) {
    getTwelveHourCurrent(serial: $serial, Day: $day)
  }
`;

export const GET_TWELVE_HOUR_POWER_FACTOR = gql`
  query Query($serial: String!, $day: String!) {
    getTwelveHourPowerFactor(serial: $serial, Day: $day)
  }
`;
