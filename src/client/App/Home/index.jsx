import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <span>Starter First kit!</span>
      <Link to="/about">Go To About Page</Link>
    </div>
  );
}

export default Home;
