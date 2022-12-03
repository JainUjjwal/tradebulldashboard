import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function Positions(props) {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Exchange</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="right">Avg Entry Price</TableCell>
            <TableCell align="right">Market Value</TableCell>
            <TableCell align="right">Total Profit/Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.positions?.length > 0 ? (
            props.positions.map((row) => (
              <TableRow key={row.asset_id}>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.exchange}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell align="right">{`$${
                  Math.round(
                    (parseFloat(row.avg_entry_price) + Number.EPSILON) * 100
                  ) / 100
                }`}</TableCell>
                <TableCell align="right">{`$${row.market_value}`}</TableCell>
                {parseInt(row.unrealized_pl) >= 0 ? (
                  <TableCell align="right" style={{ color: "green" }}>
                    <span color="green">{`$${row.unrealized_pl}`}</span>
                  </TableCell>
                ) : (
                  <TableCell
                    align="right"
                    style={{ color: "red" }}
                  >{`-$${row.unrealized_pl.slice(1)}`}</TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <div>Error</div>
          )}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
