import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { grey } from '@mui/material/colors';

import BackgroundLetterAvatars from '../../app/components/Avatar';
import Layout from '../../app/layouts/Layout';
import { rows, cell, ITableRows } from '../../consts';

const bgColor = grey[300];

const RatingItem: NextPage = () => {
  const router = useRouter();
  const dataID: number = Number(router.query.id) - 1;
  if (dataID < 0 || dataID > rows.length - 1) {
    return null;
  }
  const currentRow: ITableRows = rows[dataID];

  const getClassName = (item: string | number) => {
    if (typeof item === 'number') {
      return `color--${item} `;
    }
    return 'string';
  };
  const getAverage = (arr: number[]) => {
    return Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);
  };
  const average = getAverage(currentRow.subjects);

  return (
    <>
      <Layout title={currentRow.name}>
        <BackgroundLetterAvatars nameProps={currentRow.name} />
        <Typography
          variant="h3"
          component="h3"
          align="center"
          sx={{ marginTop: '2rem' }}
        >
          {currentRow.name}
        </Typography>
        <Paper
          elevation={3}
          sx={{
            maxWidth: { sm: '95vw', md: '80vw', lg: '65vw' },
            margin: '2rem auto',
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: bgColor }}>
                  <TableCell>Предметы</TableCell>
                  <TableCell>Оценки</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentRow.subjects.map((subject, idx) => (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    key={`${idx}-${subject}`}
                  >
                    <TableCell>{cell[++idx]}</TableCell>
                    <TableCell className={getClassName(subject)}>
                      {subject}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    backgroundColor: bgColor,
                  }}
                >
                  <TableCell>Средняя оценка</TableCell>
                  <TableCell className={getClassName(average)}>
                    {average}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Layout>
    </>
  );
};

export default RatingItem;
