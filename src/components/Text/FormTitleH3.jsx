import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const StyledTitleH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontsSize.titleH3};
`;

export const FormTitleH3 = ({ children }) => {
  const theme = useTheme();
  return (
    <StyledTitleH3 theme={theme} >{children}</StyledTitleH3 >
  );
}
