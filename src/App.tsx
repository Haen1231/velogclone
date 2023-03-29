import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { DropdownPage } from './pages/DropdownPage';
import { HomePage } from './pages/HomePage';
import { ModalPage } from './pages/ModalPage';
import { PostPage } from './pages/PostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recent" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
