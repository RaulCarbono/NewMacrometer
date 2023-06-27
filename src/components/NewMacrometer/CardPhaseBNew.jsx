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

export const CardPhaseBNew = ({ serial }) => {
  const { loading, error, data } = useQuery(GET_METTERS_HISTORY, {
    variables: serial,
    fetchPolicy: "no-cache",
  });

  const medidas = data?.getMeterHistory[0];

  const medidasInt = parseInt(medidas?.PAFB);

  const medidaString = String(medidasInt);

  const percentageValue = (value) => {
    if (value.length < 2) {
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
    }
  };
  return (
    <div className="_cardMeasurers_container_">
      <div className="__details_measurer_consumption_variables_CFA_graphic__">
        <div className="__details_measurer_consumption_variables_CFA_graphic_title__ background_CFB">
          <span className="__details_measurer_consumption_variables_CFA_graphic_title__span">
            Fase B
          </span>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_graphic_image__">
          <SemiCircleProgressBar
            strokeWidth={25}
            percentage={`${percentageValue(medidaString)}`}
            background="rgba(70, 139, 224, 0.3)"
            // stroke="#8bc6ec"
            stroke="#468BE0"
          />
          <span>{medidas?.PAFB} Watts</span>
        </div>
      </div>
      <div className="__details_measurer_consumption_variables_CFA_value__">
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFB">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Voltaje</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <Tooltip title="Voltaje" placement="top" arrow>
              <strong>
                <span>{medidas?.VFB}</span>
              </strong>
            </Tooltip>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFB">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Corriente</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <Tooltip title="Amperaje" placement="top" arrow>
              <strong>
                <span>{medidas?.CFB}</span>
              </strong>
            </Tooltip>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_fpa__ border_color_CFB">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Factor P.</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <Tooltip title="Factor de Potencia" placement="top" arrow>
              <strong>
                <span>{medidas?.FPFB}</span>
              </strong>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
