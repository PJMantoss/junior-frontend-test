import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  background: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Left = styled.div``;

const Center = styled.div``;

const Right = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left></Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;