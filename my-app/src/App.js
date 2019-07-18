import React from 'react';
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import './App.css';
import HomePage from "./componant/HomePage"
function App() {
  return (
    <div>
       <Router>
       <Route path="/" component={HomePage} />
       </Router>
     
      
    </div>
  );
}

export default App;
