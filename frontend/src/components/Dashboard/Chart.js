import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as Dayjs from "dayjs";
import Title from "./Title";
import ReactChart from "react-apexcharts";
export default function Chart(props) {
  const theme = useTheme();

  const [endDate, setEndDate] = React.useState(Dayjs(new Date()));
  const [symbol, setSymbol] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const series = [
    {
      name: "series-1",
      data: props.data,
    },
  ];
  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: props.symbol,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#3C90EB",
          downward: "#DF7D46",
        },
      },
    },
  };
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid item>
            <Title>Chart</Title>
          </Grid>
          <Grid item></Grid>
        </Grid>
        {props.error ? (
          <div>Please check the dates entered</div>
        ) : props.data ? (
          <ReactChart
            options={options}
            series={series}
            type="candlestick"
            height="290"
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          />
        ) : (
          <div>{errorMessage}</div>
        )}
      </Container>
    </React.Fragment>
  );
}
