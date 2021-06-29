import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${props => props.disabled ? '#FFFFFF' : props.outlined ? '#8397FC' : '#FFFFFF'};
  background: ${props => props.disabled ? '#BBB9C5' : props.outlined ? 'none' : '#8397FC'};
  border:${props => props.disabled ? '#BBB9C5' : props.outlined ? '1px solid #8397FC' : 'none'};
  font-weight: 600;
  transition: background .3s ease-in-out;
  ${props => props.align && `
    align-self: ${props.align};
  `}
  ${props => props.variant === "small" && `
    height: 36px;
    border-radius: 43px;
    padding: 7px 24px;
    font-size: 0.815rem;
    text-align: center;
  `}
  ${props => props.variant === 'medium' && `
    width: 318px;
    height: 56px;
    box-shadow: ${props.disabled ? 'none' : '0px 11px 17px -7px rgba(109, 133, 245, 0.54)'};
    border-radius: 86px;
    font-size: 1.125rem;
  `}
  :hover{
    background: ${props => props.disabled ? '#BBB9C5':'#6780FB'};
    cursor: pointer;
    color: #FFFFFF;
    box-shadow: ${props => props.disabled ? 'none' : '0px 11px 17px -7px rgba(109, 133, 245, 0.54)'};
  }
`