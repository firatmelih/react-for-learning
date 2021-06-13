import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const INITIAL_COMMENT = {
  display_name: "",
  body: ""
}

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const [newComment, setNewComment] = useState(INITIAL_COMMENT)
  const handleCommentSubmit = (com) => {
    axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${page_id}`, com)
      .then(res => {
        setComments([...comments, res.data]);
        setNewComment(INITIAL_COMMENT);
      }).catch(err => console.log(err))
  }
  const handleOnChange = (event) => {
    setNewComment({ ...newComment, [event.target.name]: event.target.value });

  };

  const page_id = window.location.toString().substr(28, 31);
  let newDate = new Date(post.created_at);
  var theMonths = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
  console.log()
  useEffect(() => {
    axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${page_id}`)
      .then(res => setComments(res.data))
      .catch(err => console.log(err));

    axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${page_id.substr(0, 3)}`)
      .then(res => setPost(res.data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <Link to="/"><i className="arrow left middle aligned icon"> </i></Link>
      <div className="ui relaxed divided list">
        {
          <div>
            <h1 class="ui header"> {post.title}</h1>

            <Router>
              <Route path={`/post/${post.id}/comments`} component={Comments} />
            </Router>

            <div className="description">{post.content}
              <span style={{ float: 'right' }}>{`${newDate.getDate()} ${theMonths[newDate.getMonth()]} ${newDate.getFullYear()}`}</span>      </div>
            <hr />

          </div>


        }
      </div>

      <div className="ui relaxed divided list">

        {comments.map(comment => {
          let newDate = new Date(comment.created_at);
          var theMonths = ["January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October", "November", "December"];
          return (
            <div className="item">
              <i className="large github middle aligned icon"></i>
              <div className="content">
                <a className="header">{comment.display_name}</a>
                <div className="description">{comment.body}</div>
                <p>{`${newDate.getDate()} ${theMonths[newDate.getMonth()]} ${newDate.getFullYear()}`}</p>
              </div>
            </div>
          )
        })}

      </div>
      <hr></hr>
      <form class="ui form" onSubmit={(e) => {
        e.preventDefault();
        handleCommentSubmit(newComment)
      }}>

        <div class="fields">
          <div class="field">
            <label>Kullanıcı Adı</label>
            <input onChange={handleOnChange} value={newComment.display_name} name="display_name" type="text" placeholder="Kullanıcı Adı" />
          </div>

        </div>
        <div class="field">

          <label>Yorum Yaz</label>
          <textarea onChange={handleOnChange} name="body" type="text" value={newComment.body}></textarea>
        </div>
        <button style={{ float: 'right' }} class="ui inverted green button">Gönder</button>

      </form>
      <br />

    </div>

  )
}

export default Comments;