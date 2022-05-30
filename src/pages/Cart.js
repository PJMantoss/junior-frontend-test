import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

const Cart = () => {
  return (
      <>
        <PageName>All Products</PageName>
        <Container>Cart</Container>
      </>
  )
}

export default Cart