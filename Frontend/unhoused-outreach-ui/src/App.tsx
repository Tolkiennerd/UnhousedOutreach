import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HousingInsecureNeighbors from './pages/housing-insecure-neighbors';
import { Lookups } from './features/lookups';
import OutreachMap from './pages/outreach-map';
import axios from 'axios';
import UnhousedOutreachNavbar from './features/navbar/navbar';
import Home from './pages/home';

export const LookupsContext = React.createContext<Lookups | null>(null);

function App() {
  // DEFINE LOOKUPS.
  const initialLookups: Lookups = {
    cushionCondition: {},
    cushionType: {},
    disability: {},
    englishLevel: {},
    ethnicity: {},
    gender: {},
    housingStatus: {},
    locationType: {},
    pantsSize: {},
    need: {},
    shirtSize: {},
    shoeSize: {},
    skill: {},
    sleepingBagCondition: {},
    tentCondition: {},
    tentUsage: {}
  };
  const [lookups, setLookups] = useState(initialLookups);
  useEffect(() => {
    // TODO: Get OTID from user data.
    axios.get(`${process.env.REACT_APP_API_URL}/lookups/all?otid=1`)
      .then(response => setLookups(response.data))
      .catch(error => console.log(error));
  }, []);

  // GET ROUTES.
  return (
      <BrowserRouter>
        <UnhousedOutreachNavbar/>
        <LookupsContext.Provider value={lookups}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/neighbors" element={<HousingInsecureNeighbors />} />
              <Route path="/map/:latitude/:longitude" element={<OutreachMap />} />
          </Routes>
        </LookupsContext.Provider>
      </BrowserRouter>
  );
}

export default App;
