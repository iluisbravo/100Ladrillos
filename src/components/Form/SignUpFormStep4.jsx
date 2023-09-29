import React from 'react'
import { FormTitleH3 } from '../Text/FormTitleH3';
import { CaptionForm } from '../Text/CaptionForm';
import { FormTitleH2 } from '../Text/FormTitleH2';
import { Button } from '../Button/Button';
import { useAuth } from '../../contexts/AuthContext';
import imageDone from '../../assets/images/done.svg';
import { LinkButton } from '../Button/LinkButton';
import { Link } from 'react-router-dom';

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
        <div className='text-center'>
            <div className="mb-3">
                <img src={imageDone} alt='image completed' />
            </div>

            <div className="mb-3">
                <FormTitleH3>Haz creado una cuenta</FormTitleH3>
            </div>

            <div className="mb-4">
                <CaptionForm>Tu número de cliente es: {formData.idClient}</CaptionForm>
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

            <LinkButton
                typeButton={"primary"}
                bold={true}
            >
                <Link className="nav-link" to="/">
                    Iniciar sesión
                </Link>
            </LinkButton>
        </div>
    );
}
