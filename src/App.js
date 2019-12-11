import React, { Component } from 'react';
import './App.css';
import SearchHeader from './components/SearchHeader/SearchHeader.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Footer from './components/Footer/Footer.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.js';

class App extends Component {
  render() {
    const results = [
      {
        title: 'Kill Bill: Vol 1',
        year: 2003,
        gengre: 'Action & Adventure',
        imageUrl: '/images/kill-bill-vol-1.jpg'
      },
      {
        title: 'Kill Bill: Vol 2',
        year: 2004,
        gengre: 'Action & Adventure',
        imageUrl: '/images/kill-bill-vol-2.jpg'
      },
      {
        title: 'Pulp Fiction',
        year: 1994,
        gengre: 'Oscar winning Movie',
        imageUrl: '/images/pulp-fiction.jpg'
      }
    ]
    return (
      <ErrorBoundary>
        <div className="App">
          <SearchHeader />
          <SearchResults results={results} />
          <Footer />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
