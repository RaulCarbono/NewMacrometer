import SemiCircleProgressBar from 'react-progressbar-semicircle';
import { useQuery } from '@apollo/client';
import { GET_METTERS_HISTORY } from '../controllers/measurerController';
import { percentage_total } from '../../helpers/percentage';

export const CardPhaseBNew = () => {
  const { data } = useQuery(GET_METTERS_HISTORY, {
    variables: { serial: '22551432' },
    fetchPolicy: 'no-cache',
  });

  const medidas = data?.getMeterHistory[0];

  const medidasInt = parseInt(medidas?.PAFB);

  const medidaString = String(medidasInt);

  const faseb = percentage_total(medidaString);

  return (
    <div className="_cardMeasurers_container_">
      <div className="__details_measurer_consumption_variables_CFA_graphic__">
        <div className="__details_measurer_consumption_variables_CFA_graphic_title__ background_CFB">
          <span className="__details_measurer_consumption_variables_CFA_graphic_title__span">Fase B</span>
        </div>
        <div className="__details_measurer_consumption_variables_CFA_graphic_image__">
          <SemiCircleProgressBar
            strokeWidth={25}
            percentage={faseb}
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
