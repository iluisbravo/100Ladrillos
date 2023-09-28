import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const StyledTextForm = styled.p`
  font-size: ${({ theme }) => theme.fontsSize.text};
`;

export const TextForm = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledTextForm theme={theme}>{children}</StyledTextForm>
    )
}
