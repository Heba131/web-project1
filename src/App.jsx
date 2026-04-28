import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      {/* الـ Header يجب أن يكون ثابتاً في كل الصفحات [cite: 11] */}
      <Header /> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;