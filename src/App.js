import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage.js';
import Footer from './components/Footer/Footer.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js';

class App extends Component {

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Route path="/search" component={SearchPage} />
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
