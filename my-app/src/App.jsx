import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PostForm from './components/postform';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <h2>Welcome to My React App</h2>
        <p>This is a simple React project with a header, content area, and footer.</p>

        <PostForm /> {/* 💡 Add form here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;