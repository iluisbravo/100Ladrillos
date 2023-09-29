import React from 'react'
import { ContainerPage } from '../../components/Container/ContainerPage'
import { TitlePage } from '../../components/Text/TitlePage'
import { TextForm } from '../../components/Text/TextForm'

export const NotFoundPage = () => {
    return (
        <>
            <ContainerPage>
                <TitlePage>
                   404 - Página ni encontrada
                </TitlePage>
                <TextForm>Construye tu patrimonio #LadrilloALadrillo</TextForm>
            </ContainerPage>
        </>
    )
}
