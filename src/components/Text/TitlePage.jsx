import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import styled from 'styled-components';

const StyledTitlePage = styled.h3`
    color: ${({ theme }) => theme.colors.white};
`

export const TitlePage = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledTitlePage theme={theme}>{children}</StyledTitlePage>
    )
}
