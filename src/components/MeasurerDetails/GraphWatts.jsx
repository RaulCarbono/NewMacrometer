import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "@apollo/client";
import { GET_TWELVE_HOUR_WATTS } from "../controllers/measurerController";

export const GraphWatts = () => {
  const { data, loading } = useQuery(GET_TWELVE_HOUR_WATTS, {
    variables: {
      serial: "22551432",
      day: "07/07/23",
    },
    fetchPolicy: "no-cache",
  });

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: "spline",
            scrollablePlotArea: {
              minWidth: 600,
              scrollPositionX: 1,
            },
          },
          title: {
            text: "Watts últimas 24 horas",
            align: "left",
          },
          subtitle: {
            text: "",
            align: "left",
          },
          xAxis: {
            type: "datetime",
            tickInterval: 3600000,
            min: data?.getTwelveHourWatt.starpoint,
            max: data?.getTwelveHourWatt.endpoint,
            labels: {
              format: "{value:%H:%M}",
            },
          },
          yAxis: {
            //min: 122,
            title: {
              text: "Watts",
            },
          },
          tooltip: {
            valueSuffix: " W",
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
          series: data?.getTwelveHourWatt.show_data,
          navigation: {
            menuItemStyle: {
              fontSize: "10px",
            },
          },
        }}
      />
    </div>
  );
};
