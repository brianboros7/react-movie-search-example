import './App.css';

import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  } from 'react-router-dom'; 

import Header from './components/header/Header'
import Home from './pages/Home'
import AppHome from './pages/app/AppHome'

function App() {
  return (
    <Router>
      <Header /> 
      <Switch>
        <Route
          path="/" exact>
          <Home /> 
        </Route>

        <Route 
          path="/app">
            <AppHome /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
