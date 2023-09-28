import React, { useState } from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { TextForm } from '../Text/TextForm';
import { FormTitleH2 } from '../Text/FormTitleH2';
import { FormTitleH3 } from '../Text/FormTitleH3';
import { CaptionForm } from '../Text/CaptionForm';
import { Button } from '../Button/Button';
import phoneImg from '../../assets/images/phone.svg'

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

export const ModalPhoneNumberVerify = ({ open, phoneNumber }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [digits, setDigits] = useState({
        digit1: '',
        digit2: '',
        digit3: '',
        digit4: '',
    });
    const theme = useTheme();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleChange = (event) => {
        setDigits((digits) => {
            return {
                ...digits,
                [event.target.name]: event.target.value
            }
        });
    };

    const onlyNumbers = (e) => {
        // Permitir la tecla de retroceso (Backspace)
        if (e.keyCode === 8) {
            return;
        }

        // Prevenir cualquier otro carácter que no sea número
        if (e.key && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    };


    return (
        <div>
            <button onClick={openModal}>Abrir Modal</button>

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
                                <FormTitleH3>{phoneNumber || "11 1111 1111"}</FormTitleH3>
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
                            </div>

                            <div className='mb-4'>
                                <CaptionForm>¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente</CaptionForm>
                            </div>

                            <div className='mb-4'>
                                <CaptionForm>Renvíar SMS</CaptionForm>
                            </div>

                            <div className='mb-1'>
                                <Button typeButton={'secondary'}> Cancelar</Button>
                                <Button typeButton={'primary'}>Validar código</Button>
                            </div>



                        </ModalContent>
                    </ModalContainer>
                </ModalOverlay>
            )}
        </div>
    );
}
