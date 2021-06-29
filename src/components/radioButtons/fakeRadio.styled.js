import styled from 'styled-components';

export const SubRadio = styled.div`
 width: 1rem;
 height: 1rem;
 border-radius: 50%;
 border-width: 1px;
 border-style: solid;
 border-color:  #9090A2;
 position:relative;
 cursor: pointer;
 :after{
   ${props => props.active && `
      content: '';
      display: block;
      position: absolute;
      width: 0.5rem;
      height:  0.5rem;
      left: calc(50% -  0.5rem/2);
      top: calc(50% -  0.5rem/2);
      background: #1890FF;
      border-radius: 50%;
   `}
 }
`