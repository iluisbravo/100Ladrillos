import React from 'react'
import { TextForm } from '../../components/Text/TextForm';
import { ContainerPage } from '../../components/Container/ContainerPage';
import { TitlePage } from '../../components/Text/TitlePage';

export const HomePage = () => {
    return (
        <>
            <ContainerPage>
                <TitlePage>Tranquilidad de invertir bien
                    Inversiones inmobiliarias inteligentes
                </TitlePage>
                <TextForm>Construye tu patrimonio #LadrilloALadrillo</TextForm>
            </ContainerPage>
        </>
    )
}
