import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function TableMui(props) {
  const rows = props.appCoinsData;
  const classes = useStyles();
  //MaxS/AvS(0=inflation|1=good|>1=dump ajustment, the higher the worst)
  // const maxLongTermInflation = props.appCoinsData.max_supply
  // console.log('max supply: ', props.appCoinsData.max_supply, 'circulating supply: props.appCoinsData.circulating_supply',)
  // const max_long_term_inflation = props.appCoinsData.max_supply  / props.appCoinsData.circulating_supply
  // let max_long_term_inflation;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Price change % 24h</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>Circulating Supply</TableCell>

            <TableCell>Total Supply</TableCell>
            <TableCell>Max Supply</TableCell>
            <TableCell>
              Middle term inflation - Total Supply/Circulating Supply (>1 is ICO
              holder=the greater the worst)
            </TableCell>

            <TableCell>
              Long term inflation - Max Supply/Circulating Supply
              (0=inflation|1=good|>1=dump adjustment, the higher the worst)
            </TableCell>
            <TableCell>
              Max long term inflation - Max Supply/Total Supply
              (0=inflation|1=good|>1=dump adjustment, the higher the worst)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {/* <TableCell component="th" scope="row">
                <img src={row.image} alt="crypto" />{" "}
              </TableCell> */}
              <TableCell>{row.name}</TableCell>

              <TableCell>{row.symbol}</TableCell>
              <TableCell>${row.current_price}</TableCell>
              <TableCell>${row.price_change_percentage_24h}</TableCell>
              <TableCell>${row.total_volume.toLocaleString()}</TableCell>
              <TableCell>${row.market_cap.toLocaleString()}</TableCell>
              <TableCell>${row.circulating_supply.toLocaleString()}</TableCell>

              {row.total_supply ? (
                <TableCell>${row.total_supply.toLocaleString()}</TableCell>
              ) : (
                <TableCell>{"∞"}</TableCell>
              )}
              {row.max_supply ? (
                <TableCell>${row.max_supply.toLocaleString()}</TableCell>
              ) : (
                <TableCell>{"∞"}</TableCell>
              )}

              {/* How what I want to do here is to get two values and divide one by the other, inside .map() and JSX */}
              {/* {function maxInflation() {
                let maxLongTermInflation =
                  row.max_supply / row.circulating_supply;
                return maxLongTermInflation;
              }}
              {console.log(maxInflation())}

              {row.max_supply ? (
                <TableCell>{maxInflation()}</TableCell>
              ) : (
                <TableCell>{"∞"}</TableCell>
              )} */}
              {row.total_supply ? (
                <TableCell>
                  {row.total_supply / row.circulating_supply}
                </TableCell>
              ) : (
                <TableCell>{"∞"}</TableCell>
              )}
              {row.max_supply ? (
                <TableCell>{row.max_supply / row.circulating_supply}</TableCell>
              ) : (
                <TableCell>{"∞"}</TableCell>
              )}
                            {row.max_supply ? (
                <TableCell>{row.max_supply / row.total_supply}</TableCell>
              ) : (
                <TableCell>{"∞"}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
