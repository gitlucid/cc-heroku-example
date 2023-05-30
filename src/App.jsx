import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar, Footer } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, ResultsPage, OwnerDetails, Owner } from './pages';

const App = () => {

  return (
    <>
      <div className={`max-w-6xl mx-auto`}>
        <div className="min-h-content py-[3em] sm:py-6 flex flex-row">
          <div className="sm:flex hidden mr-10 relative">
            <Sidebar />
          </div>
          <div className="flex-1 w-full md:max-w-[1280px] overflow-hidden mx-auto sm:pr-5">
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create-campaign" element={<CreateCampaign />} />
                <Route path="/campaign-details/:title" element={<CampaignDetails />} />
                <Route path="/owner/:owner" element={<Owner />} />
              </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App