import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { SignUpPage } from './pages/SignUp/SignUpPage'
import { Routes, Route } from 'react-router-dom';
import routes from './routes/routes';

function App() {
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
