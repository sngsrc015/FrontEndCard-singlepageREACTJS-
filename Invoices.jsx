import React from 'react'
import Badge from './Badge'
import styled from 'styled-components'
import { cardShadow,hoverEffect,themeColor } from '../utils'
import logo from '../Assets/logo.jpeg';


export default function Invoices() {
  return (
    <InvoiceContainer>
        <CardContent>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={logo} alt=''/>

                    </Avatar>
                    <TextContainer>
                        <Title>
                            Alexander Williams
                        </Title>
                        <SubTitle>ABC Holdings</SubTitle>
                    </TextContainer>
                </Info>
                <Container><Badge content='paid' paid/>
                <Price>1,200.87$</Price></Container>
            </Invoice>


            <Invoice>
                <Info>
                    <Avatar>
                        <img src={logo} alt=''/>

                    </Avatar>
                    <TextContainer>
                        <Title>
                          Prince Charles
                        </Title>
                        <SubTitle>Pvc Holding</SubTitle>
                    </TextContainer>
                </Info>
                <Container><Badge content='late' late />
                <Price>1,650.87$</Price></Container>
            </Invoice>
        </CardContent>
    </InvoiceContainer>
  )  
}

const InvoiceContainer=styled.div`
height:120%;
width:37rem;
background-color:white;
margin-top:1rem;
padding:1rem;
border-radius:1rem;
box-shadow:${cardShadow};
cursor:pointer;
transition:0.4s ease-in-out; 
&:hover{
    box-shadow:${hoverEffect};
    @media screen and (min-width: 320px) and (max-width: 1080px) {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
      }`;



const CardContent=styled.div`
@media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;

const Invoice=styled.div`
display:flex;
algin-items:center;
justify-content:space-around;
margin:0.4rem;
padding-top:0.6rem;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }`;

const Info=styled.div`
display:flex;
algin-items:center;
width:50%;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }`;

const Avatar=styled.div`
img{
    height:3rem;
    width:3rem;
border-radius:3rem;

}`;

const TextContainer=styled.div`
margin-left:1rem;`;

const Title=styled.h4``;
const SubTitle=styled.h5`
font-weight:400;`;
const Container=styled.div`
display:flex;
algin-items:center;
width:30%;
justify-content:space-between;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }


`;
const Price=styled.div``;


