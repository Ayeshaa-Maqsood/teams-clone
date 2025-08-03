import React from "react";
import DownloadHero from "./DownloadHero";
import CommunicationsSection from "./CommunicationsSection";
import TeamsMobileAppSection from "./TeamsMobileAppSection";
import MicrosoftTeamsFooter from "../MicrosoftTeamsFooter";
import TeamsPricingSection from "./TeamsPricingSection";
import TeamsFAQSection from "./TeamsFAQSection";
// import Footer from '../Footer';

const Download: React.FC = () => {
  return (
    <div>
      <DownloadHero />
      <CommunicationsSection />
      <TeamsMobileAppSection />
      <TeamsPricingSection />
      <TeamsFAQSection />
      <MicrosoftTeamsFooter />
    </div>
  );
};

export default Download;
