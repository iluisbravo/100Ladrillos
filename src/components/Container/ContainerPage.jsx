import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../contexts/ThemeContext'

const StyledContainerPage = styled.div`
    display:flex;
    flex-direction:column;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    height: 90vh; 
    border-radius: 5px;
`

export const ContainerPage = ({ children }) => {
    const theme = useTheme();
    return (
        <StyledContainerPage theme={theme}>
            <div className='container text-center p-5'>
                <div className='row'>
                    <div className='col-12'>
                        {children}
                    </div>
                </div>
            </div>
        </StyledContainerPage >);
}
