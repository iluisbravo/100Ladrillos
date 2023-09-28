import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';

const StyledCaptionForm = styled.p`
  font-size: ${({ theme }) => theme.fontsSize.caption};
`;

export const CaptionForm = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledCaptionForm theme={theme}>
            {children}
        </StyledCaptionForm>
    )
}
