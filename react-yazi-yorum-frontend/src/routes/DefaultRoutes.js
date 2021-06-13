import { react } from '@babel/types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Posts from '../pages/Posts'
import Comments from '../pages/Comments'
import React,{lazy} from 'react';


function DefaultRoutes() {
    return (
      <Router>            
            <Route exact path="/" component={Posts} />  
            <Route  path={`/posts/:id/comments`} component={Comments} /> 
      </Router>
    );
  }
  
  export default DefaultRoutes;
  