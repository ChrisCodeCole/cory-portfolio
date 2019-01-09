import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PhotoView, BioView, ArtistsView, ContactView, VideoView, WeddingsView } from './components/views/index';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fasCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

library.add(fasCircle, farCircle);
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={PhotoView} />
          <Route path="/photos" component={BioView} />
          <Route path="/artists" component={ArtistsView} />
          <Route path="/contact" component={ContactView} />
          <Route path="/videos" component={VideoView} />
          <Route path="/weddings" component={WeddingsView} />
          <PhotoView />
        </div>
      </Router>
    );
  }
}

export default App;
