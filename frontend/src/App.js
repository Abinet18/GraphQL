import React, { Component } from 'react';

import './App.css';
import {BrowserRouter,Switch,Route,Link,withRouter} from 'react-router-dom';
import {PrivateRoute} from './helpers/PrivateRoute';
import authors from './components/authors';
import books from './components/books';
import Login from './components/login';
import signup from './components/signup';

class App extends Component {
  state = {
    loggedIn:localStorage.getItem("authToken")!=null
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <h2>Welcome Home</h2>
            <div className="links">
              <span span className="App-link"><Link className="App-link" to={'/'}>Home</Link></span>
              <span span className="App-link"><Link className="App-link" to={'/authors'}>Authors</Link></span>
              {!this.state.loggedIn && <span span className="App-link"><Link className="App-link" to={'/login'}>Login</Link></span>}
              <span span className="App-link"><Link className="App-link" to={'/books'}>Books</Link></span>
              {!this.state.loggedIn && <span className="App-link"><Link className="App-link" to={'/signup'}>Signup</Link></span>}
              {this.state.loggedIn && <span className="App-link" onClick={this.logout}>Logout</span>}
            </div>
            <Switch>

              <Route exact path='/login' render={(props) => <Login {...props} onSuccess={this.onLogin} />}></Route>
              <PrivateRoute exact path='/books' component={books}/>
              <PrivateRoute exact path='/authors' component={authors}/>
              <Route exact path='/signup' component={signup}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

  logout=()=>
  {
    localStorage.clear();
    this.setState({loggedIn:false})
  }
  onLogin = ()=>
  {
    this.setState({loggedIn:true})
  }

}

export default App;
