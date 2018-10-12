import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = props => {
  return (
    <div className="navbar">
      <img src={props.image} alt="profile" />
      <p>{props.username}</p>

      <Link to="/dashboard">
        <button>Home</button>
      </Link>

      <Link to="/new">
        <button>New Post</button>
      </Link>

      <Link to="/">
        <button className="logout-btn">Logout</button>
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state.username,
    image: state.image
  };
}

export default connect(mapStateToProps)(Nav);