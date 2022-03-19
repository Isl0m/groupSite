import type { NextPage } from 'next';

import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Header from '../components/Header';

const textColor = grey[800];
const descrColor = grey[600];
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, alignItems: 'center' }}
        my={16}
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
    </>
  );
};
export default Home;
