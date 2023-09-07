import SemiCircleProgressBar from 'react-progressbar-semicircle';
import { useQuery } from '@apollo/client';
import { GET_METTERS_HISTORY } from '../controllers/measurerController';
import { percentage_total } from '../../helpers/percentage';

export const CardPhaseCNew = () => {
  const { data } = useQuery(GET_METTERS_HISTORY, {
    variables: { serial: '22551432' },
    fetchPolicy: 'no-cache',
  });

  const medidas = data?.getMeterHistory[0];

  const medidasInt = parseInt(medidas?.PAFC);

  const medidaString = String(medidasInt);

  const fasec = percentage_total(medidaString);

  return (
    <div className="_cardMeasurers_container_">
      <div className="__details_measurer_consumption_variables_CFA_graphic__">
        <div className="__details_measurer_consumption_variables_CFA_graphic_title__ background_CFC">
          <span className="__details_measurer_consumption_variables_CFA_graphic_title__span">Fase C</span>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_graphic_image__">
          <SemiCircleProgressBar
            percentage={fasec}
            strokeWidth={25}
            stroke="#ff2525"
            background="#F2F2F2"
          />
          <span>
            <strong>{medidas?.PAFC}</strong> Watts
          </span>
        </div>
      </div>
      <div className="__details_measurer_consumption_variables_CFA_value__">
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFC">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Voltaje</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              <strong>{medidas?.VFC}</strong>
              <span className="container_voltaje">Voltaje</span>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_vfa__ border_color_CFC">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Corriente</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              {' '}
              <strong>{medidas?.CFC}</strong>
              <span className="container_voltaje">Amperaje</span>
            </span>
          </div>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_value_fpa__ border_color_CFC">
          {/* <div className="__details_measurer_consumption_variables_CFA_value_vfa_title__">
        <strong>Factor P.</strong>
      </div> */}
          <div className="__details_measurer_consumption_variables_CFA_value_vfa_value__">
            <span className="container_voltage_number">
              {' '}
              <strong>{medidas?.FPFC}</strong>
              <span className="container_voltaje">Factor P</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
