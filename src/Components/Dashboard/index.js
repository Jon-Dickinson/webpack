import React from "react";
import styled from "@emotion/styled";
import { BaseWrapperVertical, Row } from "../../Styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Base from "./Base";
import Example from "./Example";

export const NavBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 10px;
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
            <Base />
          </Route>
          <Route exact path="/example">
            <Example />
          </Route>
        </Switch>
      </Router>
    </BaseWrapperVertical>
  );
}
