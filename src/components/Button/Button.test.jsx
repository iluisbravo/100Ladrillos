import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, expect, vitest } from 'vitest';
import sinon from 'sinon';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { Button } from './Button';

describe('Button', () => {
    test('Renderiza el componente Button correctamente', () => {
        render(
            <ThemeProvider>
                <Button>Texto del botón</Button>
            </ThemeProvider>
        );
        const buttonElement = screen.getByText('Texto del botón');
        expect(buttonElement).toBeTruthy();
    });

    test('Probar la funcion onClick', () => {
        const handleClick = () => {
            console.log('Button clicked');
        };
        render(
            <ThemeProvider>
                <Button onClick={handleClick}>Seleccionar</Button>
            </ThemeProvider>
        );
        const button = screen.getByText('Seleccionar');
        fireEvent.click(button);
        console.log('Button clicked');
    });

    test('Probar la función click se ejecute 1 vez', () => {
        const handleClick = sinon.spy();
        render(
            <ThemeProvider>
                <Button onClick={handleClick}>Clic aquí</Button>
            </ThemeProvider>
        );
        const buttonElement = screen.getByText('Clic aquí');
        fireEvent.click(buttonElement);
        sinon.assert.calledOnce(handleClick);
    });

    test('Rrenderizar Button con una imagen dentro', () => {
        render(
            <ThemeProvider>
                <Button>
                    <img src="logo.png" alt="Logo" />
                </Button>
            </ThemeProvider>
        );
        const image = screen.getByAltText('Logo');
        expect(image).toBeTruthy();
    });
});
