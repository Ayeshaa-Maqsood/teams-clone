import { useState } from "react";

// Import your actual images and logos
import goNarrativeLogo from "../images/Customer_Stories_Logo_GoNarrative.avif";
import abnAmroLogo from "../images/Customer_Stories_Logo_ABN-AMRO.avif";
import berryessaGapLogo from "../images/group-chat-software-customer-stories-logo.avif";
import lorealLogo from "../images/Customer_Stories_Logo_LOreeal.png";
import teamsIcon from "../images/Icon-Teams.svg";
import goNarrativeImage from "../images/Customer_Stories_GoNarrative.avif";
import abnAmroImage from "../images/Customer_Stories_ABN-AMRO.avif";
import berryessaGapImage from "../images/group-chat-software-customer-stories.avif";
import lorealImage from "../images/Customer_Stories_LOreal.avif";

const CustomerStoriesSection = () => {
  const [activeStory, setActiveStory] = useState("gonarrative");

  const stories = {
    gonarrative: {
      id: "gonarrative",
      companyLogo: goNarrativeLogo,
      companyName: "GoNarrative",
      quote:
        "Without a doubt, the fluid collaboration that Teams enables has a positive impact on our ability to be responsive and focus on the work to be done",
      author: "Matthew Woodget, CEO of Go Narrative",
      image: goNarrativeImage,
      product: "Teams",
    },
    abnamro: {
      id: "abnamro",
      companyLogo: abnAmroLogo,
      companyName: "ABN AMRO",
      quote:
        "Teams has transformed how we collaborate across our global offices, enabling seamless communication and enhanced productivity for our banking operations",
      author: "Sarah Johnson, Digital Transformation Lead at ABN AMRO",
      image: abnAmroImage,
      product: "Teams",
    },
    berryessagap: {
      id: "berryessagap",
      companyLogo: berryessaGapLogo,
      companyName: "Berryessa Gap",
      quote:
        "Microsoft Teams has revolutionized our remote work capabilities, allowing our distributed team to stay connected and maintain high levels of collaboration",
      author: "Michael Chen, Operations Director at Berryessa Gap",
      image: berryessaGapImage,
      product: "Teams",
    },
    loreal: {
      id: "loreal",
      companyLogo: lorealLogo,
      companyName: "L'ORÉAL",
      quote:
        "The integration of Teams into our daily workflows has significantly improved our global beauty team's efficiency and creative collaboration processes",
      author: "Emma Rodriguez, Digital Innovation Manager at L'ORÉAL",
      image: lorealImage,
      product: "Teams",
    },
  };

  const currentStory = stories[activeStory];

  return (
    <div className="py-16 px-8 bg-gray-50" id="customer-stories-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            CUSTOMER STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">
            See how customers are innovating with Teams
          </h2>
        </div>

        {/* Main Story Card */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Company Logo */}
              <div className="w-48 h-16 flex items-center justify-start">
                <img
                  src={currentStory.companyLogo}
                  alt={`${currentStory.companyName} logo`}
                  className="h-full object-contain"
                />
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed font-light">
                "{currentStory.quote}"
              </blockquote>

              {/* Author */}
              <p className="text-black font-medium">{currentStory.author}</p>

              {/* Products Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Products
                </h3>
                <div className="flex items-center space-x-3">
                  <img src={teamsIcon} alt="Teams icon" className="w-8 h-8" />
                  <span className="text-gray-700 font-medium">Teams</span>
                </div>
              </div>

              {/* Read Story Button */}
              <button
                className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300"
                style={{
                  backgroundColor: "#5D5BD4",
                  ":hover": { backgroundColor: "#4C4AB8" },
                }}
              >
                Read the story
              </button>
            </div>

            {/* Right Image */}
            <div className="lg:pl-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={currentStory.image}
                  alt={`${currentStory.companyName} story`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Selection Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-4xl mx-auto">
          {Object.values(stories).map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(story.id)}
              className={`
                relative p-8 bg-white border-l border-r border-gray-200 hover:bg-gray-50 transition-colors duration-300
                ${index === 0 ? "rounded-l-lg border-l" : ""}
                ${
                  index === Object.values(stories).length - 1
                    ? "rounded-r-lg border-r"
                    : ""
                }
                ${activeStory === story.id ? "bg-blue-50 border-blue-200" : ""}
              `}
            >
              {/* Active indicator */}
              {activeStory === story.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600"></div>
              )}

              {/* Company Logo */}
              <div className="h-12 flex items-center justify-center">
                <img
                  src={story.companyLogo}
                  alt={`${story.companyName} logo`}
                  className="h-full object-contain max-w-full"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerStoriesSection;
