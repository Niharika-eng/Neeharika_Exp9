// App.js
import React from 'react';
import './App.css';
import Blog from './components/Blog';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
      </header>
      <div className="content">
        <NewPost />
        <Blog />
      </div>
    </div>
  );
}

export default App;
