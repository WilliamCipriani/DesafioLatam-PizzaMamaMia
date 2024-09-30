import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Cart from "./pages/Cart";
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Pizza from './pages/Pizza';
import NotFound from './components/NotFound'; 
import Profile from './components/Profile';

import { CartProvider } from './context/CartContext'; 
import { PizzaProvider } from './context/PizzaContext'; 
import { UserProvider, UserContext } from './context/UserContext'; // Importar el UserContext
import ProtectedRoute from './components/ProtectedRoute'; // Importar el componente para rutas protegidas

function App() {
  return (
    <UserProvider>  {/* Agregar el UserProvider para manejar el estado de autenticación */}
      <PizzaProvider>  
        <CartProvider> 
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/register" element={<RegisterPage />} /> 
              <Route path="/login" element={<LoginPage />} /> 
              <Route path="/cart" element={<Cart />} /> 
              
              {/* Ruta dinámica para las pizzas */}
              <Route path="/pizza/:id" element={<Pizza />} />

              {/* Ruta protegida para el perfil */}
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } /> 

              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  );
}

export default App;
