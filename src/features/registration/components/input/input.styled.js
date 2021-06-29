import styled from 'styled-components';

import ErrorIcon from './assets/error.svg';

export const StyledInput = styled.input`
  font-size: 1rem; 
  line-height: 1.20rem;
  padding: 1.15rem 1rem;
  border: ${props => props.error ? '1.5px solid #FF2E56' : '1px solid #E4E3EA'};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  position: relative;
  z-index: 0;
  color: ${props => props.error ? '#FF2E56' : '#1B1A28'};
  ${props => props.error &&
    `background-position: right 1.125rem top 1.125rem;
     background-image: url(${ErrorIcon});
     background-repeat: no-repeat;`
  };
  ${props => props.secret &&
    `max-width: 130px;
     margin-top: 0;
     padding: 0;
     outline: none;
     border:none;
    `
  };
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 600;
    color: #9090A2;
  };
  :focus {
    outline-color: #6780FB;
  };
`