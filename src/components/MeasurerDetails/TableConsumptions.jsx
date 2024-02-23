import { TableHead } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableContainer, TableRow, TableBody, Paper, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { GET_HISTORY_TOW } from '../controllers/measurerController';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#4caf50e6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableCell2 = withStyles((theme) => ({
  head: {
    backgroundColor: '#4caf50e6',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const TableConsumptions = () => {
  const [medida, setMedida] = useState();
  const { data } = useQuery(GET_HISTORY_TOW, {
    variables: {
      serial: medidor,
      starTime: dia,
      timeZone: timeZone,
    },
    fetchPolicy: 'no-cache',
  });
  const initialValue = data?.getConsumptionHistory?.totalBy[0].initialValue;
  const finalValue = data?.getConsumptionHistory?.totalBy.at(-1).finalValue;
  const totalValue = finalValue - initialValue;
  console.log(data);

  return (
    <>
      <Paper>
        <TableContainer align="center">
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell aling="center">N° del medidor</StyledTableCell>
                <StyledTableCell aling="center">Medida Inicial</StyledTableCell>
                <StyledTableCell aling="center">Medida Final</StyledTableCell>
                <StyledTableCell aling="center">Total</StyledTableCell>
                <StyledTableCell aling="center">Acumulado</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.getConsumptionHistory?.totalBy.map((i, key) => (
                <StyledTableRow>
                  <StyledTableCell aling="center">{key + 1}</StyledTableCell>
                  <StyledTableCell aling="center">{i?.initialValue}</StyledTableCell>
                  <StyledTableCell aling="center">{i.finalValue}</StyledTableCell>
                  <StyledTableCell aling="center">{(i.finalValue - i.initialValue).toFixed(1)}</StyledTableCell>
                  <StyledTableCell aling="center"></StyledTableCell>
                </StyledTableRow>
              ))}

              <StyledTableRow>
                <StyledTableCell2 align="center">Total</StyledTableCell2>
                <StyledTableCell2
                  component="th"
                  scope="row"
                ></StyledTableCell2>
                <StyledTableCell2
                  component="th"
                  scope="row"
                ></StyledTableCell2>
                <StyledTableCell2
                  component="th"
                  scope="row"
                >
                  {' '}
                  {totalValue.toFixed(0)}
                </StyledTableCell2>

                <StyledTableCell2
                  component="th"
                  scope="row"
                  align="center"
                ></StyledTableCell2>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
export default TableConsumptions;
