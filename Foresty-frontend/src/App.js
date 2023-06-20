import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import { ChakraProvider } from '@chakra-ui/react'
import Articles from './containers/Articles';
import Rewards from './containers/Rewards';
import Plant from './containers/Plant';
import Water from './containers/Water';
import NotFound from './containers/NotFound';
import Contact from './containers/Contact';
import Profile from './containers/Profile';
import HeaderFooter from './components/HeaderFooter/HeaderFooter';
import TreeDetails from './containers/TreeDetails';
import { GoogleOAuthProvider } from '@react-oauth/google'
import Feedback from './containers/Feedback';

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear());
  }, [])
  return (
    <ChakraProvider>
      <Routes>
        <Route element={<HeaderFooter />} >
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/water" element={<Water />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/userprofile/:id" element={<Profile />} />
          <Route path="/tree/:id" element={<TreeDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App