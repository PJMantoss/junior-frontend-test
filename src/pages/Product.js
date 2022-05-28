import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 20px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImagesContainer = styled.div``;

const ImgContainer = styled.div``;

const Images = styled.img``;

const InfoContainer = styled.div``;

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
                <Name></Name>
                <Desc></Desc>
                <Size></Size>
                <Color></Color>
                <Price></Price>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product