import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
    </Router>
  );
}

export default App;
