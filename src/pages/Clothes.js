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

const Card = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ProductItem = styled.li`
  list-style: none;
`;

const ProductImage = styled.img``;

const PrdouctInfo = styled.div``;

const CategoryName = styled.h4``;

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

const Clothes = () => {


  // const [allClothes, setAllClothes] = useState([]);

  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: GET_PRODUCTS })
    }).then(res => res.json())
    .then(data => setClothes(data.data.categories[1]));
  }, []);


  // const [filter, setFilter] = useState(data);

  // console.log({error, data, loading});

  // const filterProducts = (cat) => {
  //   const updatedList = data.categories.filter(category => category.name === cat);
  //   setFilter(updatedList);
  // };

  return (
      <Container>
        {/* {JSON.stringify(allProducts, null, 2)} */}
        <Card>
        {Object.values(clothes)[1].map((value, index) => (
            <ProductItem key={index}>
              {/* <ProductImage src={value.gallery} alt={value.name} /> */}
              <PrdouctInfo>
                {/* <CategoryName>{product.products.name}</CategoryName> */}
                <ProductName>{value.name}</ProductName>
                {/* <ProductPrice>
                  {product.prices}
                </ProductPrice> */}
              </PrdouctInfo>
            </ProductItem>)
          )}
          </Card>
      </Container>
  )
}

export default Clothes;