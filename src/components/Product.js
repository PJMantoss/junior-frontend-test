import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const Icon = styled.div`
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -28px;
    right: 125px;
    background: #5ece7b;
    color: #ffffff;
    border-radius: 50%;
    opacity: 0.0;
    transition: opacity 1.5s, transform 1.5s;
`;

const Container = styled.div`
    width: 386px;
    height: 420px;
    flex: 1;
    padding: 16px;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

    &:hover ${Icon} {
        opacity: 1.0;
        transform: rotate(360deg);
    }
`;

const ProductImage = styled.img`
    width: 338px;
    height: 380px;
    margin: 0 auto;
`;

const PrdouctInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
    position: relative;
`

const ProductName = styled.p`
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    color: #1d1f22;
    line-height: 28.8px;
    margin-top: 25px;
`;

const ProductPrice = styled.p`
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    color: #1d1f22;
    line-height: 28.8px;
`;

const GET_PRODUCT = `
  {
    category {
      products {
        id
        prices {
          amount
        }
      }
    }
  }
`;


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