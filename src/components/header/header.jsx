import React from "react";
import { StyledHeader } from "./header.styled";
function header(props) {
  return <StyledHeader {...props}>{props.children}</StyledHeader>;
}

export default header;
