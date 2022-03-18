import Header from '../components/Header';
import { grey } from '@mui/material/colors';

import Table from '../components/Table';
import Typography from '@mui/material/Typography';
import { rows, cells } from '../consts';

const textColor = grey[700];
const Rating = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ color: textColor, marginTop: '2rem' }}>
        Оценки за первый семестр
      </Typography>
      <Table tableCells={cells} tableRows={rows} />
    </>
  );
};
export default Rating;
