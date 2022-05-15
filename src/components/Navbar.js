import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 80px;
  background: white;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Center>
          <Logo>Test.</Logo>
        </Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;