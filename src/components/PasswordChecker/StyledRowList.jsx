import React from 'react'
import { useTheme } from '../../contexts/ThemeContext';
import styled from 'styled-components';
import { CaptionForm } from '../Text/CaptionForm';

export const StyledRowList = ({ isValid, text }) => {
    return (
        <div className='row p-0'>
            <div className='col-1'>
                <CaptionForm>{isValid ? "🟢" : "⚪"}</CaptionForm>
            </div>
            <div className='col-11'>
                <CaptionForm >{text} </CaptionForm>
            </div>
        </div>
    )
}
