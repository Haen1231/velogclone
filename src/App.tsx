import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DropdownPage } from './pages/DropdownPage';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recent" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
      </Routes>
    </Router>
  );
}

export default App;
