import React from "react";
import { BaseWrapperVertical, Row, Block } from "./Styles";
import styled from "@emotion/styled";
import Dashboard from "./Components/Dashboard/";
import AppName from "./Components/Name";
import NavColumn from "./Components/NavColumn";
import DarkModeComponent from "./Components/DarkMode";

import "./App.scss";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: inline-flex;
  width: 100%;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #d8d8d8;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1500;
  display: inline-flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 0;
`;

export default function App() {
  return (
    <BaseWrapperVertical className="min-h-100">
      <Header>
        <HeaderContent>
          <AppName />
          <Block>
            <DarkModeComponent />
          </Block>
        </HeaderContent>
      </Header>
      <Row className="h-100">
        <NavColumn />
        <BaseWrapperVertical className="overflow-y-scroll margin-t-50">
          <Dashboard />
        </BaseWrapperVertical>
      </Row>
    </BaseWrapperVertical>
  );
}
