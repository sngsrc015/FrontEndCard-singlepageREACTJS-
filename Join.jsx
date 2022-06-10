import React from 'react'
import styled from 'styled-components'
import { cardShadow,darkThemeColor,hoverEffect,themeColor } from '../utils'
import {FaSlack} from 'react-icons/fa';



export default function Join() {
  return (
   <JoinChannel>
       <CardContent flex={true}>
           <Slack>
               <SlackLogo>
                   <FaSlack/>
               </SlackLogo>
               <SlackText>
                   <SlackHead>
                       Engage with clients
                   </SlackHead>
                   <SlackFoot>Join Slack Channel</SlackFoot>
               </SlackText>
           </Slack>
           <SlackJoin>Join Now</SlackJoin>
       </CardContent>
   </JoinChannel>
  )
}

const JoinChannel=styled.div`
background-color:${darkThemeColor};
height:50 %
padding-top:0.2rem;
margin-top:1.5rem;
border-radius:1rem;
display:flex;
align-items:center;
transition:0.4s ease-in-out;
box-shadow:${cardShadow};
@media screen and min-width:(320px) and max-width:(1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }








`;
const CardContent=styled.div`
margin:1rem;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }


`;
const Slack=styled.div`
display:flex;`;
const SlackLogo=styled.div`
margin-right:0.7rem;
display:flex;
justify-content:center;
align-items:center;
svg{
    color:white;
    height:3rem;
    width:3rem;
}
`;
const SlackFoot=styled.h5`
color:#e4e4e4
font-weight:normal`;
const SlackText=styled.div`
color:white;`;

const SlackJoin=styled.button`
background-color:${themeColor};
border:none;
outline:none;
padding:1rem 2rem;
color:white;
border-radius:0.5rem;
font-size:1.2rem;
font-weight:bold;
cursor:pointer;`;
const SlackHead=styled.h2`
font-weight:500;`;