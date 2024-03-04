import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_TWELVE_HOUR_HARMONIC_VOLTAGE } from '../controllers/measurerController';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';

export const GraphHarmonicVoltage = () => {
  const { data } = useQuery(GET_TWELVE_HOUR_HARMONIC_VOLTAGE, {
    variables: {
      serial: medidor,
      starTime: 1709528400,
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
            min: data?.getHarmonicVoltageGraphs.starpoint,
            max: data?.getHarmonicVoltageGraphs.endpoint,
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
          series: data?.getHarmonicVoltageGraphs.ShowData,
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
