import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';

import { GET_HISTORY_TOW } from '../controllers/measurerController';
import { Date } from '../Date/Date';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';
import useDays from '../Date/useDays';
import TableConsumptions from './TableConsumptions';

import { CalendarDate } from 'cally';
import { useState } from 'react';

export const GraphConsumptionDetailDay = () => {
  const [diaAnterior, setDiaAnterior] = useState();
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

  const datos = data?.getConsumptionHistory?.totalBy.activeEnergy;
  let b;
  datos?.forEach((i) => {
    if (i.finalValue !== null) {
      return (b = i.finalValue);
    }
  });

  const activeEnergy = data?.getConsumptionHistory?.currentConsumption?.activeEnergy;
  const activeEnergyGraph = data?.getConsumptionHistory?.res?.activeEnergy;
  const reactiveEnergyGraph = data?.getConsumptionHistory?.res?.reactiveEnergy;
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
            legend: {
              enabled: false,
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
      </div>
    </>
  );
};
