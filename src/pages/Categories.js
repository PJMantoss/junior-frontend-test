import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

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

const CategoryButton = styled.button`
  border: 0;
  background: transparent;
  color: #1d1f22;
  font-style: raleway;
  font-size: 16px;
  line-height: 19.62px;
  font-weight: 400;
  cursor: pointer;
  text-transform: uppercase;

  &.${props => props.activeClassName}{
    color: #5ece7b;
  }
`;

const filterProducts = () => {};

const Categories = () => {

    const DisplayProducts = () => {
        return(
            <Container>
                <Wrapper>
                    <Left>
                      <CategoryButton 
                        activeClassName="any"
                        onClick={() => filterProducts()}
                      >
                        women
                      </CategoryButton>

                      <CategoryButton 
                        activeClassName="any"
                        onClick={() => filterProducts()}
                      >
                        men
                      </CategoryButton>

                      <CategoryButton 
                        activeClassName="any"
                        onClick={() => filterProducts()}
                      >
                        kids
                      </CategoryButton>
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
                {}
            </Container>
        )
    };

  return (
    <div>
      {<DisplayProducts/>}
    </div>
  )
}

export default Categories