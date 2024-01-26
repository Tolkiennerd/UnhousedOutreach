import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HousingInsecureNeighbors from './pages/housing-insecure-neighbors';
import { LookupsContextType } from './features/lookups';
import OutreachMap from './pages/outreach-map';
import axios from 'axios';

export const LookupsContext = React.createContext<LookupsContextType | null>(null);

function App() {
  // DEFINE LOOKUPS.
  const [cushionConditionLookup, setCushionConditionLookup] = useState({});
  const [cushionTypeLookup, setCushionTypeLookup] = useState({});
  const [disabilityLookup, setDisabilityLookup] = useState({});
  const [ethnicityLookup, setEthnicityLookup] = useState({});
  const [genderLookup, setGenderLookup] = useState({});
  const [housingStatusLookup, setHousingStatusLookup] = useState({});
  const [locationTypeLookup, setLocationTypeLookup] = useState({});
  const [pantsSizeLookup, setPantsSizeLookup] = useState({});
  const [requestLookup, setRequestLookup] = useState({});
  const [shirtSizeLookup, setShirtSizeLookup] = useState({});
  const [shoeSizeLookup, setShoeSizeLookup] = useState({});
  const [sleepingBagConditionLookup, setSleepingBagConditionLookup] = useState({});
  const [tentConditionLookup, setTentConditionLookup] = useState({});
  const [tentUsageLookup, setTentUsageLookup] = useState({});
  const lookupsContext: LookupsContextType = {
    cushionCondition: {lookup: cushionConditionLookup, setLookup: setCushionConditionLookup},
    cushionType: {lookup: cushionTypeLookup, setLookup: setCushionTypeLookup},
    disability: {lookup: disabilityLookup, setLookup: setDisabilityLookup},
    ethnicity: {lookup: ethnicityLookup, setLookup: setEthnicityLookup},
    gender: {lookup: genderLookup, setLookup: setGenderLookup},
    housingStatus: {lookup: housingStatusLookup, setLookup: setHousingStatusLookup},
    locationType: {lookup: locationTypeLookup, setLookup: setLocationTypeLookup},
    pantsSize: {lookup: pantsSizeLookup, setLookup: setPantsSizeLookup},
    request: {lookup: requestLookup, setLookup: setRequestLookup},
    shirtSize: {lookup: shirtSizeLookup, setLookup: setShirtSizeLookup},
    shoeSize: {lookup: shoeSizeLookup, setLookup: setShoeSizeLookup},
    sleepingBagCondition: {lookup: sleepingBagConditionLookup, setLookup: setSleepingBagConditionLookup},
    tentCondition: {lookup: tentConditionLookup, setLookup: setTentConditionLookup},
    tentUsage: {lookup: tentUsageLookup, setLookup: setTentUsageLookup},
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/lookups/genders`)
      .then(response => setGenderLookup(response.data))
      .catch(error => console.log(error));
  }, []);

  // GET ROUTES.
  return (
    <BrowserRouter>
    <LookupsContext.Provider value={lookupsContext}>
      <Routes>
          <Route path="/" element={<HousingInsecureNeighbors/>} />
          <Route path="/map" element={<OutreachMap/>} />
      </Routes>
      </LookupsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
