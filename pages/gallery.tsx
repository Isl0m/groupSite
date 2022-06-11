import type { NextPage } from 'next';
import Image from 'next/image';
import {
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

import Layout from '../app/layouts/Layout';

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
    img: '/img6.jpg',
    title: 'img6',
    cols: 2,
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

const Gallary: NextPage = () => {
  const theme = useTheme();
  const mediaLG = useMediaQuery(theme.breakpoints.up('lg'));
  const mediaSM = useMediaQuery(theme.breakpoints.up('sm'));
  const getRowHeight = (): number => {
    if (mediaLG) {
      return 300;
    }
    if (mediaSM) {
      return 250;
    }
    return 200;
  };
  return (
    <>
      <Layout title="Галерея группы">
        <Typography
          variant="h3"
          component="h3"
          align="center"
          sx={{ color: textColor, marginTop: '2rem' }}
        >
          Галерея нашей группы
        </Typography>
        <ImageList
          sx={{
            width: { lg: 1000, md: 700, sm: 600, xs: 400 },
            height: { lg: 1250, md: 1000, sm: 800, xs: 600 },
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          variant="quilted"
          cols={4}
          rowHeight={getRowHeight()}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Layout>
    </>
  );
};

export default Gallary;
