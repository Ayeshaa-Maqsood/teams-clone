import { useState } from "react";

// Import your actual icons
import teamsIcon from "../images/Icon-Teams.svg";
import microsoftIcon from "../images/Microsoft-Symbol.svg";

// Mock images for hero sections
const Card1 =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";
const Card2 =
  "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80";
const Card3 =
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80";
const Card4 =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

const TeamsPlansSection = () => {
  const [activeTab, setActiveTab] = useState<
    "Business" | "Home" | "Enterprise" | "Education"
  >("Business");

  const tabs = ["Business", "Home", "Enterprise", "Education"] as const;

  // Using mock images for hero sections
  const images: Record<
    "Business" | "Home" | "Enterprise" | "Education",
    string
  > = {
    Business: Card1,
    Home: Card2,
    Enterprise: Card3,
    Education: Card4,
  };

  const businessCards = [
    {
      id: 1,
      title: "Teams Essentials",
      description:
        "Connect with customers by video, chat, and phone using an affordable, all-in-one solution for up to 300 people.",
      logo: teamsIcon,
    },
    {
      id: 2,
      title: "Microsoft 365 Business Standard",
      description:
        "Choose between plans with and without Microsoft Teams and get desktop versions of Microsoft 365 apps and Clipchamp.",
      logo: microsoftIcon,
    },
    {
      id: 3,
      title: "Microsoft 365 Business Premium",
      description:
        "Get everything in Microsoft 365 Business Standard plus advanced security and device management.",
      logo: microsoftIcon,
    },
    {
      id: 4,
      title: "Teams Phone",
      description:
        "Add cloud-based phone service to Teams to get all the features of a landline.",
      logo: teamsIcon,
    },
    {
      id: 5,
      title: "Teams Rooms",
      description:
        "Strengthen hybrid work with enhanced meeting experiences for every space.",
      logo: teamsIcon,
    },
    {
      id: 6,
      title: "Teams Premium",
      description:
        "Get extra features that help make meetings more personalized, intelligent, and protected.",
      logo: teamsIcon,
    },
  ];

  const homeCards = [
    {
      id: 1,
      title: "Microsoft Teams for Home",
      description:
        "Stay connected with family and friends through video calls, chat, and file sharing.",
      logo: teamsIcon,
    },
    {
      id: 2,
      title: "Microsoft 365 Family",
      description:
        "Get premium Office apps, extra cloud storage, advanced security, and more—all in one convenient subscription.",
      logo: microsoftIcon,
    },
  ];

  const enterpriseCards = [
    {
      id: 1,
      title: "Microsoft 365 E3",
      description:
        "Best for businesses that need full productivity, collaboration, and security solutions.",
      logo: microsoftIcon,
    },
    {
      id: 2,
      title: "Microsoft 365 E5",
      description:
        "Get the most comprehensive set of productivity, security, compliance, and analytical capabilities.",
      logo: microsoftIcon,
    },
    {
      id: 3,
      title: "Teams Enterprise",
      description:
        "Advanced Teams capabilities for large organizations with enhanced security and compliance.",
      logo: teamsIcon,
    },
    {
      id: 4,
      title: "Teams Phone System",
      description:
        "Enterprise-grade cloud-based phone system with advanced calling features.",
      logo: teamsIcon,
    },
    {
      id: 5,
      title: "Teams Rooms Pro",
      description:
        "Premium meeting room experiences with advanced management and analytics.",
      logo: teamsIcon,
    },
    {
      id: 6,
      title: "Microsoft Viva Suite",
      description:
        "Employee experience platform that brings together communications, knowledge, learning, and insights.",
      logo: microsoftIcon,
    },
  ];

  const educationCards = [
    {
      id: 1,
      title: "Microsoft 365 Education",
      description:
        "Empower educators and students with tools for collaboration, creativity, and learning.",
      logo: microsoftIcon,
    },
    {
      id: 2,
      title: "Teams for Education",
      description:
        "Create collaborative classrooms, connect in professional learning communities, and communicate with school staff.",
      logo: teamsIcon,
    },
  ];

  const getCurrentCards = () => {
    switch (activeTab) {
      case "Home":
        return homeCards;
      case "Enterprise":
        return enterpriseCards;
      case "Education":
        return educationCards;
      default:
        return businessCards;
    }
  };

  const getHeroContent = () => {
    switch (activeTab) {
      case "Home":
        return {
          title: "Teams for families",
          description:
            "Keep your family connected with easy-to-use communication tools designed for home use.",
        };
      case "Enterprise":
        return {
          title: "Teams for enterprise",
          description:
            "Scale your organization with enterprise-grade collaboration and security features.",
        };
      case "Education":
        return {
          title: "Teams for education",
          description:
            "Transform learning with collaborative tools designed for students and educators.",
        };
      default:
        return {
          title: "Teams for small business",
          description:
            "Grow your customer base with communications software designed for up to 300 employees.",
        };
    }
  };

  const currentCards = getCurrentCards();
  const currentImage = images[activeTab];
  const heroContent = getHeroContent();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-white py-16 px-8"
      id="teams-plans-section"
    >
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          PRODUCTS AND SERVICES
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 text-left max-w-4xl leading-tight">
          Find the right Teams plan and add-ons for your needs
        </h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-start gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "text-white border border-transparent shadow-md"
                  : "border border-gray-200 hover:shadow-md"
              }`}
              style={{
                backgroundColor: activeTab === tab ? "#424197" : "#4241971A",
                color: activeTab === tab ? "white" : "#333275",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Hero Image Card - Full Width */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out">
          <div className="relative h-80 md:h-96">
            <img
              key={activeTab}
              src={currentImage}
              alt={`${activeTab} hero`}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transition-all duration-500 ease-in-out">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 transition-all duration-500 ease-in-out">
                  {heroContent.title}
                </h2>
                <p className="text-white/90 text-lg mb-6 leading-relaxed transition-all duration-500 ease-in-out">
                  {heroContent.description}
                </p>
                <button
                  className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#5D5BD4" }}
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
          {currentCards.map((card, index) => (
            <div
              key={`${activeTab}-${card.id}`}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="w-10 h-10 mb-6">
                  <img
                    src={card.logo}
                    alt={`${card.title} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 space-y-4 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <button className="inline-flex items-center font-medium transition-colors duration-300">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#5D5BD4" }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <span style={{ color: "#333275" }}>Learn more</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPlansSection;
