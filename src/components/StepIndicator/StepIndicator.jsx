import React from 'react';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: 0 auto;
`;

const Step = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.active ? '#5d5d5d' : '#ccc')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const StepIndicator = ({ currentStep }) => {
    return (
        <IndicatorContainer>
            <Step active={currentStep == 1}></Step>
            <Step active={currentStep == 2}></Step>
            <Step active={currentStep == 3}></Step>
            <Step active={currentStep == 4}></Step>
        </IndicatorContainer>
    );
};
