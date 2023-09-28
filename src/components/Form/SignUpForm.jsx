import React, { useState } from 'react';
import { SignUpFormStep1 } from './SignUpFormStep1';
import { SignUpFormStep2 } from './SignUpFormStep2';
import { SignUpFormStep3 } from './SignUpFormStep3';
import { SignUpFormStep4 } from './SignUpFormStep4';
import styled from 'styled-components';

const DivForm = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  height: 100%;
`;

const ContainerForm = styled.div`
    width: 320px;
`

export const SignUpForm = () => {
    const [formStep, setFormStep] = useState(1);

    const handleNextStep = () => {
        setFormStep(formStep + 1);
    };

    const handlePrevStep = () => {
        setFormStep(formStep - 1);
    };

    return (
        <DivForm>
            <ContainerForm>
                {formStep === 1 && <SignUpFormStep1 onNextStep={handleNextStep} />}
                {formStep === 2 && <SignUpFormStep2 onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
                {formStep === 3 && <SignUpFormStep3 onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
                {formStep === 4 && <SignUpFormStep4 onPrevStep={handlePrevStep} onNextStep={handleNextStep} />}
            </ContainerForm>
        </DivForm>
    );
}
