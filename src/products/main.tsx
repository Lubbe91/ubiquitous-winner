import { useState } from 'react';
import { Badge, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ProductCard, Search } from '../card-components';
import { ProductData } from '../data/data-type';
import { useLocalStorageState } from '../utils';

import dummyJSON from '../data/dummyJSON.json';
import { ShoppingCart } from '../cart/cart';
import { mainStyle } from './main.style';

export const Main = () => {
  const [basket, setBasket] = useLocalStorageState(`basket`, []);
  const [selectedShoes, setSelectedShoes] = useState<ProductData[]>(
    dummyJSON.products
  );

  const [showCart, setShowCart] = useState(false);

  return (
    <Box sx={{ padding: '1.2rem 2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={() => setShowCart(true)}
          disabled={basket.length === 0}
        >
          <Badge badgeContent={basket.length} color="primary">
            <ShoppingCartIcon color="action" fontSize="large" />
          </Badge>
        </Button>
      </Box>

      <ShoppingCart
        show={showCart}
        close={() => setShowCart(false)}
        itemsSelected={basket}
        setBasket={(value: any) => setBasket(value)}
      />

      <Search
        searchOptions={dummyJSON.products}
        setSelectedShoes={(searchResult: ProductData[]) =>
          setSelectedShoes(searchResult)
        }
      />

      <Box sx={{ ...mainStyle }}>
        {selectedShoes.map((productInfo: any) => {
          return (
            <ProductCard
              key={productInfo.name}
              addToBasket={(name: string, id: number) => {
                let addedProductInfo;
                if (productInfo.name === name) {
                  addedProductInfo = {
                    ...productInfo,
                    id: Math.random(),
                  };
                  setBasket([...basket, addedProductInfo]);
                }
              }}
              {...productInfo}
            />
          );
        })}
      </Box>
    </Box>
  );
};
