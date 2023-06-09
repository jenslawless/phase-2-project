import '../App.css';
import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
import NewOpportunityForm from './NewOpportunityForm';
import Layout from './Layout';
import IndiPage from './IndiPage';
import Organizations from './Organizations';

function App() {
  const [volCards, setVolCards] = useState([])
  const [orgs, setOrgs] = useState([])


  useEffect(() => {
    fetch("http://localhost:3001/nonprofits")
      .then((r) => r.json())
      .then((data) => setVolCards(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/organizations")
      .then((r) => r.json())
      .then((data) => setOrgs(data))
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
            <Route path={`/homepage/:oppId`} exact element={<IndiPage volCards={volCards} />} />
            <Route path='/organizations' element={<Organizations orgs={orgs} />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
