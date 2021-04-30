import './App.css';
import Header from './components/Header';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from './pages/Search';
import AlertProvider from './context/alert/AlertContext';

function App() {
  return (
    <div className="App">
        <AlertProvider>
          <Router>
            <Header />
            <Switch>
              <Route path='/' component={Login} exact />
              <Route path='/home' component={Home} />
              <Route path='/detail/:id' component={Detail} />
              <Route path='/search' component={Search} />
            </Switch>
          </Router>
        </AlertProvider>
    </div>
  );
}

export default App;
