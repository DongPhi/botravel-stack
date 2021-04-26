import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from '../../GlobalState';
import Header from './headers/Header';

function index() {
    return (
      <DataProvider>
        <Router>
          <div className="App">
            <Header />
          </div>
        </Router>
      </DataProvider>
    );
  }
  
export default index;