import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext';
import { SignUp } from './pages/SignUp/SignUp'

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <NavBar />
          <SignUp />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
