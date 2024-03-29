import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_TWELVE_HOUR_POWER_FACTOR } from '../controllers/measurerController';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';

export const GraphPowerFactor = () => {
  const { data } = useQuery(GET_TWELVE_HOUR_POWER_FACTOR, {
    variables: {
      serial: medidor,
      starTime: dia,
    },
    fetchPolicy: 'no-cache',
  });

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'spline',
            scrollablePlotArea: {
              minWidth: 600,
              // scrollPositionX: 1,
            },
          },
          title: {
            text: 'Factor de Potencia últimas 24 horas',
            align: 'left',
          },
          subtitle: {
            text: '',
            align: 'left',
          },
          xAxis: {
            type: 'datetime',
            tickInterval: 3600000,
            min: data?.getTwelveHourPowerFactor.starpoint,
            max: data?.getTwelveHourPowerFactor.endpoint,
            labels: {
              format: '{value:%H:%M}',
            },
          },
          yAxis: {
            //min: 122,
            title: {
              text: 'Factor de Potencia',
            },
          },
          tooltip: {
            valueSuffix: ' FP',
          },
          plotOptions: {
            spline: {
              lineWidth: 2.5,
              states: {
                hover: {
                  lineWidth: 4.5,
                },
              },
              marker: {
                enabled: false,
              },
            },
          },
          time: {
            timezoneOffset: 300,
          },
          series: data?.getTwelveHourPowerFactor.ShowData,
          navigation: {
            menuItemStyle: {
              fontSize: '10px',
            },
          },
        }}
      />
    </div>
  );
};
