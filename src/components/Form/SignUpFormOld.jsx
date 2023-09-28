import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { SocialMediaContainer } from '../SocialMediaContainer/SocialMediaContainer';
import { Button } from '../Button/Button';
import { useForm } from "react-hook-form";
import { PasswordChecker } from '../PasswordChecker/PasswordChecker';
import { CaptionForm } from '../Text/CaptionForm';
import { StyledRowList } from '../PasswordChecker/StyledRowList';

const Form = styled.form`
width: 320px;
`

const DivForm = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100%; 
`;

const FormTitleH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontsSize.titleH3};
`;

const FormTitleH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontsSize.titleH2};
`;

const TextForm = styled.p`
  font-size: ${({ theme }) => theme.fontsSize.text};
`;

const LabelForm = styled.label`
  font-size: ${({ theme }) => theme.fontsSize.label};
`;

const LinkForm = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.link};
`;

export const SignUpForm = () => {
  const theme = useTheme();
  const [isValid, setIsValid] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [form, setForm] = useState({
    step: 0,
    email: "",
    password: "",
    passwordConfirmed: "",
    step0isValid: false,
    step1isValid: false,
    step2isValid: false,
    step3isValid: false
  });

  useEffect(() => {
    validateForm();
  }, [form]);

  const renderValidations = () => {
    console.log(form);
    if (form.email.length === 0 && form.password.length === 0) {
      return <SocialMediaContainer />
    }
    else {
      const minLength = form.password.length >= 6;
      const hasNumber = /\d/.test(form.password);
      const hasSpecialChar = /[!\\“#$%&/()=?¿^*@‚[\]\\{};:_><,.\-|`+]/.test(form.password);
      const doesNotContainPhrase = !form.password.includes('100Ladrillos');
      const doesNotHaveConsecutiveChars = !/(.)\1{3,}/.test(form.password);
      const doesNotHaveSequentialChars = !/(123|234|345|456|567|678|789|012)/.test(form.password);

      if (minLength &&
        hasNumber &&
        hasSpecialChar &&
        doesNotContainPhrase &&
        doesNotHaveConsecutiveChars &&
        doesNotHaveSequentialChars) {
        setForm(form => {
          return {
            ...form,
            step0isValid: true
          }
        })
      }

      return <>
        <div className='container-fluid p-0'>
          <CaptionForm text={" Por razones de seguridad tu contraseña debe tener las siguientes carateristicas:"} />

          <StyledRowList isValid={minLength} text="Mínimo 6 caracteres (letras, números y caracteres especiales)." />
          <StyledRowList isValid={hasNumber} text="Mínimo 1 número." />
          <StyledRowList isValid={hasSpecialChar} text="Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@‚[]{};:_><,.-|\`+." />
          <StyledRowList isValid={doesNotContainPhrase} text="No tener la frase “100Ladrillos”." />
          <StyledRowList isValid={doesNotHaveConsecutiveChars} text="No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa)." />
          <StyledRowList isValid={doesNotHaveSequentialChars} text="No tener mas de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123)." />

          <div className="mb-4">
            <LabelForm className="form-label" theme={theme} text={"Confirmar tu contraseña"}></LabelForm>
            <input
              type="password"
              name='passwordConfirmed'
              className="form-control"
              placeholder='Contraseña'
              aria-describedby="emailHelp"
              onChange={(event) => { setForm({ ...form, [event.target.name]: event.target.value }) }}
            />

          </div>

        </div>
      </>
    }
  }

  const validateForm = () => {
    if (
      (formStep === 0 && form.step0isValid) ||
      (formStep === 1 && form.step1isValid) ||
      (formStep === 2 && form.step2isValid) ||
      (formStep === 3 && form.step3isValid)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };


  return (
    <>
      <DivForm>
        <Form onSubmit={() => { }}>
          {formStep === 0 && (<section>
            <div className="mb-3">
              <FormTitleH3 theme={theme}>Crear tu cuenta</FormTitleH3>
            </div>

            <div className="mb-4">
              <TextForm theme={theme}>
                Al aceptar crear una cuenta en 100 Ladrillos aceptas <LinkForm href='#' theme={theme}> nuestro Aviso de Privacidad,
                  Derechos Arco </LinkForm>y nuestros <LinkForm href='#' theme={theme}>Términos y Condiciones.</LinkForm>
              </TextForm>
            </div>

            <div className="mb-4">
              <LabelForm className="form-label" theme={theme}>¿Cuál es tu correo electrónico?</LabelForm>
              <input
                type="email"
                name='email'
                className="form-control"
                placeholder='tu@correo.com'
                aria-describedby="emailHelp"
                onChange={(event) => { setForm({ ...form, [event.target.name]: event.target.value }) }}
              />
            </div>

            <div className="mb-4">
              <LabelForm className="form-label" theme={theme}>ingresa una contraseña</LabelForm>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder='Contraseña'
                aria-describedby="emailHelp"
                onChange={(event) => { setForm({ ...form, [event.target.name]: event.target.value }) }}
              />
            </div>

            <div className="mb-4">
              {renderValidations()}
            </div>

          </section>)}
          {formStep === 1 && (<section>
            <div className="mb-3">
              <FormTitleH3 theme={theme}>¿Cuál es tu télefono celular?</FormTitleH3>
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name='email'
                className="form-control"
                placeholder='1234-5678'
                aria-describedby="emailHelp"
              />
            </div>


          </section>)}
          {formStep === 2 && (<section>
            <div className="mb-3">
              <FormTitleH3 theme={theme}>¿Cómo te llamas?</FormTitleH3>
            </div>

            <div className="mb-4">
              <LabelForm className="form-label" theme={theme}>Primer nombre</LabelForm>
              <input
                type="text"
                name='primerNombre'
                className="form-control"
                placeholder='Primer nombre'
                aria-describedby="emailHelp"
              />
            </div>


            <div className="mb-4">
              <LabelForm className="form-label" theme={theme}>Segundo nombre (Opcional)</LabelForm>
              <input
                type="text"
                name='segundoNombre'
                className="form-control"
                placeholder='Segundo nombre'
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-4">
              <LabelForm className="form-label" theme={theme}>Primer apellido</LabelForm>
              <input
                type="text"
                name='primerApellido'
                className="form-control"
                placeholder='Primer apellido'
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-4">
              <LabelForm className="form-label" theme={theme}>Segundo apellido (Opcional)</LabelForm>
              <input
                type="text"
                name='segundoApellido'
                className="form-control"
                placeholder='Segundo apellido'
                aria-describedby="emailHelp"
              />
            </div>

          </section>)}
          {formStep === 3 && (<section>
            <div className="mb-3">
              <FormTitleH3 theme={theme}>Haz creado una cuenta</FormTitleH3>
            </div>

            <div className="mb-4">
              <CaptionForm theme={theme}>Tu número de cliente es: 000001</CaptionForm>
            </div>

            <div className="mb-4">
              <FormTitleH2 theme={theme}>Lucile Salazar Quincero</FormTitleH2>
              <CaptionForm theme={theme}>tu@correo.com</CaptionForm>
              <CaptionForm theme={theme}>33 1111 1111</CaptionForm>
            </div>



          </section>)}

          <div className='mb-4'>

            {formStep > 0 && (
              <Button
                // disabled={"true"}
                text={"Anterior"}
                typeButton={"secondary"}
                onClick={() => setFormStep((prevStep) => prevStep - 1)}
              />
            )}

            {formStep < 3 && (
              <>
                <Button
                  text={"Siguiente"}
                  typeButton={"primary"}
                  onClick={() => setFormStep((prevStep) => prevStep + 1)}
                  disabled={!isValid}
                />
              </>
            )}

            {formStep === 3 && (
              <Button
                text={"Iniciar Sesión"}
                typeButton={"secondary"}
              />
            )}

          </div>



          {JSON.stringify(form)}

        </Form>
      </DivForm>
    </>
  )
}
