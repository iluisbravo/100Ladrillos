import React from 'react'
import { LabelForm } from '../Text/LabelForm';
import { FormTitleH3 } from '../Text/FormTitleH3';
import { Button } from '../Button/Button';

export const SignUpFormStep3 = ({ onPrevStep, onNextStep }) => {
    // Lógica de validación para el paso 3

    const handlePrevStep = () => {
        onPrevStep();
    };

    const handleNextStep = () => {
        // Realizar validaciones específicas del paso 3
        const isValid = true; // Cambia esto con tu lógica de validación real

        if (isValid) {
            onNextStep();
        }
    };

    return (
        <div>
            {/* Renderiza el contenido del paso 3 */}
            <div className="mb-3">
                <FormTitleH3>¿Cómo te llamas?</FormTitleH3>
            </div>
            <div className="mb-4">
                <LabelForm className="form-label">Primer nombre</LabelForm>
                <input
                    type="text"
                    name='primerNombre'
                    className="form-control"
                    placeholder='Primer nombre'
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-4">
                <LabelForm className="form-label">Segundo nombre (Opcional)</LabelForm>
                <input
                    type="text"
                    name='segundoNombre'
                    className="form-control"
                    placeholder='Segundo nombre'
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-4">
                <LabelForm className="form-label">Primer apellido</LabelForm>
                <input
                    type="text"
                    name='primerApellido'
                    className="form-control"
                    placeholder='Primer apellido'
                    aria-describedby="emailHelp"
                />
            </div>
            <div className="mb-4">
                <LabelForm className="form-label">Segundo apellido (Opcional)</LabelForm>
                <input
                    type="text"
                    name='segundoApellido'
                    className="form-control"
                    placeholder='Segundo apellido'
                    aria-describedby="emailHelp"
                />
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
            // disabled={!form.isValidStep && !form.emailValid}
            >
                Siguiente
            </Button>
        </div>
    );
}
