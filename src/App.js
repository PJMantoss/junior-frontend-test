import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
