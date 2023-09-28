import React, { useEffect, useState } from 'react'
import { FormTitleH3 } from '../Text/FormTitleH3';
import { TextForm } from '../Text/TextForm';
import { LinkForm } from '../Text/LinkForm';
import { LabelForm } from '../Text/LabelForm';
import { SocialMediaContainer } from '../SocialMediaContainer/SocialMediaContainer';
import { StyledRowList } from '../PasswordChecker/StyledRowList';
import { CaptionForm } from '../Text/CaptionForm';
import { Button } from '../Button/Button';
import { PasswordValidations } from '../PasswordChecker/PasswordValidations';

export const SignUpFormStep1 = ({ onNextStep }) => {
    // Lógica de validación para el paso 1
    const [form, setForm] = useState({
        email: "",
        emailValid: false,
        password: "",
        passwordConfirmed: "",
        isValidStep: false
    });

    useEffect(() => {

    }, []);

    const emailValidation = () => {
        const emailValid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(form.email);
        return emailValid;
    }

    const handleNextStep = () => {
        // Realizar validaciones específicas del paso 1
        const isValid = true; // Cambia esto con tu lógica de validación real

        if (isValid) {
            onNextStep();
        }
    };

    const renderValidations = () => {
        if (form.email.length === 0 && form.password.length === 0) {
            return <SocialMediaContainer />
        }
        else {
            return <PasswordValidations
                password={form.password}
                onValidationComplete={(isValid) => setForm({ ...form, isValidStep: isValid })}
            />
        }
    }

    return (
        <div>
            {/* Renderiza el contenido del paso 1 */}
            <div className="mb-3">
                <FormTitleH3>Crear tu cuenta</FormTitleH3>
            </div>

            <div className="mb-4">
                <TextForm>
                    Al aceptar crear una cuenta en 100 Ladrillos aceptas <LinkForm href='#'> nuestro Aviso de Privacidad,
                        Derechos Arco </LinkForm>y nuestros <LinkForm href='#'>Términos y Condiciones.</LinkForm>
                </TextForm>
            </div>

            <div className="mb-4">
                <LabelForm className="form-label">¿Cuál es tu correo electrónico?</LabelForm>
                <input
                    type="email"
                    name='email'
                    value={form.email}
                    className="form-control"
                    placeholder='tu@correo.com'
                    aria-describedby="emailHelp"
                    onChange={(event) => { setForm({ ...form, [event.target.name]: event.target.value }) }}
                />
                <div className="form-text red">
                    {
                        emailValidation() ? undefined : "Ingresa un correo válido."
                    }
                </div>
            </div>

            <div className="mb-4">
                <LabelForm className="form-label">ingresa una contraseña</LabelForm>
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
            <Button
                typeButton={"primary"}
                onClick={handleNextStep}
                // disabled={!form.isValidStep || !emailValidation()}
            > Siguiente</Button>
            {JSON.stringify(form)}
        </div>
    );
}
