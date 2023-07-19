import React, { useEffect } from 'react';
import { useState } from 'react';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import { GET_METTERS_HISTORY_SERVICES } from '../controllers/measurerController';
import { useQuery } from '@apollo/client';

export default function CardTotalNew(serial) {
  const listMetter = ['FHz', 'NC', 'Ah', 'TExKVarh', 'TExKwh', 'TImKVarh', 'TImKwh', 'TKWh', 'VFBFC', 'VFAFB', 'TSE'];
  const listMetterAlias = {
    FHz: 'Frecuencia',
    NC: 'Corriente en el neutro',
    Ah: 'Amperio hora',
    TExKVarh: 'Reactiva exportada total',
    TExKwh: 'Total activa exportada',
    TImKVarh: 'Total reactiva importada',
    TImKwh: 'Total activa importada',
    TKWh: 'Total activa',
    VFBFC: 'Voltaje fase b fase c',
    VFAFB: 'Voltaje fase a fase b',
    TSE: 'Total energía sistema',
  };

  const { data } = useQuery(GET_METTERS_HISTORY_SERVICES, {
    variables: serial,
    fetchPolicy: 'no-cache',
  });

  const [currentElectricMeasure, setCurrentElectricMeasure] = React.useState(1);
  const recordsPerMeasure = 4;
  const lastIndex = currentElectricMeasure * recordsPerMeasure;
  const firstIndex = lastIndex - recordsPerMeasure;
  const recordsMeasures = listMetter.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(listMetter.length / recordsPerMeasure);
  const numbers = [...Array(totalPages + 1).keys()].slice(4);
  const [dataVariables, setDataVariables] = useState();
  const [dataName, setDataName] = useState();
  const [variableAbre, setVariableAbre] = useState('');

  console.log(recordsMeasures);

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
    setVariableAbre(name);
    const arrayValue = data.getMeterHistoryVariables[0];
    for (const key in arrayValue) {
      if (key === name) {
        setDataVariables(arrayValue[key]);
        setDataName(listMetterAlias[key]);
      }
    }
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
            display: 'flex',
            transform: 'rotate(90deg)',
            color: '#B3B3B3',
          }}
          className="button_back"
          onClick={prePage}
        />

        <div
          className={`${
            recordsMeasures[0] === variableAbre ? 'container_value_button' : 'container_value_button_normal'
          } `}
          onClick={handleNameValue}
        >
          {recordsMeasures[0]}
        </div>

        <div
          className={`${
            recordsMeasures[1] === variableAbre ? 'container_value_button' : 'container_value_button_normal'
          } `}
          onClick={handleNameValue}
        >
          {recordsMeasures[1]}
        </div>

        <div
          className={`${
            recordsMeasures[2] === variableAbre ? 'container_value_button' : 'container_value_button_normal'
          } `}
          onClick={handleNameValue}
        >
          {recordsMeasures[2]}
        </div>
        <div
          className={`${
            recordsMeasures[3] === variableAbre ? 'container_value_button' : 'container_value_button_normal'
          } `}
          onClick={handleNameValue}
        >
          {recordsMeasures[3]}
        </div>

        <ArrowDropDownCircleIcon
          sx={{
            display: 'flex',
            transform: 'rotate(270deg)',
            color: '#B3B3B3',
          }}
          onClick={nextPage}
        />
      </div>
    </div>
  );
}
