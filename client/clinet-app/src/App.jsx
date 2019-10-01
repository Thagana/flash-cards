import React from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import { HashRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
        </div>
      </div>
      </Router>
  );
}

export default App;
