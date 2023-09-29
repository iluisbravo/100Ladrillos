import React from 'react'
import { FormTitleH3 } from '../Text/FormTitleH3';
import { CaptionForm } from '../Text/CaptionForm';
import { FormTitleH2 } from '../Text/FormTitleH2';
import { Button } from '../Button/Button';
import { useAuth } from '../../contexts/AuthContext';

export const SignUpFormStep4 = ({ onPrevStep, onNextStep }) => {
    const { formData, setFormData } = useAuth();


    const handlePrevStep = () => {
        onPrevStep();
    };

    const handleNextStep = () => {
        const isValid = true;

        if (isValid) {
            onNextStep();
        }
    };

    return (
        <div>
            <div className="mb-3">
                <FormTitleH3>Haz creado una cuenta</FormTitleH3>
            </div>

            <div className="mb-4">
                <CaptionForm>Tu número de cliente es: 000001</CaptionForm>
            </div>

            <div className="mb-4">
                <FormTitleH2>{`${formData.primerNombre} 
                    ${formData.segundoNombre} 
                    ${formData.primerApellido}
                    ${formData.segundoApellido}
                    `}</FormTitleH2>
                <CaptionForm>{formData.email}</CaptionForm>
                <CaptionForm>{formData.phone}</CaptionForm>
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
            // onClick={handleNextStep}
            // disabled={!form.isValidStep && !form.emailValid}
            >
                Finalizar
            </Button>
        </div>
    );
}
