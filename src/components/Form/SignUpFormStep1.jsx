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
import { useAuth } from '../../contexts/AuthContext';
import { createSignUp } from '../../services/SignUpServices';
import errorMessages from '../../utils/errorMessages';

export const SignUpFormStep1 = ({ onNextStep }) => {
    const { formData, setFormData } = useAuth();
    const [error, setError] = useState();

    useEffect(() => {

    }, []);

    const emailValidation = () => {
        const emailValid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(formData.email);
        return emailValid;
    }

    const handleSignUp = () => {
        createSignUp(formData.email, formData.password)
            .then((response) => {
                console.log(response, "creating sign up");
                if (response.status === 201) {
                    setError(undefined);
                    setFormData((formData) => {
                        return {
                            ...formData,
                            token: response.data.token
                        }
                    });
                    handleNextStep();
                }

            })
            .catch((error) => {
                console.log(error.response.request.status);
                setError(error.response.request.status);
            });
    };

    const handleNextStep = () => {
        onNextStep();
    };

    const renderValidations = () => {
        if (formData.email.length === 0 && formData.password.length === 0) {
            return <SocialMediaContainer />
        }
        else {
            return <PasswordValidations />
        }
    }

    return (
        <div>
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
                    className="form-control"
                    placeholder='tu@correo.com'
                    aria-describedby="emailHelp"
                    value={formData.email}
                    onChange={(event) => { setFormData({ ...formData, [event.target.name]: event.target.value }) }}
                />
                <div className="form-text red">
                    {
                        emailValidation() ? undefined : "Ingresa un correo válido."
                    }
                </div>
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error == 409 ? errorMessages[error] : undefined}
                </div>
            </div>

            <div className="mb-4">
                <LabelForm className="form-label">ingresa una contraseña</LabelForm>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder='Contraseña'
                    aria-describedby="passwordHelp"
                    value={formData.password}
                    onChange={(event) => { setFormData({ ...formData, [event.target.name]: event.target.value }) }}
                />
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error == 400 ? errorMessages[error] : undefined}
                </div>
            </div>

            <div className="mb-4">
                {renderValidations()}
            </div>

            <Button
                typeButton={"primary"}
                onClick={handleSignUp}
                disabled={!formData.isValidStep1 || !emailValidation()}
            > Siguiente</Button>
        </div>
    );
}
