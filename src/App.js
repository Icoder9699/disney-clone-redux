import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/detail/:id' component={Detail} />
            <Route path='/' component={Login} exact />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
