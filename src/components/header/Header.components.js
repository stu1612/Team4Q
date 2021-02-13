import React from "react";

import header from "../../img/images/header.jpg";
import triangle from "../../img/images/triangle.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledSiteTitle>
        <h1 className="site-title">team4q</h1>
        <p className="site-subtitle">helsingborg's no.1 basketklubb</p>
      </StyledSiteTitle>
      <StyledTriangle></StyledTriangle>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: url(${header}), #292929;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-blend-mode: overlay;
  position: relative;
  overflow: hidden;
`;

const StyledSiteTitle = styled.div`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 1280px) {
    text-align: left;
    left: 15%;
    top: 80%;
    transform: translate(-10%, -60%);
  }

  .site-title {
    font-family: "Reem Kufi", sans-serif;
    text-transform: uppercase;
    font-size: 3.5rem;
    line-height: 1;
    margin: 0.5em 0;
    font-weight: 700;
    filter: var(--drop-shadow);
  }

  .site-subtitle {
    text-transform: capitalize;
    font-family: "Reem Kufi", sans-serif;
    font-size: clamp(1.3rem, 2vw, 3rem);
    filter: contrast(0.8);
  }

  @media only screen and (min-width: 600px) {
    .site-title {
      font-size: clamp(5.5rem 8vw 10rem);
    }
  }
`;

const StyledTriangle = styled.div`
  background: url(${triangle});
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  position: absolute;
  height: 40%;
  bottom: 0;
  right: 0;
  width: 60%;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.6;
`;
