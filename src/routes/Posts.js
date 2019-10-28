import React from "react";
import { Route, Link } from "react-router-dom";

const Post = ({ match }) => {
  return <h2>{match.params.title}</h2>;
};

const Posts = ({ history }) => {
  const handleClick = () => {
    console.log(history.location.pathname);
  };

  const handleKeyPress = e => {
    if (e.charCode === 13) handleClick();
  };

  return (
    <div>
      <input onKeyPress={handleKeyPress}></input>
      <button onClick={handleClick}>버튼</button>

      <h1>포스트</h1>
      <Link to="/posts/react">React</Link>
      <Link to="/posts/redux">Redux</Link>
      <Link to="/posts/relay">Relay</Link>
      <Route path="/posts/:title" component={Post} />
    </div>
  );
};

export default Posts;
