import React, { useEffect, useState } from 'react';
import { CaptionForm } from '../Text/CaptionForm';
import { StyledRowList } from './StyledRowList';
import { LabelForm } from '../Text/LabelForm';
import { useAuth } from '../../contexts/AuthContext';

export const PasswordValidations = () => {
    const [isValid, setIsValid] = useState(false);
    const { formData, setFormData } = useAuth();

    const [passwordConfirmed, setPasswordConfirmed] = useState("");

    useEffect(() => {
        validatePassword();
    }, [formData.password, formData.passwordConfirmed]);

    const minLength = formData.password.length >= 6;
    const hasNumber = /\d/.test(formData.password);
    const hasSpecialChar = /[!\\“#$%&/()=?¿^*@‚[\]\\{};:_><,.\-|`+]/.test(formData.password);
    const doesNotContainPhrase = !formData.password.includes('100Ladrillos');
    const doesNotHaveConsecutiveChars = !/(.)\1{3,}/.test(formData.password);
    const doesNotHaveSequentialChars = !/(123|234|345|456|567|678|789|012)/.test(formData.password);

    const validatePassword = () => {
        const isValidPassword =
            minLength &&
            hasNumber &&
            hasSpecialChar &&
            doesNotContainPhrase &&
            doesNotHaveConsecutiveChars &&
            doesNotHaveSequentialChars &&
            formData.passwordConfirmed === formData.password;

        setFormData((formData) => {
            return {
                ...formData,
                isValidStep1: isValidPassword
            }
        })
    };

    return (
        <div className='container-fluid p-0'>
            <CaptionForm text={" Por razones de seguridad tu contraseña debe tener las siguientes características:"} />

            <StyledRowList isValid={minLength} text="Mínimo 6 caracteres (letras, números y caracteres especiales)." />
            <StyledRowList isValid={hasNumber} text="Mínimo 1 número." />
            <StyledRowList isValid={hasSpecialChar} text="Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@‚[]{};:_><,.-|\`+." />
            <StyledRowList isValid={doesNotContainPhrase} text="No tener la frase “100Ladrillos”." />
            <StyledRowList isValid={doesNotHaveConsecutiveChars} text="No tener más de 3 caracteres idénticos en forma consecutiva (ej: aaa)." />
            <StyledRowList isValid={doesNotHaveSequentialChars} text="No tener más de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123)." />

            <div className="mb-4">
                <LabelForm className="form-label">Confirmar tu contraseña</LabelForm>
                <input
                    type="password"
                    name='passwordConfirmed'
                    className="form-control"
                    placeholder='Contraseña'
                    aria-describedby="emailHelp"
                    value={formData.passwordConfirmed}
                    onChange={(event) => setFormData((formData) => {
                        return {
                            ...formData,
                            passwordConfirmed: event.target.value
                        }
                    })}
                />
            </div>
        </div>
    );
}

