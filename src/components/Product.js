import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
`;

const ProductImage = styled.img`
    height: 80%;
`;

const PrdouctInfo = styled.div``;

const Icon = styled.div``;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;


const Product = ({product}) => {
  return (
    <Container>
        <ProductImage src={product.gallery[0]} alt={product.name} />
        <PrdouctInfo>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
                $
            </ProductPrice>
        </PrdouctInfo>
    </Container>
  )
}

export default Product;