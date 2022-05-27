import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Project/Project';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Classes from './components/Classes/Classes';
import Sites from './components/Sites/Sites.jsx';
import Me from './components/Me/Me';
import Code from './components/Code/Code';


function App() {
  return (
    <div className='container-main'>
      <Header />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/projetos' component={ Projects } />
          <Route exact path='/me' component={ Me } />
          <Route exact path='/codigo' component={ Code } />
          <Route exact path='/aula-particular' component={ Classes } />
          <Route exact path='/desenvolvimento-site' component={ Sites } />
          <Route exact path='/contato' component={ Contact } />
          </Switch>
    </div>
  );
}

export default App;
