import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";


export default function Analytics() {
  return (
    <Section >
      <div  className="analytic ">
        <div className="content">
          <h5>Pass Price</h5>
          <h2>$1520.33</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>APR &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;  &ensp;ERP</h5>
          <h2 style={{marginTop:'8px'}}>3280% &ensp; 3%</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>Market Cap</h5>
          <h2 style={{marginTop:'8px'}}>$1520.33</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Total Value Locked</h5>
          <h2 style={{marginTop:'8px'}}>$1520.33</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Treasury Balance</h5>
          <h2 style={{marginTop:'8px'}}>$1520.33</h2>
        </div>  
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>PASS Supply</h5>
          <h2 style={{marginTop:'8px'}}>$1520.33</h2>
        </div>  
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Backing per PASS</h5>
          <h2 style={{marginTop:'8px'}}>$1520.33</h2>
        </div> 
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Current index</h5>
          <h2 style={{marginTop:'8px'}}>$1520.33</h2>
        </div>  
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  justify-content:center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #ff8f07;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
