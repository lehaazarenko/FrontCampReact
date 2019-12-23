import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage.js';
import MoviePage from './components/MoviePage/MoviePage.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/NotFound/NotFound.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js';

class App extends Component {

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Switch>
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/search/:id" component={MoviePage} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
