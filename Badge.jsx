import React from 'react'
import styled from 'styled-components';
import { themeColor } from '../utils';


export default function Badge({content,clean=false,glow=false,paid=false,late=false}) {
  return (
   <Div glow={glow} paid={paid} late={late} clean={clean}>{content}</Div>
  )
}

const Div=styled.div`
padding:0.3rem 1rem;
border-radius:1rem;
font-weight:500;
color:white;
background-color:${themeColor};
cursor:pointer
align-items:center;


${({glow})=>glow && `
font-size:0.8rem;
padding:0.2rem 0.5rem;
font-weight:normal;
color:#2f233d;
list-style:inline;
align-items:center;
background-color:rgba(109,134,245,0.192)`
}

${({paid})=>
paid &&
`background-color:#70e00041;
height:2rem;
width:3rem;
text-align:center;
color:#70e000` }

${({late})=>
late &&
`background-color:#ff595e41;
height:2rem;
text-align:center;
width:3rem;
color:#ff595e` }

${({clean})=>
clean &&
`color:${themeColor};
background-color:transparent;
border:0.05rem solid ${themeColor};` }


`;
