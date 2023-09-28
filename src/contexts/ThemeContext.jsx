import React, { createContext, useContext } from 'react';
import { colors, fontsSize } from '../styles/theme';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const theme = {
        colors,
        fontsSize,
        // Agrega otras variables de estilo aquí si es necesario
    };

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}
