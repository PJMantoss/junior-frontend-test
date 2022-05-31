import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  padding: 10px 0 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 288px;
`;

const PageName = styled.h2`
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    color: #1d1f22;
    line-height: 28.8px;
    margin: 40px 0 40px 40px;
`;

const Details = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;

const Title = styled.h2`
    font-size: 30px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 600;
    line-height: 24px;
`;

const Desc = styled.p`
    font-size: 30px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 400;
    line-height: 27px;
`;

const FilterContainer = styled.div`
    margin: 30px 0;
`;

const Filter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 20px;
`;

const FilterTitle = styled.span`
    font-size: 16px;
    color: #1d1f22;
    font-style: normal;
    font-family: "Roboto Condensed";
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 7px;
`;

const Size = styled.div`
    display: flex;
    align-items: center;
`;

const Size1 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #fff;
    color: #1d1f22;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Size2 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #1d1f22;
    color: #fff;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Size3 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #fff;
    color: #1d1f22;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Size4 = styled.div`
    display: inherit;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 35px;
    margin-right: 12px;
    border: 1px solid #1d1f22;
    background: #fff;
    color: #1d1f22;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    line-height: 18px;
`;

const Color = styled.div`
    display: flex;
    align-items: center;
`;

const FilterColor = styled.div`
    width: 26px;
    height: 26px;
    border: 1px solid #5ece7b;
    margin-right: 8px;
    background: ${props => props.color};
`;

const RightDiv = styled.div`
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: center;
`;

const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: inherit;
`;

const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Img = styled.img`
    width: 100%;
    height: 80vh;
`;

const Checkout = styled.div``;

const Paragraph = styled.p`
    font-size: 16px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 400;
    line-height: 18px;
    margin: 0 0 5px 0;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    margin-top: 10px;
    width: 20%;
    background: #5ece7b;
    color: #fff;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
`;

const Span = styled.span`
    font-size: 16px;
    color: #1d1f22;
    font-style: normal;
    font-family: Raleway;
    font-weight: 700;
    line-height: 18px;
`;

const Cart = () => {
  return (
      <>
        <PageName>Cart</PageName>
        <Container>
            <Wrapper>
                <Details>
                    <Title>Nike Shoe</Title>
                    <Desc>Running Shoes</Desc>
                    <Span>$50.00</Span>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>SIZE:</FilterTitle>
                            <Size>
                                <Size1>XS</Size1>
                                <Size2>S</Size2>
                                <Size3>M</Size3>
                                <Size4>L</Size4>
                            </Size>
                        </Filter>
                    
                        <Filter>
                            <FilterTitle>COLOR:</FilterTitle>
                            <Color>
                                <FilterColor color="#d3d2d5" />
                                <FilterColor color="#2b2b2b" />
                                <FilterColor color="#0f6450" />
                            </Color>
                        </Filter>
                    </FilterContainer>
                </Details>
                <RightDiv>
                    <Quantity>
                        <AddIcon style={{width: "25px", height: "25px", border: "1px solid #1d1f22"}} />
                            <Amount> {10} </Amount>
                        <RemoveIcon style={{width: "25px", height: "25px", border: "1px solid #1d1f22"}} />
                    </Quantity>
                </RightDiv>
            </Wrapper>
            <Checkout>
                <Paragraph>
                    Tax 21%: <Span>$50.00</Span> 
                </Paragraph>
                <Paragraph>
                    Quantity: <Span>5</Span>
                </Paragraph>
                <Paragraph>
                    Total: <Span>$250.00</Span>
                </Paragraph>
                <Button>Order</Button>
            </Checkout>
        </Container>
      </>
  )
}

export default Cart;