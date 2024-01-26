import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HousingInsecureNeighbors from './pages/housing-insecure-neighbors';
import { Lookups } from './features/lookups';
import OutreachMap from './pages/outreach-map';
import axios from 'axios';

export const LookupsContext = React.createContext<Lookups | null>(null);

function App() {
  // DEFINE LOOKUPS.
  const [lookups, setLookups] = useState({} as Lookups);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/lookups/all`)
      .then(response => setLookups(response.data))
      .catch(error => console.log(error));
  }, []);

  // GET ROUTES.
  return (
    <BrowserRouter>
    <LookupsContext.Provider value={lookups}>
      <Routes>
          <Route path="/" element={<HousingInsecureNeighbors/>} />
          <Route path="/map" element={<OutreachMap/>} />
      </Routes>
      </LookupsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
