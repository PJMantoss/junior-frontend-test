import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Container = styled.div`
    width: 386px;
    height: 444px;
    flex: 1;
    padding: 16px;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`;

const ProductImage = styled.img`
    width: 338px;
    height: 338px;
    margin: 0 auto;
`;

const PrdouctInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
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

const ProductName = styled.p`
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    color: #1d1f22;
`;

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