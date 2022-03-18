import * as React from 'react';
import { ImageList, ImageListItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';

import Header from '../components/Header';

const itemData = [
  {
    img: '/img5.jpg',
    title: 'img5',
    cols: 4,
    rows: 2,
  },
  {
    img: '/img4.jpg',
    title: 'img4',
  },
  {
    img: '/img2.jpg',
    title: 'img2',
    cols: 2,
  },
  {
    img: '/img3.jpg',
    title: 'img3',
  },
  {
    img: '/img1.jpg',
    title: 'img1',
    cols: 2,
  },
  {
    img: '/home1.jpg',
    title: 'home1',
    cols: 2,
  },
];
const textColor = grey[800];

const Gallary = () => {
  return (
    <>
      <Header />
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ color: textColor, marginTop: '2rem' }}>
        Галерея нашей группы
      </Typography>
      <ImageList
        sx={{ width: 1000, height: 1250, marginLeft: 'auto', marginRight: 'auto' }}
        variant="quilted"
        cols={4}
        rowHeight={300}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <Image src={item.img} alt={item.title} layout="fill" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Gallary;
