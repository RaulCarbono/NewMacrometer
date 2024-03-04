import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_TWELVE_HOUR_FREQUENCYE } from '../controllers/measurerController';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';
export const GraphFrecuency = () => {
  const { data } = useQuery(GET_TWELVE_HOUR_FREQUENCYE, {
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
            min: data?.getFrequencyGraphs.starpoint,
            max: data?.getFrequencyGraphs.endpoint,
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
          series: data?.getFrequencyGraphs.ShowData,
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
