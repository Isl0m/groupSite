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

import BackgroundLetterAvatars from '../../app/components/Avatar';
import Layout from '../../app/layouts/Layout';
import { rows, cell } from '../../consts';

const RatingItem: React.FC = () => {
  const router = useRouter();
  let currentRow = rows;
  currentRow = rows.find((row) => row.num === Number(router.query.id));

  return (
    <>
      <Layout>
        <BackgroundLetterAvatars nameProps={currentRow.name} />
        <Paper elevation={2} sx={{ maxWidth: '60vw', margin: '2rem auto' }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{currentRow.name}</TableCell>
                  <TableCell>Оценки</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[1]}</TableCell>
                  <TableCell>{currentRow.subjects[0]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[2]}</TableCell>
                  <TableCell>{currentRow.subjects[1]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[3]}</TableCell>
                  <TableCell>{currentRow.subjects[2]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[4]}</TableCell>
                  <TableCell>{currentRow.subjects[3]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[5]}</TableCell>
                  <TableCell>{currentRow.subjects[4]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[6]}</TableCell>
                  <TableCell>{currentRow.subjects[5]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[7]}</TableCell>
                  <TableCell>{currentRow.subjects[6]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[8]}</TableCell>
                  <TableCell>{currentRow.subjects[7]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[9]}</TableCell>
                  <TableCell>{currentRow.subjects[8]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[10]}</TableCell>
                  <TableCell>{currentRow.subjects[9]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[11]}</TableCell>
                  <TableCell>{currentRow.subjects[10]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[12]}</TableCell>
                  <TableCell>{currentRow.subjects[11]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[13]}</TableCell>
                  <TableCell>{currentRow.subjects[12]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[14]}</TableCell>
                  <TableCell>{currentRow.subjects[13]}</TableCell>
                </TableRow>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{cell[15]}</TableCell>
                  <TableCell>{currentRow.subjects[14]}</TableCell>
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
