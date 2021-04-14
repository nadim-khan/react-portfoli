import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <CssBaseline>
      <Home/>
      
    </CssBaseline>
  );
}

export default App;
