import React from 'react'
import { StyledCheckBox } from './checkbox.styled';
import { SubCheckBox } from './fakeCheckBox.styled';
function CheckBox({ checked, onClick, value, ...props }) {
  return (
    <>
      <StyledCheckBox type="checkbox" onChange={onClick} value={value} checked={checked} {...props} />
      <SubCheckBox active={checked} />
    </>
  )
}

export default CheckBox
