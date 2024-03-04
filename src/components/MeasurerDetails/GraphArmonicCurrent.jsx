import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_TWELVE_HOUR_HARMONIC_CURRENT } from '../controllers/measurerController';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';
export const GraphArmonicCurrent = () => {
  const { data } = useQuery(GET_TWELVE_HOUR_HARMONIC_CURRENT, {
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
            min: data?.getHarmonicCurrentGraphs.starpoint,
            max: data?.getHarmonicCurrentGraphs.endpoint,
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
          series: data?.getHarmonicCurrentGraphs.ShowData,
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
