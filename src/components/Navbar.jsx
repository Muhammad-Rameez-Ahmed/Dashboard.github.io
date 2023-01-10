import React from "react";
import styled from "styled-components";

export default function Navbar() {


  return (
   
<div> 
<div style={{textAlign: 'right'}}>
<button style={{ borderRadius:"20px", padding:"10px", backgroundColor: ' #ff8f07',color:"white", fontWeight: 'bold',cursor:'pointer',margin:"5px"}}>Buy PASS</button>
<button style={{borderRadius:"20px",border: '2px solid #ffc107', padding:"10px",  backgroundColor: ' black',color:"white", fontWeight: 'bold',cursor:'pointer'}}>Connect Wallet</button>
</div>
<div>
  <h1 style={{color:"orange",textAlign:'left',padding:'20px'}}>EPOCH STAKING</h1>
</div>
</div>  
    
  );
}
const Nav = styled.nav`
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
