import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const getColorType = (typeButton, theme) => {
    return typeButton === "primary" ? theme.colors.white : theme.colors.primary;
}

const getBackgroundColorType = (typeButton, theme) => {
    return typeButton === "primary" ? theme.colors.primary : theme.colors.secondary;
}

const getBorderType = (typeButton, theme) => {
    return typeButton === "primary" ? theme.colors.white : theme.colors.primary;
}

const getHoverType = (typeButton, theme) => {
    return typeButton === "primary" || typeButton === "secondary" ? theme.colors.gray : "";
}

const ButtonStyle = styled.button`
  color: ${({ typeButton, theme }) => getColorType(typeButton, theme)};
  padding: 10px 20px;
  margin-right: 16px;
  border: solid 1px ${({ typeButton, theme }) => getBorderType(typeButton, theme)};
  cursor: pointer;
  background-color: ${({ typeButton, theme }) => getBackgroundColorType(typeButton, theme)};
  border-radius: 4px;

  &:disabled{
    background-color: ${({ typeButton, theme }) => theme.colors.gray};
    color: ${({ typeButton, theme }) => theme.colors.text};
    border:none;
  }
`;

export const Button = ({ onClick, typeButton, type, disabled, children }) => {
    const theme = useTheme();

    return (
        <ButtonStyle
            typeButton={typeButton}
            onClick={onClick}
            theme={theme}
            type={type || "button"}
            disabled={disabled}
        >
            {children}
        </ButtonStyle>
    )
}
