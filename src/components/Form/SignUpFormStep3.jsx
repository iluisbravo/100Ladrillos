import React, { useEffect } from 'react'
import { LabelForm } from '../Text/LabelForm';
import { FormTitleH3 } from '../Text/FormTitleH3';
import { Button } from '../Button/Button';
import { useAuth } from '../../contexts/AuthContext';

export const SignUpFormStep3 = ({ onPrevStep, onNextStep }) => {
    const { formData, setFormData } = useAuth();

    useEffect(() => {
        validateStep();
    }, [
        formData.primerNombre,
        formData.segundoNombre,
        formData.primerApellido,
        formData.segundoApellido
    ]);

    const validateStep = () => {
        if (formData.primerNombre && formData.primerApellido) {
            setFormData((formData) => {
                return {
                    ...formData,
                    isValidStep3: true
                }
            });
        }
    }

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
                <FormTitleH3>¿Cómo te llamas?</FormTitleH3>
            </div>
            <div className="mb-4">
                <LabelForm className="form-label">Primer nombre</LabelForm>
                <input
                    type="text"
                    name='primerNombre'
                    className="form-control"
                    placeholder='Primer nombre'
                    aria-describedby="primerNombeHelp"
                    value={formData.primerNombre}
                    onInput={(event) => setFormData((formData) => {
                        return {
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                    })}

                />
            </div>
            <div className="mb-4">
                <LabelForm className="form-label">Segundo nombre (Opcional)</LabelForm>
                <input
                    type="text"
                    name='segundoNombre'
                    className="form-control"
                    placeholder='Segundo nombre'
                    aria-describedby="segundoNombreHelp"
                    value={formData.segundoNombre}
                    onInput={(event) => setFormData((formData) => {
                        return {
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                    })}
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
                    value={formData.primerApellido}
                    onInput={(event) => setFormData((formData) => {
                        return {
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                    })}
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
                    value={formData.segundoApellido}
                    onInput={(event) => setFormData((formData) => {
                        return {
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                    })}
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
                disabled={!formData.isValidStep3}
            >
                Siguiente
            </Button>
        </div>
    );
}
