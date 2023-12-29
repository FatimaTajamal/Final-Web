// NavigationForm.js
import React from 'react';
import { Link } from 'react-router-dom';

const Linking= () => {
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <Link to="/details/:category">Details</Link>
    </div>
  );
};

export default Linking;
