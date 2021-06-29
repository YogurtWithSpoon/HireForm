import styled from 'styled-components';

export const TextContainer = styled.div`
  height: 385px;
  overflow-y: scroll;
  line-height: 2.375rem;
  font-family: 'Inter';
  text-align: justify;
  ::-webkit-scrollbar {
  width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(38,38,38,0.7);
    border-radius: 4px;
  }
  @media(min-width:767px){
    height: 616px;
  }
`