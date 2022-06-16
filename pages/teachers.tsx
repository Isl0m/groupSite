import type { NextPage } from 'next';
import { Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

import Layout from '../app/layouts/Layout';
import MediaCard from '../app/components/MediaCard';

const textColor = grey[800];

const teachersArr = [
  {
    name: 'Сиденко И.А',
    discr: 'Математики',
    imageUrl: '/teacher_1.jpg',
  },
  {
    name: 'Тураханов С.Ф',
    discr: 'Математики',
imageUrl: '/teacher_2.jpg',
  
  },
  {
    name: 'Кульчуков Б.Ж',
    discr: 'Физики',
  },
  {
    name: 'Ботиров Б.И',
    discr: 'Физики',
  },
  {
    name: 'Абдукахарова З.А',
    discr: 'Информатики',
  },
  {
    name: 'Ниязова Ф.Т',
    discr: 'Информатики',
  },
  {
    name: 'Кан Г.С',
    discr: 'Английского языка',
  },
  {
    name: 'Икрамова Г.М',
    discr: 'Английского языка',
  },
  {
    name: 'Ратушина О.В',
    discr: 'Русского языка',
  },
  {
    name: 'Касимова Д.Р',
    discr: 'Узбекского языка',
  },
  {
    name: 'Арзикулов А.И',
    discr: 'Физкультуры',
    imageUrl: '/teacher_3.jpg',
  },
  {
    name: 'Заитова Ш.Р',
    discr: 'Истории',
    imageUrl: '/teacher_5.jpg',
  },
  {
    name: 'Ходжаев М.С',
    discr: 'Астрономии',
  },
  {
    name: 'Чалтаев Б.К',
    discr: 'НВП',
    imageUrl: '/teacher_4.jpg',

  },
  {
    name: 'Кучкарова М.Т',
    discr: 'НВП',
  },
  {
    name: 'Тутунжан А.Н',
    discr: 'Биологии',
  },
  {
    name: 'Саидваккасова З.Х',
    discr: 'Химии',
  },
];

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
            gridTemplateColumns: { sm: '1fr', md: '1fr 1fr' },
            gridColumnGap: '2rem',
            mx: '10vw',
          }}
        >
          {teachersArr.map(({ name, discr, imageUrl }, idx) => (
            <MediaCard
              key={idx}
              name={name}
              discription={discr}
              img={imageUrl}
              isFullName={true}
            />
          ))}
        </Box>
      </Layout>
    </>
  );
};

export default Teachers;
