import './index.css';
import Navigation from './components/navigation.jsx';
import Home from './components/home.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
 

  return (
    <BrowserRouter>
     < Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
       
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
