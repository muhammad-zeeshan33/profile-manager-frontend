import './App.css';
import { Routes, Route , } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';
import AuthGuard from './guards/AuthGuard';
import Navbar from './atoms/Navbar/Navbar';
import Footer from './atoms/Footer/Footer';
import { useAuthContext } from './contexts/authContext';
function App() {

  const { isLoggedIn } = useAuthContext();

  return (    
    <div className="App">
      {isLoggedIn && <Navbar />}
      <Routes>        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />        
          <Route path="/" element={<AuthGuard Component={ProfilePage} />} />                
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
