import { TableHead } from '@material-ui/core';
import { Table } from '@material-ui/core';
import { TableContainer, TableRow, TableBody, Paper, TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { GET_HISTORY_TOW } from '../controllers/measurerController';
import { dia, medidor, timeZone } from '../../helpers/dataMacrometer';
import { useQuery } from '@apollo/client';

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
  const { data } = useQuery(GET_HISTORY_TOW, {
    variables: {
      serial: medidor,
      starTime: dia,
      timeZone: timeZone,
    },
    fetchPolicy: 'no-cache',
  });
  console.log(data);

  return (
    <div className="_measurergeneral_container_tables_">
      <TableContainer component={Paper}>Hola</TableContainer>
      <div className="__report_measurer_table_total_title__"></div>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N° del medidor</StyledTableCell>
            <StyledTableCell>Áreas</StyledTableCell>
            <StyledTableCell>Medida Inicial</StyledTableCell>
            <StyledTableCell>Medida Final</StyledTableCell>
            <StyledTableCell>Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.getConsumptionHistory?.totalBy.map((i, key) => (
            <StyledTableRow>
              <StyledTableCell aling="center">{key + 1}</StyledTableCell>
              <StyledTableCell aling="center">{i?.name}</StyledTableCell>
              <StyledTableCell aling="center">{''}</StyledTableCell>
              <StyledTableCell aling="center">{key + 1}</StyledTableCell>
              <StyledTableCell aling="center">{key + 1}</StyledTableCell>
            </StyledTableRow>
          ))}

          <StyledTableRow>
            <StyledTableCell2
              component="th"
              scope="row"
              align="center"
            >
              Total
            </StyledTableCell2>
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
            ></StyledTableCell2>
            <StyledTableCell2
              component="th"
              scope="row"
              align="center"
            ></StyledTableCell2>
          </StyledTableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default TableConsumptions;
