import { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Tooltip from "@mui/material/Tooltip";
import { useQuery } from "@apollo/client";
import { GET_METTERS_HISTORY } from "../controllers/measurerController";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardPhaseANew = ({ serial }) => {
  const { loading, error, data } = useQuery(GET_METTERS_HISTORY, {
    variables: serial,
    fetchPolicy: "no-cache",
  });
  const [mettersAlias, setMetterAlias] = useState();

  const medidas = data?.getMeterHistory[0];

  const medidasInt = parseInt(medidas?.PAFA);

  const medidaString = String(medidasInt);

  const percentageValue = (value) => {
    if (value?.length < 2) {
      return (parseInt(value) / 10) * 100;
    } else if (value.length < 3) {
      return (parseInt(value) / 100) * 100;
    } else if (value.length < 4) {
      return (parseInt(value) / 1000) * 100;
    } else if (value.length < 5) {
      return (parseInt(value) / 10000) * 100;
    } else if (value.length < 6) {
      return (parseInt(value) / 100000) * 100;
    } else if (value.length < 7) {
      return (parseInt(value) / 1000000) * 100;
    } else if (value.length < 8) {
      return (parseInt(value) / 10000000) * 100;
    } else if (value.length < 9) {
      return (parseInt(value) / 100000000) * 100;
    } else if (value.length < 10) {
      return (parseInt(value) / 1000000000) * 100;
    }
  };
  return (
    <div className="_cardMeasurers_container_">
      <div className="__details_measurer_consumption_variables_CFA_graphic__">
        <div className="__details_measurer_consumption_variables_CFA_graphic_title__ background_CFA">
          <span className="__details_measurer_consumption_variables_CFA_graphic_title__span">
            Fase A{" "}
          </span>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_graphic_image__">
          <SemiCircleProgressBar
            percentage={`${percentageValue(medidaString)}`}
            background="#F2F2F2"
            strokeWidth={25}
            stroke="#f7ce68"
          />
          <span>Watts {medidas?.PAFA} </span>
        </div>
      </div>
      <div className="__details_measurer_consumption_variables_CFA_value__">
        <div className=" __details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFA">
          {" "}
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
            <strong>Voltaje</strong>
          </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span>
              <Tooltip title="Voltaje" placement="top" arrow>
                <strong>{medidas?.VFA}</strong>
              </Tooltip>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFA">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
            <strong>Corriente</strong>
          </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <Tooltip title="Amperaje" placement="top" arrow>
              <strong>
                <span>{medidas?.CFA}</span>
              </strong>
            </Tooltip>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_fpa__ border_color_CFA">
          {" "}
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__ ">
            <strong>Factor P.</strong>
          </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <Tooltip title="Factor de Potencia" placement="top" arrow>
              <strong>
                <span>{medidas?.FPFA}</span>
              </strong>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
