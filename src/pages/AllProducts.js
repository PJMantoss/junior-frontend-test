import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const GET_PRODUCT = `
  {
    category {
      name
      products {
        id
        name
        gallery
        prices {
          amount
        }
      }
    }
  }
`;

const AllProducts = () => {

  const [allProducts, setAllProducts] = useState([]);
  const [allPrices, setAllPrices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: GET_PRODUCT })
    }).then(res => res.json())
    .then(data => setAllProducts(data.data.category.products))
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: GET_PRODUCT })
    }).then(res => res.json())
    .then(data => setAllPrices(data.data.category.products))
  }, []);

  const price = Object.values(allPrices);
  console.log(price);

  return (
      <Container>
        {/* {JSON.stringify(allProducts, null, 2)} */}
        {allProducts.map(product => (
            <Product key={product.id} product={product} />)
          )}
      </Container>
  )
}

export default AllProducts;