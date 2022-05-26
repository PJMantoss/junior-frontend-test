import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Card = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProductItem = styled.li`
  list-style: none;
`;

const ProductImage = styled.img``;

const PrdouctInfo = styled.div``;

const CategoryName = styled.h4``;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;


const Product = ({item}) => {
  return (
    <Container>
        <ProductItem key={product.id}>
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