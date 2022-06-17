import type { NextPage } from 'next';
import { Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

import Layout from '../app/layouts/Layout';
import ImageCard from '../app/components/ImageCard';

const textColor = grey[800];

const adminsData = [
  {
    imgUrl: '/admin_1.jpg',
    title: 'Рузикулов Намаз Арзиулович',
    descr: 'Исполнительный директор академического лицея',
  },
  {
    imgUrl: '/admin_2.jpg',
    title: 'Орипов Камолиддин Усарович',
    descr: 'Заместитель директор по учебной работе академического лицея',
  },
  {
    imgUrl: '/admin_3.jpg',
    title: 'Нуралиев Абдумурат Абдувалиевич',
    descr: 'Заместитель директор по работе с молодежью академического лицея',
  },
  {
    imgUrl: '/admin_4.jpg',
    title: 'Каршиев Бахтиёр',
    descr: 'Заместитель директора по финансам академического лицея',
  },
];

const Admins: NextPage = () => {
  return (
    <Layout title="Админитрация">
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ color: textColor, marginTop: '2rem' }}
      >
        Админитрация нашего лицея
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr',
            lg: '1fr 1fr 1fr 1fr',
          },
          gridColumnGap: '2rem',
          gridRowGap: '2rem',
          mx: '8vw',
          mt: '2rem',
        }}
      >
        {adminsData.map((data, idx) => (
          <ImageCard
            imgUrl={data.imgUrl}
            title={data.title}
            descr={data.descr}
            key={idx}
          />
        ))}
      </Box>
    </Layout>
  );
};

export default Admins;
