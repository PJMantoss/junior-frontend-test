import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  width: 33px;
  height: 30px;
`;

const Right = styled.div`
  flex: 1;
  text-align: right;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const StyledNavLink = styled(NavLink)`
  color: #1d1f22;
  font-style: raleway;
  font-size: 16px;
  line-height: 19.62px;
  font-weight: 400;

  &.${props => props.activeClassName}{
    color: #5ece7b;
  }
`;
{/* <StyledNavLink to="/" activeClassName="any">Women</StyledNavLink>
          <StyledNavLink activeClassName="any">Men</StyledNavLink> */}

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          Left
        </Left>
        <Center>
          <Logo src={'./assets/logo.png'} />
        </Center>
        <Right>
          <MenuItem>
            Cart(0)
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;