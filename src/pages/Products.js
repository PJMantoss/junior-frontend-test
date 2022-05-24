import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { useQuery, gql } from '@apollo/client';

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

const Card = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProductItem = styled.li`
// list-style: none;
`;

const ProductImage = styled.img``;

const PrdouctInfo = styled.div``;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;

const GET_PRODUCTS = `
  {
    categories {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            symbol
          }
          amount
        }
      }
  }
}
`;

const Products = () => {

  // const {error, data, loading} = useQuery(GET_PRODUCTS);

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: GET_PRODUCTS })
    }).then(res => res.json())
    .then(data => setAllProducts(data.data.categories))
  }, []);


  // const [filter, setFilter] = useState(data);

  // console.log({error, data, loading});

  // const filterProducts = (cat) => {
  //   const updatedList = data.categories.filter(category => category.name === cat);
  //   setFilter(updatedList);
  // };

  return (
    <>
      <Container>
        <Wrapper>
            <Left>
              <CategoryButton 
                // onClick={() => filterProducts('all')}
              >
                all
              </CategoryButton>

              <CategoryButton 
                // onClick={() => filterProducts('clothes')}
              >
                clothes
              </CategoryButton>

              <CategoryButton 
                // onClick={() => filterProducts('tech')}
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
      </Container>
      <Container>
      {/* {JSON.stringify(allProducts, null, 2)} */}
      {allProducts.map((category) => (
          <Card key={category.products.id}>
            <ProductImage src={category.products.gallery} alt={category.products.name} />
            <PrdouctInfo>
              <ProductName>{category.products.name}</ProductName>
              <ProductPrice>
                {category.products.prices}
              </ProductPrice>
            </PrdouctInfo>
          </Card>)
        )}
      </Container>
    </>
  )
}

export default Products;