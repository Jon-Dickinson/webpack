import React from "react";
import styled from "@emotion/styled";
import { BaseWrapperVertical, Row } from "../../Styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DrawDiagram from "./DrawDiagram";
import Example from "./Example";
import Content from "./Content";

export const NavBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 5px 15px;
    margin: 20px 0 0 20px;
    border: 3px solid #2164f3;
    border-radius: 4px;
    color: #2164f3;
    font-weight: 500;
    font-size: 14px;

      :hover {
      color: #ffffff !important;
      background-color: #2164f3;
    }

  }
`;

export default function Dashboard() {
  return (
    <BaseWrapperVertical>
      <Router>
        <Row>
          <NavBlock>
            <Link to="/">Base</Link>
          </NavBlock>
          <NavBlock>
            <Link to="/example">Version 2.0</Link>
          </NavBlock>
        </Row>
        <Switch>
          <Route exact path="/">
            <DrawDiagram />
          </Route>
          <Route path="/example">
            <Example />
            <Content/>
          </Route>
        </Switch>
      </Router>
    </BaseWrapperVertical>
  );
}
