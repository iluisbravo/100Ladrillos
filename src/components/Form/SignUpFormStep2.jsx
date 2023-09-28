import React, { useState } from 'react'
import { FormTitleH3 } from '../Text/FormTitleH3';
import { Button } from '../Button/Button';
import { ModalPhoneNumberVerify } from './ModalPhoneNumberVerify';

export const SignUpFormStep2 = ({ onPrevStep, onNextStep }) => {
    const [phone, setPhone] = useState("");

    const handlePrevStep = () => {
        onPrevStep();
    };

    const handleNextStep = () => {
        const isValid = true;
        if (isValid) {
            onNextStep();
        }
    };

    const phoneValidation = () => {
        const emailValid = /^[0-9]{10}$/.test(phone);
        return emailValid;
    }

    return (<>
        <ModalPhoneNumberVerify />
        <div>
            <div className="mb-3">
                <FormTitleH3>¿Cuál es tu teléfono celular?</FormTitleH3>
            </div>

            <div className="mb-4">
                <input
                    type="tel"
                    name='email'
                    className="form-control"
                    placeholder='1234-5678'
                    aria-describedby="emailHelp"
                    onInput={(event) => setPhone(event.target.value)}
                    maxLength={10}
                />
                <div className="form-text error">
                    {
                        phoneValidation() ? undefined : "Ingresa un teléfono válido."
                    }
                </div>
            </div>

            <Button
                typeButton={"secondary"}
                onClick={handlePrevStep}
            // disabled={!form.isValidStep && !form.emailValid}
            >
                Anterior
            </Button>

            <Button
                typeButton={"primary"}
                onClick={handleNextStep}
                disabled={!phoneValidation()}
            >
                Siguiente
            </Button>
            {phone}
        </div>
    </>
    );
}
