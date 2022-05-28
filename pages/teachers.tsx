import type { NextPage } from 'next';
import { Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

import Layout from '../app/layouts/Layout';
import MediaCard from '../app/components/MediaCard';

const textColor = grey[800];

const Teachers: NextPage = () => {
  return (
    <>
      <Layout title="Наши учителя">
        <Typography
          variant="h3"
          component="h3"
          align="center"
          sx={{ color: textColor, marginTop: '2rem' }}
        >
          Учителя нашей группы
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: '2rem',
            mx: '10vw',
          }}
        >
          <MediaCard name="Name Surname" discription="dicr" />
          <MediaCard name="Gme Ffrsafame" discription="dicr" />
        </Box>
      </Layout>
    </>
  );
};

export default Teachers;
