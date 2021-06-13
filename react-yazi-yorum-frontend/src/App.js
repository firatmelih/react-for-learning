import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Comments from './pages/Comments'
import Posts from './pages/Posts'
import DefaultRoutes from './routes/DefaultRoutes'


function App() {
  return (

    <Router>
      <div className="App">
        <header></header>
        <div className="ui raised very padded text container segment">
          <DefaultRoutes />
        </div>
        <footer style={{ padding: '0 0 5px 0' }}></footer>
      </div>
    </Router>
  );
}

export default App;
