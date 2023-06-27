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
    "Fhz",
    "NC",
    "Ah",
    "TExKVarh",
    "TExKwh",
    "TImKVarh",
    "TImKwh",
    "TKWh",
    "VFBFC",
    "VFAFB",
  ];

  const [currentElectricMeasure, setCurrentElectricMeasure] = React.useState(1);
  const recordsPerMeasure = 4;
  const lastIndex = currentElectricMeasure * recordsPerMeasure;
  const firstIndex = lastIndex - recordsPerMeasure;
  const recordsMeasures = listMetter.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(listMetter.length / recordsPerMeasure);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const [dataVariables, setDataVariables] = useState();

  const { loading, error, data } = useQuery(GET_METTERS_HISTORY_SERVICES, {
    variables: serial,
    fetchPolicy: "no-cache",
  });

  console.log(data);

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
    const name = e.target.outerText;
    const arrayValue = data.setDataVariables(
      `${data.getMeterHistoryVariables[0]}.${name}`
    );
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
    <div className="__details_measurer_consumption_voltage_variable__">
      <div className="__details_measurer_information_card__">
        <div className="__details_measurer_information_card_title__">
          <strong>LECTURA ACTUAL</strong>
        </div>
        <div className="__details_measurer_information_card_container__">
          <div className="__details_measurer_information_card_now__">
            <span>{dataVariables}</span>
          </div>
        </div>
      </div>
      <div className="__details_measurer_consumption_voltage_variable_value__">
        <div className="container_value">
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
        </div>
        {/* <table>
          <tr>
            <Tooltip title="Activa exportada total" placement="top" arrow>
              <td>{recordsMeasures[3]}</td>
            </Tooltip>
            <Tooltip title="Reactiva importada" placement="top" arrow>
              <td>{listMetter[5]}</td>
            </Tooltip>
          </tr>
          <tr>
            <Tooltip title="Activa importada" placement="top" arrow>
              <td>{listMetter[6]}</td>
            </Tooltip>
            <Tooltip title="Kilovatio hora total" placement="top" arrow>
              <td>{listMetter[7]}</td>
            </Tooltip>
          </tr>
        </table> */}
        <button onClick={prePage}>
          {" "}
          <ArrowBackIcon onClick={prePage} />
        </button>
        <button onClick={nextPage}>
          <ArrowForwardIcon onClick={nextPage} />
        </button>
      </div>
    </div>
  );
}
