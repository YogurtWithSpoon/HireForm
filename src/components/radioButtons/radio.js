import React from 'react'
import {RadioLabel} from './radioLabel.styled';
import {RadioContainer} from './radioContainer';
import {CustomRadio} from './customRadio';

function Radio({label,name,id,...props}) {
  return (
    <RadioContainer>
      <CustomRadio id={id} name={name} {...props}/>
      <RadioLabel htmlFor={id}>{label}</RadioLabel>
    </RadioContainer>
  )
}

export default Radio
