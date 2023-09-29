import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const StyledLinkButton = styled.button`
  font-family: 'Roboto',sans-serif;
  font-family: 'Roboto Condensed',sans-serif;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  margin-right: 16px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: none;

  &:hover{
    background: rgb(243, 243, 243);
    border-radius: 3px;
  }

`;
export const LinkButton = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledLinkButton theme={theme}>
            {children}
        </StyledLinkButton>
    )
}
