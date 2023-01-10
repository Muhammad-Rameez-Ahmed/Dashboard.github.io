import React, { useState} from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import {GrReactjs } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import{FaDiscord} from "react-icons/fa";
import{FiTwitter} from "react-icons/fi";
import{ImTelegram} from "react-icons/im";


export default function Sidebar() {
 const [navbarState, setNavbarState] = useState(false);
 return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <GrReactjs/>
            <span>VAULT PASS</span>
          </div>
          <div className="toggle">
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">
                  <MdSpaceDashboard />
                  <span> Dashboard</span> 
                </a>
              </li>
              <li >
                <a href="#">
                  <RiDashboard2Fill />
                  <span> Analytics</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <FaAddressCard />
                  <span> Stake</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GiTwirlCenter />
                  <span>Bond</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <BsFillChatTextFill />
                  <span> Buy Pass</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <IoSettings />
                  <span> Price Chart</span>
                </a>
              </li>
              <li >
                <a href="#">
                  <IoSettings />
                  <span> Documentation</span>
                </a>
              </li>
              <div>
              </div>
              <div style={{color:'white', display: 'flex',justifyContent:'space-between',marginTop:"40px",marginLeft:'40px',marginRight:'40px'}}>
              < FaDiscord/>
              <FiTwitter/>
              <ImTelegram/>
              </div>
               </ul>
          </div>
        </div> 
 </Section>
  
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li>
              <a href="#">
                <MdSpaceDashboard />
                <span> Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <RiDashboard2Fill />
                <span> Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaAddressCard />
                <span> Stake</span>
              </a>
            </li>
            <li>
              <a href="#">
                <GiTwirlCenter />
                <span> Bond</span>
              </a>
            </li>
            <li >
              <a href="#">
                <BsFillChatTextFill />
                <span> Buy Pass</span>
              </a>
            </li>
            <li>
              <a href="#">
                <IoSettings />
                <span> Price Chart</span>
              </a>
            </li>
            <li>
                 <a href="#">
                  <IoSettings />
                  <span> Documentation</span>
                </a>
              </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  font-family: "Times New Roman", Times, serif;
  background-color: #000000;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    font-family

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      svg {
        color: #ff7207;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #ff8f07;
        font-family: "Permanent Marker", cursive;
      }
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #ff8f07;
            a {
              color: black;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: white;
          }
        }
        .active {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
      }
    }
  }

 
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;
