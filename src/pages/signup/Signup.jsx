import './Signup.css';

import React, { useState } from 'react'

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
  }
  
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if(!selected){
      setThumbnailError('Please select a file');
      return;
    }

    if(!selected.type.includes('image')){
      setThumbnailError('Please file must be an image');
      return;
    }

    if(selected.size > 1000000){
      setThumbnailError('Please file must be less than 1mb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log('thumbnail Update');
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit} autoComplete='off'>
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
        <input id='profile' type="file" required onChange={handleFileChange} />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      <button className="btn">Sign Up</button>
    </form>
  )
}
