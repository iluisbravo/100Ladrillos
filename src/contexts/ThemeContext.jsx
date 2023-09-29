import React, { createContext, useContext } from 'react';
import { colors, fontsSize } from '../styles/theme';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
    const theme = {
        colors,
        fontsSize
    };

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}
