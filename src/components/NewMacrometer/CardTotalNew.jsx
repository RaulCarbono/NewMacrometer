import React, { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { GET_METTERS_HISTORY_SERVICES } from "../controllers/measurerController";
import { useQuery } from "@apollo/client";
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
    " TSE",
  ];

  const [currentElectricMeasure, setCurrentElectricMeasure] = React.useState(1);
  const recordsPerMeasure = 4;
  const lastIndex = currentElectricMeasure * recordsPerMeasure;
  const firstIndex = lastIndex - recordsPerMeasure;
  const recordsMeasures = listMetter.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(listMetter.length / recordsPerMeasure);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const [dataVariables, setDataVariables] = useState();
  const [dataName, setDataName] = useState();

  const { loading, error, data } = useQuery(GET_METTERS_HISTORY_SERVICES, {
    variables: serial,
    fetchPolicy: "no-cache",
  });

  const prePage = () => {
    if (currentElectricMeasure !== 1) {
      setCurrentElectricMeasure(currentElectricMeasure - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentElectricMeasure(id);
  };

  const nextPage = () => {
    if (currentElectricMeasure !== totalPages) {
      setCurrentElectricMeasure(currentElectricMeasure + 1);
    }
  };

  const handleNameValue = (e) => {
    let name = e.target.outerText;
    setDataName(name);
    const arrayValue = data.getMeterHistoryVariables[0];
    for (const key in arrayValue) {
      if (key === name) {
        setDataVariables(arrayValue[key]);
      }
    }
  };

  console.log(dataVariables);

  // useEffect(() => {
  //   const numero = data.getMetterAndMetterHistories.lecturaActual.toFixed(2);
  //   const opcionesFormateo = {
  //     minimumFractionDigits: 1, // Fijar el número mínimo de dígitos fraccionarios en 1
  //     maximumFractionDigits: 1, // Fijar el número máximo de dígitos fraccionarios en 1
  //     useGrouping: true, // Habilitar el agrupamiento de miles
  //   };
  //   const numeroFormateado = numero.toLocaleString("es-ES", opcionesFormateo);

  //   //console.log(numeroFormateado, "sale esto"); // Salida: "152.036,0"
  // }, [data]);
  console.log(data);

  return (
    <div className="_carTotalNew_ ">
      <div className="__details_measurer_information_card_title__ background_CFT  background_CFA">
        <strong>LECTURA ACTUAL {dataName}</strong>
      </div>
      <div className="__details_measurer_consumption_voltage_variable_value__">
        <span>{dataVariables}</span>
      </div>
      <div className="container_values_songs ">
        <ArrowBackIcon className="button_back" onClick={prePage} />

        <Tooltip title="Frecuencia" placement="top" arrow>
          <div className="container_value_button" onClick={handleNameValue}>
            {recordsMeasures[0]}
          </div>
        </Tooltip>
        <Tooltip title="Corriente en el neutro" placement="top" arrow>
          <div onClick={handleNameValue}>{recordsMeasures[1]}</div>
        </Tooltip>

        <Tooltip title="Amperios hora" placement="top" arrow>
          <div onClick={handleNameValue}>{recordsMeasures[2]}</div>
        </Tooltip>

        <Tooltip title="Reactiva exportada total" placement="top" arrow>
          <div onClick={handleNameValue}>{recordsMeasures[3]}</div>
        </Tooltip>
        <ArrowForwardIcon onClick={nextPage} />
      </div>
    </div>
  );
}
