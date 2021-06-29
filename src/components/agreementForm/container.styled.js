import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1000;
  width: 95%;
  max-height: 632px;
  background: #FFFFFF;
  padding: 1.375rem 0.69rem 1.5rem 1.125rem;
  border-radius: 0.5rem;
  @media(min-width:767px){
    max-width: 928px;
    height: 862px;
  }
`