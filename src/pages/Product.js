import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagesContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const ImgContainer = styled.div`
    flex: 2;
`;

const Images = styled.img`
    width: 100%;
    height: 20vh;
`;

const Img = styled.img`
    width: 100%;
    height: 80vh;
`;

const InfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

const Title = styled.h2`
    font-size: 30px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 600;
    line-height: 27px;
`;

const Desc = styled.p`
    font-size: 30px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 400;
    line-height: 27px;
`;

const FilterContainer = styled.div`
    margin: 30px 0;
`;

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 20px;
`;

const FilterTitle = styled.span`
    font-size: 16px;
    color: #1d1f22;
    font-style: normal;
    font-family: "Roboto Condensed";
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 7px;
`;

const Size = styled.div`
    display: flex;
    align-items: center;
`;

const Size1 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #fff;
    color: #1d1f22;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Size2 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #1d1f22;
    color: #fff;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Size3 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #fff;
    color: #1d1f22;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Size4 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #fff;
    color: #1d1f22;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Color = styled.div`
    display: flex;
    align-items: center;
`;

const FilterColor1 = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #5ece7b;
    margin-right: 8px;
    background: #d3d2d5;
`;

const FilterColor2 = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #5ece7b;
    margin-right: 8px;
    background: #2b2b2b;
`;

const FilterColor3 = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #5ece7b;
    margin-right: 8px;
    background: #0f6450;
`;

const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 16px;
    width: 50%;
    background: #5ece7b;
    color: #fff;
    text-transform: uppercase;
`;

const Price = styled.p`
    font-size: 25px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 20px;
`;

const GET_PRODUCT = `
 query FetchData($id: String!){
    product(id: $id){
      id
      name
      gallery
      prices {
        currency{symbol}
        amount
      }
    }
  }
`;

const Product = () => {
    
    const [productData, setProductData] = useState([]);

    const getProduct = (id) => {
        fetch("http://localhost:4000/", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({GET_PRODUCT, variables: { id } })
        }).then(res => res.json())
        .then(data => setProductData(data));
    };

    getProduct();
    
    //   const prices = singleProduct.map(product => Object.values(product.prices)[0]);
      
    //   const price = prices.map(price => price.amount);
    //   console.log(price)

  return (
    <Container>
        <Wrapper>
            <ImagesContainer>
                <Images src={productData.data.product.gallery} alt={productData.data.product.name} />
            </ImagesContainer>

            <ImgContainer>
                <Img />
            </ImgContainer>

            <InfoContainer>
                <Title>{productData.data.product.name}</Title>
                <Desc>Lorem ipsum dolo si ta me</Desc>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>SIZE:</FilterTitle>
                        <Size>
                            <Size1>XS</Size1>
                            <Size2>S</Size2>
                            <Size3>M</Size3>
                            <Size4>L</Size4>
                        </Size>
                    </Filter>
                
                    <Filter>
                        <FilterTitle>COLOR:</FilterTitle>
                        <Color>
                            <FilterColor1 />
                            <FilterColor2 />
                            <FilterColor3 />
                        </Color>
                    </Filter>
                </FilterContainer>
                <FilterTitle>PRICE:</FilterTitle>
                <Price>$50.00</Price>
                <Button>Add To Cart</Button>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product