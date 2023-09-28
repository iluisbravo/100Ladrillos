import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const StyledFormTitleH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontsSize.titleH2};
`;

export const FormTitleH2 = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledFormTitleH2 theme={theme}>{children}</StyledFormTitleH2>
    )
}
