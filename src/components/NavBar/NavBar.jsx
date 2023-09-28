import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import logo100Ladrillos from '../../assets/images/Logo100Ladrillos.svg';

const StyledNavbar = styled.div`
  a.nav-link {
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: condensed;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
  }
  
  nav {
    background: white;
    box-shadow: inset 0 -1px 0 0 ${({ theme }) => theme.colors.gray};
  }
  
  li {
    width: 163px;
    margin-left: 24px;
  }
`;

export const NavBar = () => {
  const theme = useTheme();

  return (
    <StyledNavbar theme={theme}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand ms-3" href="/">
            <img src={logo100Ladrillos} alt="Logo" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/como-funciona">Cómo funciona</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entrar">Entrar</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </StyledNavbar>
  );
};
