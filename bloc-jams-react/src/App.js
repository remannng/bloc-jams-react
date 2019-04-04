import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <nav>
          <Link className="library" to='/library'>library</Link>
         </nav>
          <Link className="home" to='/'><img className="logo" src='/assets/images/blocjAMs.png' alt="bloc jAMs logo" style={{ textDecoration: 'none' }} /></Link>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
