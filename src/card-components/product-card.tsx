import Typography from '@mui/material/Typography';
import { CardMedia, CardContent, Card } from '@mui/material';
import { Box } from '@mui/system';
import { ProductData } from '../data/data-type';
import { CardAction } from './card-actions';

export interface ProductCardProps extends ProductData {
  addToBasket: any;
}

export const ProductCard = ({
  name,
  price,
  image,
  addToBasket,
}: ProductCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: '1.2em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent
        sx={{
          display: 'grid',
          gap: '1.2rem',
          gridTemplateColumns: 'repeat(1, 1fr)',
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={process.env.PUBLIC_URL + `images/${image}`}
          sx={{
            objectFit: 'contain',
          }}
        />

        <Box>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ mb: 1.5, margin: '1.2rem 0' }}
            color="text.secondary"
            component="div"
          >
            {price}kr
          </Typography>
        </Box>
      </CardContent>

      <CardAction fn={() => addToBasket(name)} text="Add" />
    </Card>
  );
};
