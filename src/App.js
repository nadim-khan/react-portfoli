import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import {Route} from 'react-router-dom'
import Resume from './components/views/Resume';
import Portfolio from './components/views/Portfolio';
import Contacts from './components/views/Contacts';

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contact' component={Contacts} />
    </>
  );
}

export default App;