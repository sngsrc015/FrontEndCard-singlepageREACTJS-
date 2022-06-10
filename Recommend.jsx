import React from 'react'
import Badge from './Badge'
import styled from 'styled-components'
import { cardShadow,hoverEffect,themeColor } from '../utils'
import logo from '../Assets/logo.jpeg';


export default function Recommend() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={logo} alt=''/>
            </Avatar>
            <Info>
              <InfoName>Randy Jackson</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content='Design' />
        </Detail>
        <Title>
          Need a designer to form branding essentials for my business.
        </Title>
        <ProjectInfo>
          Looking for a talented brand designer to create all the branding materials for my new startup.
        </ProjectInfo>
        <PriceContainer>
          <Price>$8400/month</Price>
          <Badge content='Full Time' clean/>
        </PriceContainer>
        </CardContent>
    </RecommendProject>
  )
}

const RecommendProject=styled.div`
height:100%;
width:40rem;
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
      height: max-content;
      width: 80%;
      margin: 2rem 0;
    }`;

const CardContent=styled.div`
margin:0.4rem`;

const Detail=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
@media screen and (min-width: 320px) and (max-width: 1080px) {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.2rem;
  margin-bottom: 1rem;
}`;

const InfoContainer=styled.div`
display:flex;
algin-items:center;`;

const Avatar=styled.div`

img{
  height:4rem;

border-radius:5rem;

}`;

const Info=styled.div`
margin-right:16rem;
padding-left:1rem;`;


const InfoName=styled.h3`
font-weight:500;`;

const InfoUpdate=styled.h5`
font-weight:300;`;

const Title=styled.h4`
font-weight:500;
padding-right:1rem;
margin-top:1.5rem;`;


const PriceContainer=styled.div`
align-items:center;
justify-content:space-between;
margin:0 1rem;
padding:0.5rem 1rem;
border-radius:1rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;

    gap: 0.4rem;
  }`;

const Price=styled.div``;

const ProjectInfo=styled.div`
margin:0;
padding-right:2rem;
font-size:0.9rem;
color:#3b3b3b;
margin-bottom:0.5rem;

`;
