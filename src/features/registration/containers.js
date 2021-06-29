import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 6.5rem ;
  padding-bottom:  3.19rem;
  max-width: 382px;
  @media(min-width: 877px){
    max-width: 844px;
  }
`
export const RadioContainer = styled.div`
  display:flex;
  margin-bottom: 3rem;
  > * {
    margin-right: 2.5rem;
  }
`
export const CheckBoxContainer = styled.div`
  display:flex;
  margin-bottom: 2.5rem;
  > * {
    margin-right: 0.5rem;
  }
`

export const FormRow = styled.div`
  display:flex;
  flex-wrap: wrap;
  > div:nth-child(1) {
    margin-right: 80px;
  }
  @media(max-width: 877px){
    > * {
      margin-bottom: 0.9rem;
    }
    > div:nth-child(1) {
      margin-right: 0;
    }
    align-items:center;
  }
`