import React from "react";
import logo from "../../../Assets/logo.png";
import styled from "@emotion/styled";
import { LogoBlock, WrapperCenter } from "../../../Styles";

export const LogoVersionTwo = styled.div`
  position: relative;
  display: inline-block;
  float: left; /* intentional */
  margin-left: 8px;
  margin-top: 2px;
  z-index: 1500;

  img {
    max-width: 76px;
    margin-right: 25px;
    transform: translateY(10px);
  }
`;

export const Title = styled.h1`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-size: 64px;
  font-weight: 600;
  text-transform: uppercase;
  color: #251b99;
  letter-spacing: 3px;
`;

export default function Example() {
  return (
    <WrapperCenter>
      <LogoBlock>
        <LogoVersionTwo>
          <img src={logo} alt="Version 2.0" />
          <Title>Synatic</Title>
        </LogoVersionTwo>
      </LogoBlock>
    </WrapperCenter>
  );
}
