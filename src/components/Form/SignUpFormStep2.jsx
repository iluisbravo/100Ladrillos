import React, { useEffect, useState } from 'react'
import { FormTitleH3 } from '../Text/FormTitleH3';
import { Button } from '../Button/Button';
import { ModalPhoneNumberVerify } from './ModalPhoneNumberVerify';
import { useAuth } from '../../contexts/AuthContext';
import { render } from 'react-dom';
import { registerPhoneNumber } from '../../services/SignUpServices';
import errorMessages from '../../utils/errorMessages';

export const SignUpFormStep2 = ({ onPrevStep, onNextStep }) => {
    const { formData, setFormData } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        phoneValidation();
    }, [formData.phone]);

    const handlePrevStep = () => {
        onPrevStep();
    };

    const handleNextStep = () => {
        onNextStep();
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const phoneValidation = () => {
        const phoneValid = /^[0-9]{10}$/.test(formData.phone);

        setFormData((formData) => {
            return {
                ...formData,
                isValidStep2: phoneValid
            }
        });
    }

    const onlyNumbers = (e) => {
        if (e.keyCode === 8 || e.keyCode === 9) {
            return;
        }

        if (e.key && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const renderButtonValidate = () => {
        if (formData.phoneVerified) {
            return <Button
                typeButton={"primary"}
                onClick={handleNextStep}
            >
                Siguiente
            </Button>
        }
        else {
            return <Button
                typeButton={"primary"}
                onClick={handleRegisterPhone}
                disabled={!formData.isValidStep2}
            >
                Verificar
            </Button>

        }
    }

    const handleRegisterPhone = () => {
        registerPhoneNumber(formData.phone, formData.token)
            .then((response) => {
                console.log(response, "registering phone");
                if (response.status === 200) {
                    setError(undefined);
                    openModal();
                }

            })
            .catch((error) => {
                console.log(error.response.request.status);
                setError(error.response.request.status);
            });
    };

    return (<>
        <ModalPhoneNumberVerify
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
        />
        <div>
            <div className="mb-3">
                <FormTitleH3>¿Cuál es tu teléfono celular?</FormTitleH3>
            </div>

            <div className="mb-4">
                <input
                    type="tel"
                    name='phone'
                    className="form-control"
                    placeholder='1234-5678'
                    aria-describedby="phoneHelp"
                    value={formData.phone}
                    onInput={(event) => setFormData((formData) => {
                        return {
                            ...formData,
                            phone: event.target.value
                        }
                    })}
                    maxLength={10}
                    onKeyDown={onlyNumbers}
                />
                <div className="form-text error">
                    {
                        formData.isValidStep2 ? undefined : "Ingresa un teléfono válido."
                    }
                </div>
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
            {renderButtonValidate()}
        </div>
    </>
    );
}
