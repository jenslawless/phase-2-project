import '../App.css';
import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
import NewOpportunityForm from './NewOpportunityForm';
import Layout from './Layout';

function App() {
  const [volCards, setVolCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/nonprofits")
      .then((r) => r.json())
      .then((data) => setVolCards(data))
  }, [])

  function handleAddOpp(newOpp) {
    setVolCards([...volCards, newOpp])
  }

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='/navbar' element={<NavBar />} />
            <Route path='/homepage' element={<HomePage volCards={volCards} />} />
            <Route path='/newopportunityform' element={<NewOpportunityForm onSubmit={handleAddOpp} />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
