import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useQuery } from "@apollo/client";
import { GET_TWELVE_HOUR_CURRENT } from "../controllers/measurerController";

export const GraphCurrent = () => {
  const { data, loading } = useQuery(GET_TWELVE_HOUR_CURRENT, {
    variables: {
      serial: "22551432",
      day: "05/07/23",
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
            text: "Amperaje últimas 24 horas",
            align: "left",
          },
          subtitle: {
            text: "",
            align: "left",
          },
          xAxis: {
            type: "datetime",
            tickInterval: 3600000,
            min: data?.getTwelveHourCurrent.starpoint,
            max: data?.getTwelveHourCurrent.endpoint,
            labels: {
              format: "{value:%H:%M}",
            },
          },
          yAxis: {
            //min: 122,
            title: {
              text: "Amperios",
            },
          },
          tooltip: {
            valueSuffix: " A",
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
          series: data?.getTwelveHourCurrent.show_data,
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
