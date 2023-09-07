import { gql } from '@apollo/client';

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
  query GetMeterHistory($serial: String!, $starTime: Int!) {
    getTwelveHourVoltage(serial: $serial, starTime: $starTime)
  }
`;

export const GET_TWELVE_HOUR_WATTS = gql`
  query GetMeterHistory($serial: String!, $starTime: Int!) {
    getTwelveHourWatt(serial: $serial, starTime: $starTime)
  }
`;

export const GET_TWELVE_HOUR_CURRENT = gql`
  query GetMeterHistory($serial: String!, $starTime: Int!) {
    getTwelveHourCurrent(serial: $serial, starTime: $starTime)
  }
`;

export const GET_TWELVE_HOUR_POWER_FACTOR = gql`
  query GetMeterHistory($serial: String!, $starTime: Int!) {
    getTwelveHourPowerFactor(serial: $serial, starTime: $starTime)
  }
`;

export const GET_HISTORY_TOW = gql`
  query ExampleQuery($serial: String!, $month: Int, $year: Int, $starTime: Int) {
    getConsumptionHistory(serial: $serial, month: $month, year: $year, starTime: $starTime)
  }
`;
