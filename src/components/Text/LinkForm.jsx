import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const StyledLinkForm = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.link};
`;

export const LinkForm = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledLinkForm theme={theme}>{children}</StyledLinkForm>
    )
}
