import './css/App.css'; // Importing the main stylesheet for the application
import Home from './pages/Home';// Importing the Home component
import { Routes, Route } from 'react-router-dom'; // Importing routing components from react-router-dom
import Favorite from './pages/Favorite';
import Navbar from './component/Navbar'; // Importing the Navbar component
import { MovieProvider } from './contexts/MovieContext';

function App() {
  return (
   <MovieProvider>
    <Navbar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/favorites" element={<Favorite/>} />
      </Routes>
    </main>

   </MovieProvider>
    
  );
}

export default App;
