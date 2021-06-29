import React from 'react'
import { Container } from './container.styled';
import { Button } from '../buttons';
import { FormHeader } from './formHeader.styled';
import { FormSubHeader } from './formSubHeader.styled';
import { useHistory } from "react-router";

function ThanksForm() {
  const history = useHistory()
  const closeForm = () => { history.push('/') }
  return (
    <Container>
      <FormHeader>Спасибо !</FormHeader>
      <FormSubHeader>Мы скоро свяжемся с вами</FormSubHeader>
      <Button variant="medium" onClick={closeForm}>Понятно</Button>
    </Container>
  )
}

export default ThanksForm
