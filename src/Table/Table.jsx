import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(name, Laptops, Mobile, Groceries, Others) {
  return { name, Laptops, Mobile, Groceries, Others };
}

const rows = [
  createData('Hyderabad', 159, 6.0, 24, 4.0),
  createData('Benglore', 237, 9.0, 37, 4.3),
  createData('Medak', 262, 16.0, 24, 6.0),
  createData('Ramayampet', 305, 3.7, 67, 4.3),
  createData('Karimnagar', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Laptops</TableCell>
            <TableCell align="right">Mobile&nbsp;</TableCell>
            <TableCell align="right">Groceries&nbsp;</TableCell>
            <TableCell align="right">Others&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              className={index === rows.length - 1 ? 'tableRow' : ''}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Laptops}</TableCell>
              <TableCell align="right">{row.Mobile}</TableCell>
              <TableCell align="right">{row.Groceries}</TableCell>
              <TableCell align="right">{row.Others}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
