import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
