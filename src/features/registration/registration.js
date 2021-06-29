import React, { useState } from 'react'
import { SectionHeader, Input } from './components';
import { Button, Header, Radio, CheckBox, Modal, ThanksForm, AgreementForm } from '../../components';
import { Container, RadioContainer, CheckBoxContainer, FormRow } from './containers.js';
import { StyledForm } from './form';
import { Switch, Route, useHistory, Link } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'
import { Formik } from 'formik';
import * as yup from 'yup';

function Registration() {

  const [skill, setSkill] = useState('')

  const isMobile = useMediaQuery({
    query: '(max-device-width: 768px)'
  })

  const validationScheme = yup.object().shape({
    name: yup.string().required('Укажите ваше имя'),
    surname: yup.string().required('Укажите вашу фамилию'),
    email: yup.string().required('Укажите свой email').email('Введен email неверного формата'),
    telegram: yup.string().required('Укажите свой UserName в Telegram').matches(/@.*/, 'Username должен начинаться с @'),
    skills: yup.array().min(1, 'Укажите более 1 навыка').required('Укажите свой навык'),
    gender: yup.mixed(["Мужской", "Женский"]).required('Укажите ваш пол'),
    agreement: yup.boolean().oneOf([true], 'Message'),
  })

  const history = useHistory()

  const handleSumbit = (values, actions) => {
    actions.resetForm()
    console.log(values)
    history.push('/done')
  }

  return (
    <Container>
      <Header>Анкета соискателя</Header>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          telegram: '',
          skills: [],
          gender: '',
          agreement: false,
        }}
        validateOnBlur
        onSubmit={handleSumbit}
        validationSchema={validationScheme}
      >
        {({ values, errors, touched, isValid, dirty, handleChange, handleBlur, handleSubmit, setFieldValue }) => (

          <StyledForm>
            <SectionHeader>Личные данные</SectionHeader>
            <FormRow>
              <Input
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name && touched.name}
                errorLabel={errors.name}
                label="Имя"
                type="text"
                required
                placeholder="Имя"
              />
              <Input
                name='surname'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
                error={errors.surname && touched.surname}
                errorLabel={errors.surname}
                label="Фамилия"
                required
                placeholder="Фамилия"
              />
            </FormRow>
            <FormRow>
              <Input
                name='email'
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email}
                errorLabel={errors.email}
                label="Электронная почта"
                required
                placeholder="Электронная почта"
              />
              <Input
                name='telegram'
                label="Telegram"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telegram}
                errorLabel={errors.telegram}
                required
                error={errors.telegram && touched.telegram}
                placeholder="Telegram"
              />
            </FormRow>
            <input type="hidden" name="skills" />
            <Input
              type="chips"
              value={skill}
              name='input-skills'
              chips={values.skills}
              remove={(removeSkill) => {
                setFieldValue('skills', values.skills.filter(skill => removeSkill !== skill))
              }}
              onChange={(e) => { setSkill(e.target.value) }}
              onKeyPress={(e) => {
                if ((e.key === ',' || e.key === 'Enter') && e.target.value !== '') {
                  e.preventDefault();
                  setFieldValue('skills', [...values.skills, e.target.value])
                  setSkill('')
                }
              }}
              onBlur={handleBlur}
              error={errors.skills && touched.skills}
              errorLabel={errors.skills}
              label="Укажите ваши навыки"
              placeholder="Навыки" />

            <SectionHeader error={errors.gender && touched.gender} errorText={errors.gender}>Пол</SectionHeader>
            <RadioContainer >
              <Radio
                label="Мужской"
                value="Мужской"
                onChange={handleChange}
                onBlur={handleBlur}
                gender={values.gender}
                name='gender'
              />
              <Radio
                label="Женский"
                value="Женский"
                gender={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                name='gender'
              />
            </RadioContainer>
            <CheckBoxContainer>
              <CheckBox
                name='agreement'
                checked={values.agreement}
                onClick={() => setFieldValue('agreement', !values.agreement)}
                value={values.agreement}
                onBlur={handleBlur}
              />
              <span>* Я согласен с <Link to="/agreement">политикой конфиденциальности</Link></span>
            </CheckBoxContainer>
            <Button
              disabled={!(isValid && dirty)}
              onClick={handleSubmit}
              type={'submit'}
              variant='medium'
              align={isMobile ? "center" : "flex-start"}
            >
              Отправить
            </Button>

            <Switch>
              <Route path="/agreement">
                <Modal>
                  <AgreementForm setCheck={() => setFieldValue('agreement', true)} />
                </Modal>
              </Route>
              <Route path="/done">
                <Modal>
                  <ThanksForm />
                </Modal>
              </Route>
            </Switch>

          </StyledForm >)
        }
      </Formik>
    </Container>
  )
}

export default Registration
