import React from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import { Authentication } from './components/functions/authentication';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route  {...rest} render={(props) => (
      Authentication.isAuthenticated === true ? <Component { ...props} /> : <Redirect to='/login' />
    )} />
  )

function App() {
  return (
      <Router>
      <div className="App">
        <PrivateRoute  path="/" component={Landing} />
        <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </div>
      </div>
      </Router>
  );
}

export default App;
