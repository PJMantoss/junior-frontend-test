import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageName = styled.h2`
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    color: #1d1f22;
    line-height: 28.8px;
    margin: 40px 0 40px 40px;
`;

const Cart = () => {
  return (
      <>
        <PageName>Cart</PageName>
        <Container>
            <Wrapper></Wrapper>
        </Container>
      </>
  )
}

export default Cart