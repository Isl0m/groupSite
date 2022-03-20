import type { NextPage } from 'next';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Layout from '../app/layouts/Layout';

const textColor = grey[800];
const descrColor = grey[600];

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, alignItems: 'center' }}
          my={14}
          mx={4}>
          <Image src="/home2.jpg" width="900px" height="550px" alt="info-img" />
          <Box sx={{ margin: '2rem' }}>
            <Typography variant="h2" component="h2" sx={{ color: textColor }}>
              О нас
            </Typography>
            <Typography variant="h6" component="span" sx={{ color: descrColor }}>
              Мы группа Т1-20 специализированного академического лицея при Филиале РГУ нефти и газа
              имени И.М. Губкина
            </Typography>
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default Home;
