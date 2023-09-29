import React from 'react'
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const Button = styled.button`
width: 48px;
height: 48px;
background-color: ${({ theme }) => theme.colors.white};
border-radius: 4px;
border: solid 1px ${({ theme }) => theme.colors.white};
box-shadow: 0 0 6px 0 gray;

img{
    width: 32px;
    height: 32px;
}
`

export const BottonRedSocial = ({ logoRedSocial }) => {
    const theme = useTheme();
    return (
        <Button theme={theme}>
            <img src={logoRedSocial} alt='Red Social' />
        </Button>
    )
}
