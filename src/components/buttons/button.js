import React from 'react'
import {StyledButton} from './button.styled';

function Button({children,...props}) {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Button
