import React from "react";
import styled from "@emotion/styled";
import { BaseWrapperVertical, Row, WrapperCenter } from "../../Styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

export const NavBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 10px;
`;

export const LogoBlock = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  transform: translate(-25px, -50px);
`;

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

export default function Dashboard() {
  return (
    <BaseWrapperVertical>
      <Router>
        <Row>
          <NavBlock>
            <Link to="/">Base</Link>
          </NavBlock>
          <NavBlock>
            <Link to="/version">Version 2.0</Link>
          </NavBlock>
        </Row>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/version">
            <About />
          </Route>
        </Switch>
      </Router>
    </BaseWrapperVertical>
  );
}

function Home() {
  return (
    <WrapperCenter>
      <LogoBlock>
        <svg
          width="420"
          height="70"
          viewBox="58 -2 50 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="78.3%"
              y1="17.942%"
              x2="-68.364%"
              y2="150.256%"
              id="a"
            >
              <stop stop-color="#60C1CB" offset="0%" />
              <stop stop-color="#008FBD" offset="37.107%" />
              <stop stop-color="#00185B" offset="100%" />
            </linearGradient>
            <linearGradient x1="79.037%" y1="100%" x2="79.037%" y2="0%" id="b">
              <stop stop-color="#FFC000" offset="0%" />
              <stop stop-color="#E94E1B" offset="100%" />
            </linearGradient>
          </defs>
          <g fill-rule="nonzero" fill="none">
            <path
              d="M24 0v4.603H6.743a2.2 2.2 0 0 0-2.188 2.175V14.614H24v4.603H0V6.814C0 3.088 2.96.061 6.632.001L6.743 0H24Z"
              fill="url(#a)"
            />
            <path
              d="M32 6.783v4.603H14.743a2.2 2.2 0 0 0-2.188 2.174v7.837H32V26H8V13.597c0-3.726 2.96-6.753 6.632-6.813l.111-.001H32Z"
              fill="url(#b)"
              transform="rotate(-180 20 16.391)"
            />
            <path fill="#60C1CB" d="M27.429 0H32v4.522h-4.571z" />
            <path fill="#E94E1B" d="M0 21.478h4.571V26H0z" />
            <g fill="#001347">
              <path d="M51.86 21.962c2.245 0 4.079-.547 5.487-1.642 1.408-1.094 2.112-2.43 2.112-4.021 0-1.375-.438-2.43-1.315-3.17-.877-.737-2.152-1.348-3.813-1.832l-4.729-1.463c-1.209-.344-1.82-.916-1.82-1.718 0-.547.28-1.018.85-1.4.572-.382 1.302-.573 2.206-.573 1.049 0 1.992.23 2.83.688.836.458 1.46 1.056 1.859 1.807l3.467-.968c-.545-1.336-1.554-2.443-3.029-3.334C54.491 3.446 52.764 3 50.785 3c-1.953 0-3.587.509-4.89 1.527-1.3 1.018-1.952 2.253-1.939 3.69-.013 1.133.372 2.088 1.156 2.877.784.789 1.833 1.387 3.162 1.781l4.862 1.464c.916.267 1.567.585 1.953.942.385.356.57.776.57 1.26 0 .623-.331 1.158-1.009 1.616-.677.458-1.554.687-2.63.687-1.315 0-2.458-.318-3.414-.955-.957-.636-1.634-1.45-2.033-2.456L43 16.464c.584 1.553 1.647 2.864 3.188 3.933C47.73 21.466 49.602 22 51.794 22l.066-.038ZM73.986 3.344l-4.902 8.106-4.915-8.106h-4.225l7.24 11.555v6.694h3.786v-6.694l7.2-11.555zM93.839 3.344v11.835L84.275 3.344h-3.082v18.249h3.732V9.732l9.578 11.861h3.069V3.344zM116.163 21.593h3.893l-7.32-18.25h-4.849l-7.293 18.25h3.866l1.581-3.958h8.568l1.554 3.958Zm-8.9-7.114 3.042-7.712 3.055 7.712h-6.097ZM135.884 3.344h-16.512v3.232h6.39v15.017h3.732V6.576h6.39zM139.199 21.593h3.786V3.344h-3.786zM156.874 21.962c2.351 0 4.344-.573 5.964-1.73 1.621-1.159 2.67-2.533 3.135-4.124l-3.613-.891c-.332.954-.996 1.756-1.992 2.405-.997.65-2.192.98-3.574.98-1.82 0-3.294-.598-4.437-1.807-1.142-1.209-1.713-2.66-1.713-4.365 0-1.693.57-3.13 1.7-4.314 1.13-1.184 2.617-1.769 4.45-1.769 1.382 0 2.564.33 3.56.993.997.661 1.66 1.476 1.993 2.43L166 8.918c-.492-1.604-1.554-2.991-3.175-4.162-1.62-1.17-3.64-1.756-6.044-1.756-2.83 0-5.194.904-7.094 2.71-1.9 1.808-2.843 4.06-2.843 6.745 0 2.711.944 4.976 2.843 6.796 1.9 1.82 4.278 2.724 7.147 2.724l.04-.013Z" />
            </g>
          </g>
        </svg>
      </LogoBlock>
    </WrapperCenter>
  );
}

function About() {
  return (
    <WrapperCenter>
      <LogoBlock>
        <LogoVersionTwo>
          <img src={logo} />
          <Title>Synatic</Title>
        </LogoVersionTwo>
      </LogoBlock>
    </WrapperCenter>
  );
}
