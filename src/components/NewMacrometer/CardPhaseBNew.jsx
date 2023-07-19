import SemiCircleProgressBar from 'react-progressbar-semicircle';
import { useQuery } from '@apollo/client';
import { GET_METTERS_HISTORY } from '../controllers/measurerController';

export const CardPhaseBNew = (serial) => {
  console.log(serial);
  const { data } = useQuery(GET_METTERS_HISTORY, {
    variables: serial.serial,
    fetchPolicy: 'no-cache',
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
          <span className="__details_measurer_consumption_variables_CFA_graphic_title__span">Fase B</span>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_graphic_image__">
          <SemiCircleProgressBar
            strokeWidth={25}
            percentage={`${percentageValue(medidaString)}`}
            background="#F2F2F2"
            // stroke="#8bc6ec"
            stroke="#468BE0"
          />
          <span>
            <strong>{medidas?.PAFB}</strong> Watts
          </span>
        </div>
      </div>
      <div className="__details_measurer_consumption_variables_CFA_value__">
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFB">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Voltaje</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              <strong>{medidas?.VFB}</strong>
              <span className="container_voltaje">Voltaje</span>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFB">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Corriente</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              {' '}
              <strong>{medidas?.CFB}</strong>
              <span className="container_voltaje">Amperaje</span>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_fpa__ border_color_CFB">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Factor P.</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              {' '}
              <strong>{medidas?.FPFB}</strong>
              <span className="container_voltaje">Factor P</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
