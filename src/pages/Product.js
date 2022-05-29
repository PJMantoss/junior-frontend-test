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
    padding: 0 50px;
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

const FilterContainer = styled.div``;

const Filter = styled.div``;

const FilterTitle = styled.span`
    font-size: 16px;
    color: #1d1f22;
    font-style: normal;
    font-family: "Roboto Condensed";
    font-weight: 700;
    line-height: 16px;
`;

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
                <Title>Nike Shoe</Title>
                <Desc>Running Shoes</Desc>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>SIZE:</FilterTitle>
                        <FilterSize />
                    </Filter>
                
                    <Filter>
                        <FilterTitle>COLOR:</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="grey" />
                    </Filter>
                </FilterContainer>
                <Price>$50</Price>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product