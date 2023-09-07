import SemiCircleProgressBar from 'react-progressbar-semicircle';
import { useQuery } from '@apollo/client';
import { GET_METTERS_HISTORY } from '../controllers/measurerController';
import { percentage_total } from '../../helpers/percentage';

export const CardPhaseANew = () => {
  const { data } = useQuery(GET_METTERS_HISTORY, {
    variables: { serial: '22551432' },
    fetchPolicy: 'no-cache',
  });

  const medidas = data?.getMeterHistory[0];

  const medidasInt = parseInt(medidas?.PAFA);

  const medidaString = String(medidasInt);

  const faseA = percentage_total(medidaString);
  return (
    <div className="_cardMeasurers_container_">
      <div className="__details_measurer_consumption_variables_CFA_graphic__">
        <div className="__details_measurer_consumption_variables_CFA_graphic_title__ background_CFA">
          <span className="__details_measurer_consumption_variables_CFA_graphic_title__span">Fase A </span>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_graphic_image__">
          <SemiCircleProgressBar
            percentage={faseA}
            background="#F2F2F2 "
            strokeWidth={25}
            stroke="#f7ce68"
          />

          <span className="container_watts">
            <strong>{medidas?.PAFA}</strong> Watts
          </span>
        </div>
      </div>
      <div className="__details_measurer_consumption_variables_CFA_value__">
        <div className=" __details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFA">
          {' '}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              <strong>{medidas?.VFA}</strong>
              <span className="container_voltaje">Voltaje</span>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFA">
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              {' '}
              <strong>{medidas?.CFA}</strong>
              <span className="container_voltaje">Amperaje</span>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_fpa__ border_color_CFA">
          {' '}
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__ ">
            <strong>Factor P.</strong>
          </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              {' '}
              <strong>{medidas?.FPFA}</strong>
              <span className="container_voltaje">Factor P</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
