import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ThemeProvider } from './contexts/ThemeContext'
import { SignUp } from './pages/SignUp/SignUp'

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <SignUp />
      </ThemeProvider>
    </>
  )
}

export default App
