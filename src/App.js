import React from 'react';
import { Routes, Route,} from 'react-router-dom';
import './App.css';
import Rating from './pages/Rating';
import ThankYou from './pages/ThankYou';


function App() {


  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Rating/>} />
          <Route path="/thankyou/:id" exact element={<ThankYou />} />
       </Routes>
    </div>
  );
}

export default App;
