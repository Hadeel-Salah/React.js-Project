import React from 'react';
import Header from './components/layout/header/header.jsx';
import './App.css';
import Footer from './components/layout/footer/footer.jsx';
import Home from './components/subComponents/Home/Home'
function App() {
  return (
    <>
        <Header />
          <Home />
        <Footer />
    </>
  );
}

export default App;
