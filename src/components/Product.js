import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Container = styled.div``;

const ProductImage = styled.img``;

const PrdouctInfo = styled.div``;

const Icon = styled.div``;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;


const Product = ({product}) => {
  return (
    <Container>
        <ProductImage src={product.gallery} alt={product.name} />
        <PrdouctInfo>
            <Icon></Icon>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
                {product.prices}
            </ProductPrice>
        </PrdouctInfo>
    </Container>
  )
}

export default Product