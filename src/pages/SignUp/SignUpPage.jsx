import React, { useEffect, useState } from 'react';
import imagenAngel from '../../assets/images/ImagenAngel.webp';

import styled from 'styled-components';
import { SignUpForm } from '../../components/Form/SignUpForm';

const DivImage = styled.img`
width: 100%;
height: 100%;
// margin: 72px 263px 0 0;
object-fit: contain;
`;

export const SignUpPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-sm-12 p-0 image-div">
            <DivImage src={imagenAngel} />
          </div>
          <div className="col-md-7 col-sm-12 p-0 overlay-div">
            <SignUpForm />
          </div>
        </div>
      </div >
    </>
  )
}
