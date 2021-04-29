import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route to='/home' component={Home} />
            <Route to='/' component={Login} exact />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
