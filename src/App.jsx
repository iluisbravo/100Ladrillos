import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { SignUpPage } from './pages/SignUp/SignUpPage'
import { Routes, Route } from 'react-router-dom';
import routes from './routes/routes';
import { useEffect, useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { getUserInformation } from './services/SignUpServices';

function App() {
  const { formData, setFormData } = useAuth();
  const [error, setError] = useState();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      getUserInformation(storedToken)
        .then(response => {
          if (response.status === 200) {
            const userData = response.data;
            setFormData((formData) => {
              return {
                ...formData,
                token: storedToken,
                email: userData.email,
                primerNombre: userData.name,
                segundoNombre: userData.secondName,
                primerApellido: userData.firstLastName,
                segundoApellido: userData.secondLastName,
                phone: userData.phone.number,
                phoneVerified: userData.phone.verified,
                idClient: userData.clientNumber
              }
            });

            setError(undefined);
          }

        })
        .catch(error => {
          console.log(error.response.request.status);
          setError(error.response.request.status);
        });


    }
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  )
}

export default App
