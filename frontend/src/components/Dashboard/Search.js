import * as React from "react";
import { useTheme } from "@mui/material/styles";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import * as Dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { fetchData, formatData } from "../../controller/fetchData";
import { tickerLabels } from "../../utils/tickerData";
export default function Search(props) {
  const [startDate, setStartDate] = React.useState(
    Dayjs(new Date()).subtract(1, "year")
  );
  const [endDate, setEndDate] = React.useState(Dayjs(new Date()));
  const [symbol, setSymbol] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = (e) => {
    let flag = false;
    const today = Dayjs(new Date());
    if (endDate.format("YYYY-MM-DD") === today.format("YYYY-MM-DD")) {
      flag = true;
    }
    props.setDataFromInput(symbol, startDate, endDate, flag, today);
  };
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Stack spacing={2} direction="row" paddingLeft={3}>
            <Autocomplete
              disablePortal
              id="tickerPicker"
              options={tickerLabels}
              value={symbol}
              sx={{ width: 300, marginBottom: "15px" }}
              renderInput={(params) => (
                <TextField {...params} label="Stock Symbol" />
              )}
              onChange={(event, newValue) => {
                setSymbol(newValue);
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} xs={12}>
              <DatePicker
                label="Start Date"
                id="startTime"
                openTo="year"
                views={["year", "month", "day"]}
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs} xs={12}>
              <DatePicker
                label="End Date"
                id="endTime"
                value={endDate}
                openTo="year"
                views={["year", "month", "day"]}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Stack>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
