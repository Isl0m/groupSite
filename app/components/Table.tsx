import * as React from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/rating/${id}`);
  };
  return (
    <Paper elevation={2} sx={{ maxWidth: '95vw', margin: '2rem auto' }}>
      <TableContainer>
        <Table sx={{minWidth:300}} >
          <TableHead>
            <TableRow>
              <TableCells tableitems={tableCells} />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows &&
              tableRows.map(({ num, name, subjects }) => (
                <TableRow
                  hover={true}
                  onClick={() => handleClick(num)}
                  key={num + name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
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
