import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../pages/Comments'

const Posts = () => 
{
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios.get('https://react-yazi-yorum.herokuapp.com/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    }, [])
console.log(posts)
    return(
      <div className="ui relaxed divided list">
        {posts.map(post => {
                 

            let newDate = new Date(post.created_at);
            var theMonths = ["January", "February", "March", "April", "May",
              "June", "July", "August", "September", "October", "November", "December"];
            return (
          
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">           
                    <Link className="header" to={`/posts/${post.id}/comments`} >
                    {post.title}                   
                    </Link>              
                    <Router>
                    <Route  path={`/posts/${post.id}/comments`} component={Comments} /> 
                    </Router>   
                    <div className="description">{post.content}</div>
                    <p>{`${newDate.getDate()} ${theMonths[newDate.getMonth()]} ${newDate.getFullYear()}`}</p>
                  </div>
                </div>
              
            )
          })}
         </div>
    )
}

export default Posts;