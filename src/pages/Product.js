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

const Images = styled.img``;

const ProductImg = styled.img``;

const Product = () => {
  return (
    <Container>
        <Wrapper>
            <Images></Images>

            <ProductImg></ProductImg>

            <Info></Info>
        </Wrapper>
    </Container>
  )
}

export default Product