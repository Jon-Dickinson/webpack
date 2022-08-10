import React from "react";
import logo from "../../Assets/logo.png";
import { LogoModified } from "../../Styles";

export default function AppName() {
  return (
    <LogoModified>
      <img src={ logo } />
    </LogoModified>
  );
}
