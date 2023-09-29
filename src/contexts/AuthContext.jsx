import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirmed: '',
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        phone: '',
        phoneVerified: false,
        codigoTelefono: '',
        token: null,
        isValidStep1: false,
        isValidStep2: false,
        isValidStep3: false,
        isValidStep4: false,
        idClient: null
    });

    return (
        <AuthContext.Provider value={{ formData, setFormData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
