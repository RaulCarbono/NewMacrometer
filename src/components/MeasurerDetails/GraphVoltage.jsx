import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_TWELVE_HOUR_VOLTAGE } from '../controllers/measurerController';

export const GraphVoltage = ({ Dia }) => {
  const { data } = useQuery(GET_TWELVE_HOUR_VOLTAGE, {
    variables: {
      serial: '22551432',
      day: Dia,
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
            //min: 122,
            title: {
              text: 'Voltios',
            },
          },
          tooltip: {
            valueSuffix: ' V',
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
          series: data?.getTwelveHourVoltage.show_data,
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
