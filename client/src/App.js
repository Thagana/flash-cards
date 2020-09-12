import React from 'react';
import Landing from './views/Landing';
import Login from './views/Auth/SignIn';
import Register from './views/Auth/SignUp';
import { Authentication } from './functions/authentication';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


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
