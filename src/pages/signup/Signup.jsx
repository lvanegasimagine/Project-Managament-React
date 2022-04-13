import './Signup.css';

import React, { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  return (
    <form className='auth-form'>
      <h2>Sign Up</h2>
      <label htmlFor="email">
        <span>Email:</span>
        <input id='email' type="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>
      <label htmlFor="password">
        <span>Password:</span>
        <input id='password' type="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>
      <label htmlFor="displayName">
        <span>Display Name:</span>
        <input id='displayName' type="text" required onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
      </label>
      <label htmlFor="profile">
        <span>Profile Thumbnail: </span>
        <input id='profile' type="file" required />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  )
}
