import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1440px;
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

const Images = styled.img``;

const InfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;`;

const Name = styled.h2``;

const Desc = styled.p``;

const Size = styled.div``;

const Color = styled.div``;

const Price = styled.p``;

const Product = () => {
  return (
    <Container>
        <Wrapper>
            <ImagesContainer>
                <Images />
            </ImagesContainer>

            <ImgContainer>
                <Images />
            </ImgContainer>

            <InfoContainer>
                <Name>Nike Shoe</Name>
                <Desc>Running Shoes</Desc>
                <Size>SIZE:</Size>
                <Color>COLOR:</Color>
                <Price>$50</Price>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product