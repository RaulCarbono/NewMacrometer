import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';
import { GET_TWELVE_HOUR_VOLTAGE } from '../controllers/measurerController';

export const GraphVoltage = () => {
  const { data } = useQuery(GET_TWELVE_HOUR_VOLTAGE, {
    variables: {
      serial: medidor,
      starTime: dia,
    },
    fetchPolicy: 'no-cache',
  });

  console.log(data?.getTwelveHourVoltage);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'spline',
            scrollablePlotArea: {
              minWidth: 600,
              scrollPositionX: 1,
            },
          },
          title: {
            text: 'Voltaje últimas 24 horas',
            align: 'left',
          },
          subtitle: {
            text: '',
            align: 'left',
          },
          xAxis: {
            type: 'datetime',
            tickInterval: 3600000,
            min: data?.getTwelveHourVoltage.starpoint,
            max: data?.getTwelveHourVoltage.endpoint,
            labels: {
              format: '{value:%H:%M}',
            },
          },
          yAxis: {
            max: 132,
            title: {
              text: 'Voltios',
            },
            plotLines: [
              {
                color: '#432201',
                width: 2.5,
                value: data?.getTwelveHourVoltage?.referenceValues?.max,
                dashStyle: 'dash',
              },
            ],
          },
          tooltip: {
            valueSuffix: ' V',
          },
          plotOptions: {
            spline: {
              lineWidth: 1.5,
              states: {
                hover: {
                  lineWidth: 1.5,
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
          series: data?.getTwelveHourVoltage?.ShowData,
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
