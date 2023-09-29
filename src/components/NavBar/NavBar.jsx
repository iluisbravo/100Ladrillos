import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import logo100Ladrillos from '../../assets/images/Logo100Ladrillos.svg';
import whiteLogoImage from '../../assets/images/WhiteLogo.svg';
import { useAuth } from '../../contexts/AuthContext';
import { FormTitleH3 } from '../Text/FormTitleH3';

const StyledNavbar = styled.div`
  a.nav-link {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: condensed;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    padding: 10px 20px;
  }

  .nav-item:hover{
    background: rgb(243, 243, 243);
    border-radius:3px;
  }
  
  nav {
    background: white;
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.gray};
  }
  
  li {
    width: 163px;
    // margin-left: 24px;
  }
`;

export const NavBar = () => {
  const theme = useTheme();
  const { formData, setFormData } = useAuth();

  const logOutSession = () => {
    localStorage.removeItem("authToken");
    setFormData((formData) => {
      return {
        ...formData,
        email: '',       
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        phone: '',
        phoneVerified: false,
        token: null,
        idClient: null
      }
    })
  }

  const renderItem = () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      return <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bienvenido {formData.primerNombre}
        </a>
        <ul className="dropdown-menu">
          <li><Link className="dropdown-item disabled" to="/#">Mi cuenta</Link></li>
          <li><Link className="dropdown-item disabled" to="/#">Mi Configuración</Link></li>
          <li><hr className="dropdown-divider" /></li>
          <li><Link className="dropdown-item" to="/#" onClick={logOutSession}>Cerrar sesión</Link></li>
        </ul>
      </li>
    }
    else {
      return <li className="nav-item">
        <Link className="nav-link" to="/SignUp">Entrar</Link>
      </li>
    }
  }

  return (
    <StyledNavbar theme={theme}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand ms-3" to="/">
            <img src={logo100Ladrillos} alt="Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand-center" to="/">
            <img src={whiteLogoImage} alt="WhiteLogo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Cómo funciona</Link>
              </li>
              {renderItem()}
            </ul>
          </div>
        </div>
      </nav>
    </StyledNavbar>
  );
};

