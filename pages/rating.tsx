import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Layout from '../app/layouts/Layout';
import Table from '../app/components/Table';
import { rows, cells } from '../consts';

const textColor = grey[700];
const Rating = () => {
  return (
    <>
      <Layout title="Оценки учащихся">
        <Typography
          variant="h3"
          component="h3"
          align="center"
          sx={{ color: textColor, marginTop: '2rem' }}>
          Оценки за первый семестр
        </Typography>
        <Table tableCells={cells} tableRows={rows} />
      </Layout>
    </>
  );
};
export default Rating;
