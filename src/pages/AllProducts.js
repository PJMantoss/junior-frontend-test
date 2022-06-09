import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import styled from 'styled-components';

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const CategoryName = styled.h2`
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    color: #1d1f22;
    line-height: 28.8px;
    margin: 40px 0 40px 40px;
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

  useEffect(() => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ query: GET_PRODUCT })
    }).then(res => res.json())
    .then(data => setAllProducts(data.data.category.products))
  }, []);

  const prices = allProducts.map(product => Object.values(product.prices)[0]);
  // console.log(prices) productPrice={productPrice}
  const price = prices.map(price => price.amount);
  // console.log(price); 
  const productPrice = price.reduce((prev,curr) => {return prev - curr}, 0);
  console.log(productPrice); 

  return (
    <>
    <CategoryName>All Products</CategoryName>
      <Container>
        {/* {JSON.stringify(allProducts, null, 2)} */}
        {allProducts.map(product => (
            <Product key={product.id} product={product} />)
          )}
      </Container>
    </>
  )
}

export default AllProducts;