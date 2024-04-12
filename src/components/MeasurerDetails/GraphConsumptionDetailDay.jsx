import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';

import { GET_HISTORY_TOW } from '../controllers/measurerController';

import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';




import { useState } from 'react';

export const GraphConsumptionDetailDay = () => {

  const [diaActual, setDiaActual] = useState(dia);
  const previusDay = () => {
    setDiaActual(dia - 86400);
  };
  const { data } = useQuery(GET_HISTORY_TOW, {
    variables: {
      serial: medidor,
      starTime: diaActual,
      timeZone: timeZone,
    },
    fetchPolicy: 'no-cache',
  });

  

  const activeEnergy = data?.getConsumptionHistory?.currentConsumption?.activeEnergy;


  return (
    <>
      <div>
        {/* <CalendarDate></CalendarDate> */}
        <button onClick={previusDay}>previus</button>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              zooming: {
                mouseWheel: false,
              },
              type: 'column',
            },
            colors: ['#04b431'],

            title: {
              align: 'left',
              text: `Consumo total de ${activeEnergy} kWh `,
            },

            subtitle: {
              align: 'right',

              style: {
                color: '#000',
                fontSize: '16px',
              },
              y: 40,
            },
            accessibility: {
              announceNewData: {
                enabled: true,
              },
            },
            xAxis: {
              type: 'category',
            },
            yAxis: {
              title: {
                text: '',
              },
            },
            

            plotOptions: {
              column: {
                grouping: false,
                shadow: false,
                borderRadius: 4,
                borderWidth: 2,
                borderColor: 'black',
              },
              series: {
                dataLabels: {
                  enabled: true,
                  format: '{point.y:.1f}',
                },
              },
            },
            legend: {
              shadow: false,
            },
            tooltip: {
              shared: true,
              // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.2f}</b> kWh<br/>',
            },

            series: data?.getConsumptionHistory?.series,
          }}
        />
        <div className='probando'>
          <div className='dato'><span>Menor consumo activa {data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsActiveEnergy?.min} kWh, Hora: {data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsActiveEnergy?.lowConsumptionHour}</span> - <span>Mayor consumo de activa {data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsActiveEnergy?.max} kWh, Hora:{data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsActiveEnergy?.highConsumptionHour}</span></div>
          <div className='dato'><span>Menor consumo reactiva {data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsRactiveEnergy?.min} kWh, Hora: {data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsRactiveEnergy?.lowConsumptionHour}</span> - <span>Mayor consumo de reactiva {data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsRactiveEnergy?.max} kWh, Hora:{data?.getConsumptionHistory?.maxAndMinConsumption?.maxAndMinConsRactiveEnergy?.highConsumptionHour}</span></div>
        </div>
      </div>
    </>
  );
};
