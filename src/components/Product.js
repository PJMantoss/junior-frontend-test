import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Container = styled.div``;

const ProductItem = styled.li`
  list-style: none;
`;

const ProductImage = styled.img``;

const PrdouctInfo = styled.div``;

const CategoryName = styled.h4``;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;


const Product = ({product}) => {
  return (
    <Container>
        <ProductItem>
            {/* <ProductImage src={product.gallery} alt={product.name} /> */}
            <PrdouctInfo>
            {/* <CategoryName>{product.products.name}</CategoryName> */}
            <ProductName>{product.name}</ProductName>
            {/* <ProductPrice>
                {product.prices}
            </ProductPrice> */}
            </PrdouctInfo>
        </ProductItem>
    </Container>
  )
}

export default Product