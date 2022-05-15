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
const Right = styled.div``;
const Center = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        Navbar
      </Wrapper>
    </Container>
  )
}

export default Navbar;