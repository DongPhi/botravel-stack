import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/App';
import Admin from './components/Admin/App';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/admin" exact component={Admin} />
      </div>
    </Router>
    
  );
}

export default App;
