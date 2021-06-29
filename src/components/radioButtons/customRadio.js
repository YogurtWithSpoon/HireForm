import React from 'react'
import { StyledRadio } from './radio.styled';
import { SubRadio } from './fakeRadio.styled';

export function CustomRadio({ value, gender, onChange, id, name }) {
  const checked = value === gender
  return (
    <>
      <StyledRadio onChange={onChange} value={value} type="radio" checked={checked} id={id} name={name} />
      <SubRadio active={checked} />
    </>
  )
}

