import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';

const StyledLabelForm = styled.label`
  font-size: ${({ theme }) => theme.fontsSize.label};
`;

export const LabelForm = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledLabelForm theme={theme}>
            {children}
        </StyledLabelForm>

    )
}
