import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const workers = [
  { name: "Wanda", lastname: "Maximoff", workdays: 17, wage: 500 },
  { name: "Clint", lastname: "Barton", workdays: 20, wage: 520 },
  { name: "Sam", lastname: "Wilson", workdays: 10, wage: 535 },
  { name: "Jessica", lastname: "Jones", workdays: 5, wage: 540 },
  { name: "Phil", lastname: "Coulson", workdays: 9, wage: 560 },
  { name: "Nick", lastname: "Fury", workdays: 8, wage: 580 },
  { name: "Stephen", lastname: "Strange", workdays: 13, wage: 585 },
  { name: "Peter", lastname: "Quill", workdays: 21, wage: 590 },
  { name: "Matt", lastname: "Murdock", workdays: 2, wage: 600 },
  { name: "Peggy", lastname: "Carter", workdays: 18, wage: 620 },
  { name: "Scott", lastname: "Lang", workdays: 2, wage: 630 },
  { name: "Bruce", lastname: "Banner", workdays: 5, wage: 650 },
  { name: "Natasha", lastname: "Romanoff", workdays: 7, wage: 670 },
  { name: "Peter", lastname: "Parker", workdays: 27, wage: 700 },
  { name: "Tony", lastname: "Stark", workdays: 15, wage: 800 },
  { name: "Steve", lastname: "Rogers", workdays: 20, wage: 800 },
  ];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Lastname</StyledTableCell>
            <StyledTableCell align="right">Workdays</StyledTableCell>
            <StyledTableCell align="right">Wage</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workers.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lastname}</StyledTableCell>
              <StyledTableCell align="right">{row.workdays}</StyledTableCell>
              <StyledTableCell align="right">{row.wage}</StyledTableCell>
              <StyledTableCell align="right">{row.workdays * row.wage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
