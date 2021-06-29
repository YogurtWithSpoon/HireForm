import React from 'react'
import { Container } from './container.styled';
import { Header } from './header.styled';
import { TextContainer } from './textContainer.styled';
import { ReactComponent as CloseIcon } from './assets/close.svg'
import { useHistory } from "react-router";
import { Button } from '../buttons';
import { CloseButton } from './closeButton.styled';
import { useMediaQuery } from 'react-responsive'

function AgreementForm({ setCheck }) {
  const history = useHistory()
  const closeForm = () => { history.push('/') }
  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)'
  })
  const setAgreement = () => { 
    setCheck(true,'agreement') 
    history.push('/')
  }
  
  return (
    <Container>
      <CloseButton onClick={closeForm}><CloseIcon /></CloseButton>
      <Header>Политика конфиденциальности</Header>
      <TextContainer>
        <div style={{ width: '95%' }}>
          <h3 style={{ fontWeight: 700 }}>1. Общее положение</h3>
          <p>
            Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Михайловым Иваном Сергеевичем (далее – Оператор).<br />
            1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.<br /> 1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта httpsː//thismywebsite·com. 2. Основные понятия, используемые в Политике<br /> 2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники.<br /> 2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных).
          </p>
        </div>
      </TextContainer>
      <Button variant={isMobile ? 'small' : 'medium'} align={isMobile ? 'flex-end' : 'center'} onClick={setAgreement} style={{ marginRight: '0.75rem', marginTop: '1.5rem' }}>Я согласен</Button>
    </Container>
  )
}

export default AgreementForm
