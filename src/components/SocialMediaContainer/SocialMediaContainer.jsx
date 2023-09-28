import React from 'react'
import styled from 'styled-components';
import logoGoogle from '../../assets/images/LogoGoogle.webp';
import logoWindows from '../../assets/images/LogoWindows.webp';
import logoFacebook from '../../assets/images/LogoFacebook.webp';
import { BottonRedSocial } from '../../components/Button/BottonRedSocial';

const DivContainerButtons = styled.div`
display:flex;
justify-content: space-evenly;
`;

export const SocialMediaContainer = () => {


    return (
        <>
            <div className="mb-2">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-3 p-0'><hr /></div>
                        <div className='col-md-6'><p> o régistrate con: </p></div>
                        <div className='col-md-3 p-0'><hr /></div>
                    </div>
                </div>
            </div>

            <DivContainerButtons>
                <BottonRedSocial logoRedSocial={logoGoogle}></BottonRedSocial>
                <BottonRedSocial logoRedSocial={logoWindows}></BottonRedSocial>
                <BottonRedSocial logoRedSocial={logoFacebook}></BottonRedSocial>
            </DivContainerButtons>
        </>
    )
}
