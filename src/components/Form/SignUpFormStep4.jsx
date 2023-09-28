import React from 'react'
import { FormTitleH3 } from '../Text/FormTitleH3';
import { CaptionForm } from '../Text/CaptionForm';
import { FormTitleH2 } from '../Text/FormTitleH2';
import { Button } from '../Button/Button';

export const SignUpFormStep4 = ({ onPrevStep, onNextStep }) => {
    // Lógica de validación para el paso 4

    const handlePrevStep = () => {
        onPrevStep();
    };

    const handleNextStep = () => {
        // Realizar validaciones específicas del paso 4
        const isValid = true; // Cambia esto con tu lógica de validación real

        if (isValid) {
            onNextStep();
        }
    };

    return (
        <div>
            {/* Renderiza el contenido del paso 4 */}
            <div className="mb-3">
                <FormTitleH3>Haz creado una cuenta</FormTitleH3>
            </div>

            <div className="mb-4">
                <CaptionForm>Tu número de cliente es: 000001</CaptionForm>
            </div>

            <div className="mb-4">
                <FormTitleH2>Lucile Salazar Quincero</FormTitleH2>
                <CaptionForm>tu@correo.com</CaptionForm>
                <CaptionForm>33 1111 1111</CaptionForm>
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
