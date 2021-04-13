import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      Portfolio project ...
    </Router>
  );
}

export default App;
