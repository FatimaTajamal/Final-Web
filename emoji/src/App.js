// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';
import Linking from './Routes/Link';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:category" element={<DetailsPage />} />
      </Routes>
      <Linking />
    </Router>
  );
};

export default App;