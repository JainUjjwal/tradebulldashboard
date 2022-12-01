import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import * as Dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Title from "./Title";
import ReactChart from "react-apexcharts";
import { fetchData, formatData } from "../../controller/fetchData";
import { tickerLabels } from "../../utils/tickerData";
export default function Chart(props) {
  const theme = useTheme();
  const [data, setData] = React.useState(null);
  const [startDate, setStartDate] = React.useState(
    Dayjs(new Date()).subtract(1, "year")
  );
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
          <Grid item xs={10}>
            <Title>Chart</Title>
          </Grid>
        </Grid>
      </Container>
      {props.error ? (
        <div>Please check the dates entered</div>
      ) : props.data ? (
        <ReactChart
          options={options}
          series={series}
          type="candlestick"
          height="500"
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
    </React.Fragment>
  );
}
