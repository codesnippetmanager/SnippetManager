import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import CodeContainer from './CodeContainer';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Snippet Manager</h1>
      <Header />
      <div id="main">
        <Sidebar />
        <CodeContainer />
      </div>
    </div>
  );
}

export default Homepage;
