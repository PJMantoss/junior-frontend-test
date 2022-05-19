import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

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

const CategoryButton = styled.a`
  display: inline-block;
  background: transparent;
  color: #1d1f22;
  font-style: raleway;
  font-size: 16px;
  line-height: 19.62px;
  font-weight: 400;
  padding: 2px 4px 15px;
  margin: 2px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;

  &:active{
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }

  &:visited{
    color: #5ece7b;
  }
`;

const GET_PRODUCTS = gql`
  query {
  categories{
    name,
    products{
        id,
        name,
        gallery,
        prices {
          currency{symbol},
          amount
        }
  }
  }
}
`;

const Products = () => {

  const {error, data, loading} = useQuery(GET_PRODUCTS);

  const [filter, setFilter] = useState(data);

  console.log({error, data, loading});

  const filterProducts = (cat) => {
    const updatedList = data.categories.filter(category => category.name === cat);
    setFilter(updatedList);
  };

    const DisplayProducts = () => {
        return(
          <Container>
                <Wrapper>
                    <Left>
                      <CategoryButton 
                        onClick={() => filterProducts('all')}
                      >
                        all
                      </CategoryButton>

                      <CategoryButton 
                        onClick={() => filterProducts('clothes')}
                      >
                        clothes
                      </CategoryButton>

                      <CategoryButton 
                        onClick={() => filterProducts('tech')}
                      >
                        tech
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
                {data.categories.products.map(product => {
                  return(
                      <div key={product.id}>
                        <img src={product.gallery[0]} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.prices[0].currency}{product.prices[0].amount}</p>
                      </div>
                  )
                })}
            </Container>
        )
    };

  return (
    <div>
      {<DisplayProducts/>}
    </div>
  )
}

export default Products