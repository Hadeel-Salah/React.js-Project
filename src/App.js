import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/layout/header/header.jsx';
import './App.css';
import Footer from './components/layout/footer/footer.jsx';
import Home from './components/subComponents/Home/Home'
import Details from './components/subComponents/BooksDetails/details.jsx';
function App() {
  return (
      <>
        <Router>
          <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path ="/book/:id"  component={Details} />
                </Switch> 
            <Footer/>
          </Router>  
      </>
  );
}

export default App;
