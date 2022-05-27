import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 386px;
    height: 444px;
    justify-content: center;
    align-items: center;
`;

const ProductImage = styled.img`
    height: 80%;
`;

const PrdouctInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: end;
    width: 30px;
    height: 30px;
    background: #5ece7b;
    color: #ffffff;
    border-radius: 50%;
`;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;


const Product = ({product, price}) => {
  return (
    <Container>
        <ProductImage src={product.gallery[0]} alt={product.name} />
        <PrdouctInfo>
            <Icon>
                <ShoppingCartOutlinedIcon style={{width:"20px", height:"20px"}} />
            </Icon>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
                ${price}
            </ProductPrice>
        </PrdouctInfo>
    </Container>
  )
}

export default Product;