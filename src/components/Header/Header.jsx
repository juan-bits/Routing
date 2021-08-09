import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <ul className="nav">
        <li><Link to="/">Root</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/post">Post</Link></li>

      </ul>
      <hr />
    </div>
  )
}
