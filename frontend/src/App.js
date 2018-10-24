import React, { Component } from 'react';

import './App.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import authors from './components/authors';
import books from './components/books';
import login from './components/login';
import signup from './components/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <h2>Welcome Home</h2>
            <div>
              <span><Link className="App-link" to={'/'}>Home</Link></span>
              <span><Link className="App-link" to={'/authors'}>Authors</Link></span>
              <span><Link className="App-link" to={'/login'}>Login</Link></span>
              <span><Link className="App-link" to={'/books'}>Books</Link></span>
              <span><Link className="App-link" to={'/signup'}>Signup</Link></span>
            </div>
            <Switch>

              <Route exact path='/login' component={login}></Route>
              <Route exact path='/books' component={books}></Route>
              <Route exact path='/authors' component={authors}></Route>
              <Route exact path='/signup' component={signup}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
