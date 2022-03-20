import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import TableCells from './TableCells';
import { ITableProps } from '../../consts';

const BasicTable = (props: ITableProps) => {
  const { tableCells, tableRows } = props;
  return (
    <Paper elevation={2} sx={{ maxWidth: '95vw', margin: '2rem auto' }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCells tableitems={tableCells} />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows &&
              tableRows.map(({ num, name, subjects }) => (
                <TableRow
                  key={num + name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{num}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCells tableitems={subjects} />
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BasicTable;
