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
    img: '/img7.jpg',
    title: 'img7',
    cols: 2,
  },
  {
    img: '/img5.jpg',
    title: 'img5',
    cols: 2,
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
    img: '/img8.jpg',
    title: 'img8',
    cols: 2,
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
const itemDataSM = [
  {
    img: '/img7.jpg',
    title: 'img7',
    cols: 4,
  },
  {
    img: '/img5.jpg',
    title: 'img5',
    cols: 4,
  },
  {
    img: '/img4.jpg',
    title: 'img4',
    cols: 2,
  },
  {
    img: '/img3.jpg',
    title: 'img3',
    cols: 2,
  },
  {
    img: '/img2.jpg',
    title: 'img2',
    cols: 4,
  },

  {
    img: '/img8.jpg',
    title: 'img8',
    cols: 4,
  },
  {
    img: '/img6.jpg',
    title: 'img6',
    cols: 4,
  },
  {
    img: '/img1.jpg',
    title: 'img1',
    cols: 4,
  },
  {
    img: '/home1.jpg',
    title: 'home1',
    cols: 4,
  },
];

const textColor = grey[800];

const Gallary: NextPage = () => {
  const theme = useTheme();
  const mediaLG = useMediaQuery(theme.breakpoints.up('lg'));
  const mediaMD = useMediaQuery(theme.breakpoints.up('md'));
  const mediaSM = useMediaQuery(theme.breakpoints.up('sm'));
  const getRowHeight = (): number => {
    if (mediaLG) {
      return 300;
    }
    if (mediaMD) {
      return 220;
    }
    if (mediaSM) {
      return 180;
    }
    return 120;
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
            // width: { lg: 1000, md: 700, sm: 600, xs: 400 },
            // height: { lg: 1250, md: 1000, sm: 800, xs: 600 },
            width: '70%',
            height: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          variant="quilted"
          cols={4}
          rowHeight={getRowHeight()}
        >
          {!mediaMD
            ? itemDataSM.map((item) => (
                <ImageListItem key={item.img} cols={item.cols} rows={2}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    layout="fill"
                    loading="lazy"
                  />
                </ImageListItem>
              ))
            : itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={1}>
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
