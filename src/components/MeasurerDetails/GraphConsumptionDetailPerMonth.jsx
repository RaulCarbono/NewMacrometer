import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useQuery } from '@apollo/client';
import { GET_HISTORY_TOW } from '../controllers/measurerController';
import { medidor } from '../../helpers/dataMacrometer';
export const GraphConsumptionDetailPerMonth = () => {
  const { data } = useQuery(GET_HISTORY_TOW, {
    variables: {
      serial: medidor,
      month: 3,
      year: 24,
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
            text: `Consumo total de ${data?.getConsumptionHistory.currentConsumption.activeEnergy} kWh `,
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
              grouping: false,
              shadow: false,
              borderRadius: 4,
              borderWidth: 2,

              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}',
              },
            },
          },

          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.2f}</b> kWh<br/>',
          },

          series: data?.getConsumptionHistory?.series,
        }}
      />
    </div>
  );
};
