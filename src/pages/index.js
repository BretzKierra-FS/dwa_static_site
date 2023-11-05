import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';

function HomePage() {
  return (
    <div>
      <Header />
      <Blog />
    </div>
  );
}

export default HomePage;
