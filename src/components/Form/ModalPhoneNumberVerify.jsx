import React, { useState } from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { TextForm } from '../Text/TextForm';
import { FormTitleH2 } from '../Text/FormTitleH2';
import { FormTitleH3 } from '../Text/FormTitleH3';
import { CaptionForm } from '../Text/CaptionForm';
import { Button } from '../Button/Button';
import phoneImg from '../../assets/images/phone.svg'
import { useAuth } from '../../contexts/AuthContext';
import { verifyPhoneNumber } from '../../services/SignUpServices';
import errorMessages from '../../utils/errorMessages';
import { LinkForm } from '../Text/LinkForm';

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  height: 580px;
  border-radius: 4px;
  padding: 24px 32px;
  width: 549px;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  /* Estilos para el contenido del modal */
`;

const ContainerCode = styled.div`
    display: flex;
    justify-content: center;
    
    input{
        width: 34px;
        height: 46px;
        margin: 0 16px 0 0;
        flex-grow: 0;
        text-align: center;
        border: solid 2px ${({ theme }) => theme.colors.gray};
        border-radius: 4px;
    }

`

export const ModalPhoneNumberVerify = ({ isOpen, openModal, closeModal }) => {
    const { formData, setFormData } = useAuth();
    const [error, setError] = useState();

    const [digits, setDigits] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
    });
    const theme = useTheme();

    const handleChange = (event) => {
        setDigits((digits) => {
            return {
                ...digits,
                [event.target.name]: event.target.value
            }
        });
    };

    const onlyNumbers = (e) => {
        if (e.keyCode === 8 || e.keyCode === 9) {
            return;
        }

        if (e.key && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const validatePhone = () => {
        setFormData((formData) => {
            return {
                ...formData,
                phoneVerified: true
            }
        });

        closeModal();
    }

    const handlePhoneVerify = () => {
        verifyPhoneNumber(`${digits.digit1}${digits.digit2}${digits.digit3}${digits.digit4}`, formData.token)
            .then((response) => {
                console.log(response, "Verifing phone");
                if (response.status === 200) {
                    setFormData((formData) => {
                        return {
                            ...formData,
                            phoneVerified: true
                        }
                    });
                    setError(undefined);
                    closeModal();
                }

            })
            .catch((error) => {
                console.log(error.response.request.status);
                setError(error.response.request.status);
            });
    };


    return (
        <div>
            {isOpen && (
                <ModalOverlay>
                    <ModalContainer theme={theme}>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalContent>
                            {/* Contenido del modal */}
                            <div className='mb-4'>
                                <FormTitleH3>Verifica tu teléfono</FormTitleH3>
                            </div>

                            <div className='mb-5'>
                                <img src={phoneImg} />
                            </div>

                            <div className='mb-3'>
                                <TextForm>Hemos enviado un código único de 6 digítos a tú teléfono celular</TextForm>
                                <FormTitleH3>{formData.phone || "11 1111 1111"}</FormTitleH3>
                            </div>

                            <div className='mb-5'>
                                <CaptionForm>Tú código expira en 2 minutos</CaptionForm>
                            </div>

                            <div className='mb-5'>
                                <ContainerCode theme={theme}>
                                    <input
                                        type='text'
                                        name='digit1'
                                        value={digits.digit1}
                                        onChange={handleChange}
                                        onKeyDown={onlyNumbers}
                                        maxLength={1}></input>
                                    <input
                                        type='text'
                                        name='digit2'
                                        value={digits.digit2}
                                        onChange={handleChange}
                                        onKeyDown={onlyNumbers}
                                        maxLength={1}></input>
                                    <input
                                        type='text'
                                        name='digit3'
                                        value={digits.digit3}
                                        onChange={handleChange}
                                        onKeyDown={onlyNumbers}
                                        maxLength={1}></input>
                                    <input
                                        type='text'
                                        name='digit4'
                                        value={digits.digit4}
                                        onChange={handleChange}
                                        onKeyDown={onlyNumbers}
                                        maxLength={1}></input>
                                </ContainerCode>
                                <div className="invalid-feedback" style={{ display: 'block' }}>
                                    {error ? errorMessages[error] : undefined}
                                </div>
                            </div>

                            <div className='mb-4'>
                                <CaptionForm>¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente</CaptionForm>
                            </div>

                            <div className='mb-4'>
                                <LinkForm>Renvíar SMS</LinkForm>
                            </div>

                            <div className='mb-1'>
                                <Button
                                    typeButton={'secondary'}
                                    onClick={closeModal}
                                > Cancelar</Button>
                                <Button
                                    typeButton={'primary'}
                                    onClick={handlePhoneVerify}
                                    disabled={
                                        (digits.digit1.trim() == "" ||
                                            digits.digit2.trim() == "" ||
                                            digits.digit3.trim() == "" ||
                                            digits.digit4.trim() == "")
                                            ? true
                                            : false
                                    }
                                >Validar código</Button>
                            </div>
                            {error || undefined}



                        </ModalContent>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </div>
    );
}
