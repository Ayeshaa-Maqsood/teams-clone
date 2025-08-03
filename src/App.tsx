import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedNewsSection from "./components/FeaturedNewsSection";
import TeamsHero from "./components/TeamsHero";
import SolutionsSection from "./components/SolutionsSection";
import TeamsPlansSection from "./components/TeamsPlansSection";
import CustomerStoriesSection from "./components/CustomerStoriesSection";
import TeamsLandingSection from "./components/TeamsLandingSection";
import MicrosoftTeamsFooter from "./components/MicrosoftTeamsFooter";
import FloatingFeedbackButton from "./components/FloatingFeedbackButton";
import StickyNavigation from "./components/StickyNavigation";
import Download from "./components/download-page/Download";

// Home component (your current home page)
const Home: React.FC = () => {
  return (
    <div>
      {/* Hero section without sticky nav */}
      <TeamsHero />

      {/* Sticky Navigation - positioned here so it starts from FeaturedNewsSection */}
      <StickyNavigation />

      {/* All sections that should have the sticky nav visible */}
      <FeaturedNewsSection />
      <SolutionsSection />
      <TeamsPlansSection />
      <CustomerStoriesSection />
      <TeamsLandingSection />

      {/* Footer and floating button */}
      <MicrosoftTeamsFooter />
      <FloatingFeedbackButton />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App;
