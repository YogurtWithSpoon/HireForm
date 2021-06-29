import styled from 'styled-components';

export const InputLabel = styled.label`
 font-weight: 600;
 font-size: 0.875rem;
 line-height: 1rem;
 color: ${props => props.disabled ? '#9090A2' : '#131313'};
`