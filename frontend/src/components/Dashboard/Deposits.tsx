import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits(props) {
  return (
    <React.Fragment>
      <Title>Account Information</Title>
      <Typography component="p" variant="h4">
        Buying Power:{" "}
        {props.accountData ? props.accountData.buying_power : "Fetching Data"}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Cash: {props.accountData ? props.accountData.cash : "Fetching Data"}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
