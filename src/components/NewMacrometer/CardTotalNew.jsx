import React, { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

import { GET_METTERS_HISTORY_SERVICES } from "../controllers/measurerController";
import { useQuery } from "@apollo/client";
import { each } from "highcharts";
export default function CardTotalNew({ serial }) {
  const opcionesFormateo = {
    minimumFractionDigits: 1, // Fijar el número mínimo de dígitos fraccionarios en 1
    maximumFractionDigits: 1, // Fijar el número máximo de dígitos fraccionarios en 1
    useGrouping: true, // Habilitar el agrupamiento de miles
  };

  const listMetter = [
    "FHz",
    "NC",
    "Ah",
    "TExKVarh",
    "TExKwh",
    "TImKVarh",
    "TImKwh",
    "TKWh",
    "VFBFC",
    "VFAFB",
    "TSE",
  ];
  const listMetterAlias = {
    FHz: "Frecuencia",
    NC: "Corriente en el neutro",
    Ah: "Amperio hora",
    TExKVarh: "Reactiva exportada total",
    TExKwh: "Total activa exportada",
    TImKVarh: "Total reactiva importada",
    TImKwh: "Total activa importada",
    TKWh: "Total activa",
    VFBFC: "Voltaje fase b fase c",
    VFAFB: "Voltaje fase a fase b",
    TSE: "Total energía sistema",
  };

  const { loading, error, data } = useQuery(GET_METTERS_HISTORY_SERVICES, {
    variables: serial,
    fetchPolicy: "no-cache",
  });

  const [dataVariables, setDataVariables] = useState();
  const [dataName, setDataName] = useState("");
  const [variableAbre, setVariableAbre] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectNewVariable = (e, index, listMetter, next = true) => {
    let name = e.target.outerText;
    setVariableAbre(name);
    const arrayValue = data.getMeterHistoryVariables[0];
    const condition = next
      ? selectedIndex < listMetter.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : listMetter.length - 1;
    for (const nextIndex in arrayValue) {
      if (nextIndex === name) {
        setDataVariables(arrayValue[nextIndex]);
        setDataName(listMetterAlias[nextIndex]);
      }
    }
  };

  const handleNameValue = (e) => {
    let name = e.target.outerText;
    setVariableAbre(name);
    const arrayValue = data.getMeterHistoryVariables[0];
    for (const key in arrayValue) {
      if (key === name) {
        setDataVariables(arrayValue[key]);
        setDataName(listMetterAlias[key]);
      }
    }
  };

  const previus = () => {
    selectNewVariable(selectedIndex, listMetter, false);
  };
  const next = () => {
    selectNewVariable(selectedIndex, listMetter);
  };

  return (
    <div className="_carTotalNew_ ">
      <div className="__details_measurer_information_card_title__ background_CFT  background_CFA">
        <strong> LECTURA ACTUAL {String(dataName).toUpperCase()}</strong>
      </div>
      <div className="__details_measurer_consumption_voltage_variable_value__">
        <span>{dataVariables}</span>
      </div>
      <div className="container_values_songs ">
        <ArrowDropDownCircleIcon
          sx={{
            display: "flex",
            transform: "rotate(90deg)",
            color: "#B3B3B3",
          }}
          className="button_back"
          onClick={previus}
        />

        <div
          className={`${
            listMetter[0] === variableAbre
              ? "container_value_button"
              : "container_value_button_normal"
          } `}
          onClick={handleNameValue}
        >
          {listMetter[0]}
        </div>

        <div
          className={`${
            listMetter[1] === variableAbre
              ? "container_value_button"
              : "container_value_button_normal"
          } `}
          onClick={handleNameValue}
        >
          {listMetter[1]}
        </div>

        <div
          className={`${
            listMetter[2] === variableAbre
              ? "container_value_button"
              : "container_value_button_normal"
          } `}
          onClick={handleNameValue}
        >
          {listMetter[2]}
        </div>

        <ArrowDropDownCircleIcon
          sx={{
            display: "flex",
            transform: "rotate(270deg)",
            color: "#B3B3B3",
          }}
          onClick={next}
        />
      </div>
    </div>
  );
}
