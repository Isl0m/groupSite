import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface IProps {
  imgUrl: string;
  title: string;
  descr: string;
}

const ImageCard: React.FC<IProps> = ({ imgUrl, title, descr }) => {
  return (
    <Card>
      <CardMedia component="img" height="350" image={imgUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descr}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ImageCard;
