import { Button, Card, Drawer, Typography } from '@mui/material';
import { useEffect } from 'react';
import { BasketCard } from '../card-components';
import CloseIcon from '@mui/icons-material/Close';

interface CartProps {
  show: boolean;
  close: any;
  itemsSelected: any;
  setBasket: any;
}

export const ShoppingCart = ({
  show,
  close,
  itemsSelected,
  setBasket,
}: CartProps) => {
  useEffect(() => {
    if (itemsSelected.length === 0) close();
  }, [itemsSelected, close]);

  const totalPrice = itemsSelected.reduce(
    (sum: any, x: any) => sum + parseInt(x.price),
    0
  );

  const handleOnClick = (id: number) => {
    setBasket(
      itemsSelected.filter(
        (_: unknown, index: number) => id !== itemsSelected[index].id
      )
    );
  };

  return (
    <Drawer open={show} anchor="right" onClose={close} sx={{ padding: 3 }}>
      <Card
        sx={{ display: 'flex', flexDirection: 'column', overflow: 'visible' }}
      >
        <Button
          size="large"
          onClick={close}
          endIcon={<CloseIcon />}
          sx={{ alignSelf: 'end', mb: 1 }}
        />

        {itemsSelected.map((item: any) => (
          <BasketCard
            key={`${Math.random()}`}
            setBasket={() => handleOnClick(item.id)}
            {...item}
          >
            {item.name}
          </BasketCard>
        ))}

        {totalPrice && (
          <Typography
            variant="h5"
            sx={{
              mb: 1.5,
              margin: '1.2rem 0',
              alignSelf: 'end',
              paddingRight: '16px',
              padding: '0 16px',
            }}
            color="text.secondary"
            component="div"
          >
            total price: {totalPrice.toFixed(2)} kr
          </Typography>
        )}
      </Card>
    </Drawer>
  );
};
