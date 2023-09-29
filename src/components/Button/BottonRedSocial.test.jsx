import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { BottonRedSocial } from './BottonRedSocial';

describe('BottonRedSocial', () => {
    // Prueba 1: Verificar que el componente se renderice correctamente
    test('Renderiza el componente ButtonRedSocial correctamente', () => {
        render(
            <ThemeProvider>
                <BottonRedSocial logoRedSocial="ruta/de/la/imagen.png" />
            </ThemeProvider>
        );
        expect(screen.getByAltText('Red Social')).toBeTruthy();
    });
});
