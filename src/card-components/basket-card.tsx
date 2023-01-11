import Typography from '@mui/material/Typography';
import { CardMedia, CardContent, Card } from '@mui/material';
import { Box } from '@mui/system';
import { ProductData } from '../data/data-type';
import { CardAction } from './card-actions';

export interface ProductCardProps extends ProductData {
  setBasket?: any;
  withAction: boolean;
}

export const BasketCard = ({
  name,
  price,
  image,
  setBasket,
}: ProductCardProps) => {
  return (
    <Card sx={{ border: '0', borderRadius: '0', paddingLeft: 3 }}>
      <Typography>{name}</Typography>
      <CardContent
        sx={{
          maxWith: '150px',
          minHeight: '100px',
          display: 'grid',
          gap: '1.2rem',
          gridTemplateColumns: '25% 75%',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          height="50"
          image={process.env.PUBLIC_URL + `images/${image}`}
          sx={{ objectFit: 'contain' }}
        />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
            {price}kr
          </Typography>
          <CardAction fn={setBasket} text="Remove" noIcon />
        </Box>
      </CardContent>
    </Card>
  );
};
