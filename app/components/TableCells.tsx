import * as React from 'react';
import { TableCell } from '@mui/material';

type CellsType = {
  tableitems: string[] | number[];
};

const TableCells = (props: CellsType) => {
  const { tableitems } = props;

  const getClassName = (item: string | number) => {
    if (typeof item === 'number') {
      return `color-${item}`;
    }
    return 'string';
  };

  return (
    <>
      {tableitems.map &&
        tableitems.map((item: string | number, idx) => (
          <TableCell align="center" key={String(item) + String(idx)}>
            <div className={getClassName(item)}>{item}</div>
          </TableCell>
        ))}
    </>
  );
};

export default TableCells;
