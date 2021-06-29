import styled from 'styled-components';
import checkIcon from './assets/checkIcon.svg'

export const SubCheckBox = styled.div`
  height: 1rem;
  width: 1rem;
  border: 1px solid ${props => props.active ? '#1890FF' : '#9090A2'};
  background: ${props => props.active ? '#1890FF' : '#ffffff'};
  border-radius: 0.125rem;
  position: relative;
  ${props => props.active && `
  :after{
    content: url(${checkIcon});
    display:block;
    place-items:center;
    position:absolute;
    width: 1rem;
    height: 1rem;
    top: -0.25rem;
    left: 1.4px;
    border-radius: 0.125rem;
  }
  `}
`