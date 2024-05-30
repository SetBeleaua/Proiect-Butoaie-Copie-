import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/Contact-Page/ContactPage';
import Register from './components/register-page/Register';
import LoginPage from './components/login-page/LoginPage';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        
        
          <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/contact' element={<ContactPage/>} />
              <Route path='/register' element={<Register/>}/>  
              <Route path='/login' element={<LoginPage/>}/>

          </Routes>
        
        
        </BrowserRouter>
    </div>
  );
}

export default App;
