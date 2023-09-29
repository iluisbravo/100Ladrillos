import React, { useEffect, useState } from 'react'
import { LabelForm } from '../Text/LabelForm';
import { FormTitleH3 } from '../Text/FormTitleH3';
import { Button } from '../Button/Button';
import { useAuth } from '../../contexts/AuthContext';
import { registerUserName } from '../../services/SignUpServices';
import errorMessages from '../../utils/errorMessages';

export const SignUpFormStep3 = ({ onPrevStep, onNextStep }) => {
    const { formData, setFormData } = useAuth();
    const [error, setError] = useState();

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
        onNextStep();
    };

    const onlyLetters = (event) => {

        if (event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 32) {
            return;
        }

        const inputValue = event.key;
        const regex = /^[a-zA-Z]+$/;

        if (!regex.test(inputValue)) {
            event.preventDefault();
        }
    };


    const handleRegisterNames = () => {
        registerUserName(
            formData.primerNombre,
            formData.segundoNombre,
            formData.primerApellido,
            formData.segundoApellido,
            formData.token)
            .then((response) => {
                console.log(response, "Registering names");
                if (response.status === 200) {
                    setFormData((formData) => {
                        return {
                            ...formData,
                            idClient: response.data.clientNumber
                        }
                    });
                    setError(undefined);
                    handleNextStep();
                }

            })
            .catch((error) => {
                console.log(error.response.request.status);
                setError(error.response.request.status);
            });
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
                    onKeyDown={onlyLetters}
                />
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error ? errorMessages[error] : undefined}
                </div>
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
                    onKeyDown={onlyLetters}
                />
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error ? errorMessages[error] : undefined}
                </div>
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
                    onKeyDown={onlyLetters}
                />
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error ? errorMessages[error] : undefined}
                </div>
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
                    onKeyDown={onlyLetters}
                />
                <div className="invalid-feedback" style={{ display: 'block' }}>
                    {error ? errorMessages[error] : undefined}
                </div>
            </div>

            <Button
                typeButton={"secondary"}
                onClick={handlePrevStep}
            >
                Anterior
            </Button>

            <Button
                typeButton={"primary"}
                onClick={handleRegisterNames}
                disabled={!formData.isValidStep3}
            >
                Siguiente
            </Button>
        </div>
    );
}
