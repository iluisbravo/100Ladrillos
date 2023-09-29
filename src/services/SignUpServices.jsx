import axios from 'axios';

const api = axios.create({
    baseURL: 'http://frontend-recruiting.100ladrillos.com/api/', // Reemplaza con la URL de tu API.
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createSignUp = (email, password) => {
    return api.post('/signUp', { email, password });
};

export const registerPhoneNumber = (phoneNumber, token) => {
    return api.post('/phoneNumber',
        { number: phoneNumber },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
};

export const verifyPhoneNumber = (code, token) => {
    return api.post('/phoneNumber/verify',
        { token: code },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
};

export const registerUserName = (name, secondName, firstLastName, secondLastName, token) => {
    return api.post('/profile/name',
        {
            name,
            secondName,
            firstLastName,
            secondLastName,
            token
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
};

export const getUserInformation = (token) => {
    return api.get('/profile',
        {
            token
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
};



