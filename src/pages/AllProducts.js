import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import styled from 'styled-components';
// import { useQuery, gql } from '@apollo/client';

const Container = styled.div``;

const GET_PRODUCT = `
  {
    category {
      products {
        id
        name
        gallery
      }
    }
  }
`;

const Products = () => {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: GET_PRODUCT })
    }).then(res => res.json())
    .then(data => setAllProducts(data.data.category.products))
  }, []);

  return (
      <Container>
        {/* {JSON.stringify(allProducts, null, 2)} */}
        <Card>
        {allProducts.map(product => (
            <Product product={product} />)
          )}
          </Card>
      </Container>
  )
}

export default Products;