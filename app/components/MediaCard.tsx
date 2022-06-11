import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Paper,
} from '@mui/material';

import Avatar from './Avatar';

interface IProps {
  name: string;
  discription: string;
  img?: string;
  isFullName: boolean;
}

const MediaCard: React.FC<IProps> = ({
  name,
  discription,
  img,
  isFullName,
}) => {
  return (
    <Paper elevation={2} sx={{ maxWidth: '100%', m: '1rem 0' }}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Учитель {discription}
            </Typography>
          </CardContent>
        </Box>

        <Box>
          {img ? (
            <Avatar
              nameProps={name}
              isMrgin={true}
              isFullName={isFullName}
              img={img}
            />
          ) : (
            <Avatar nameProps={name} isMrgin={false} isFullName={isFullName} />
          )}
        </Box>
      </Card>
    </Paper>
  );
};

export default MediaCard;
