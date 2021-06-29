import React from 'react'
import {ChipContainer} from './chipContainer.styled'
import {CloseButton} from './closeButton.styled';
import {ChipLabel} from './chipLabel.styled';
import {ReactComponent as CloseIcon} from './assets/close.svg';
function Chip({children,remove}) {
  return (
    <ChipContainer>
      <ChipLabel>{children}</ChipLabel>
      <CloseButton onClick={remove}><CloseIcon/></CloseButton>
    </ChipContainer>
  )
}

export default Chip
