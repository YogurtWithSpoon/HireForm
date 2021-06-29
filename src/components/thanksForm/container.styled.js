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
  max-width: 95%;
  max-height: 230px;
  background: #FFFFFF;
  padding: 2rem;
  border-radius: 0.5rem;
`