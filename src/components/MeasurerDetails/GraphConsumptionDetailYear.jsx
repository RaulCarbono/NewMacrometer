import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_HISTORY_TOW } from '../controllers/measurerController';

export const GraphConsumptionDetailYear = () => {
  const { data } = useQuery(GET_HISTORY_TOW, {
    variables: {
      serial: '22551432',
      year: 2024,
    },
    fetchPolicy: 'no-cache',
  });
  return (
    <div>
      {' '}
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
            text: `Consumo total de ${data?.getConsumptionHistory.currentConsumption} kWh `,
          },
          subtitle: {
            align: 'left',
            text: '' /* "Click the columns to view details. " */,
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
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}',
              },
            },
          },

          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> kWh<br/>',
          },

          series: [
            {
              name: 'Horas',
              colorByPoint: true,
              data: data?.getConsumptionHistory.res,
            },
          ],
        }}
      />
    </div>
  );
};
