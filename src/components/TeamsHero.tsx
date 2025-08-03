import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import microsoftLogo from "../images/microsoft logo.png";

const TeamsHero = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Microsoft Logo */}
              <div className="flex items-center space-x-4">
                <img src={microsoftLogo} alt="Microsoft Logo" className="h-6" />
                {/* Bold vertical line separator */}
                <div className="w-0.5 h-6 bg-gray-800"></div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-700 font-bold text-lg">Teams</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Products</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Features</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <span className="text-gray-600">Pricing</span>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Solutions</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-600">Resources</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <span className="text-gray-600">Support</span>
              </nav>
            </div>

            {/* Right side - Buttons */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Download Teams
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      {showBanner && (
        <div className="bg-purple-200 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex-1 text-center">
                <p className="text-gray-800">
                  Expand your skills and shape the future at Microsoft Ignite,
                  November 18-21, 2025.{" "}
                  <a href="#" className="underline font-medium">
                    Register now
                  </a>
                </p>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get ready for the future of work with Microsoft Teams
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform the way you work with next-generation AI capabilities
                and bring together your physical and digital worlds.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="text-white px-8 py-4 rounded-md font-medium text-lg transition-colors"
                style={{ backgroundColor: "#5D5BD4" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#4A47B8")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#5D5BD4")
                }
              >
                Download now
              </button>
            </div>
          </div>

          {/* Right Content - Teams Interface Mockup */}
          <div className="relative">
            {/* Main Teams Interface Container */}
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              {/* Teams Meeting Grid */}
              <div className="p-4 bg-gray-900">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {/* Video Participants */}
                  {[1, 2, 3, 4, 5, 6].map((participant) => (
                    <div
                      key={participant}
                      className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        Person {participant}
                      </div>
                      {/* Placeholder for person image */}
                      <div className="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"></div>
                    </div>
                  ))}
                </div>

                {/* Teams Control Bar */}
                <div className="flex justify-center items-center space-x-4 py-3 bg-gray-800 rounded-lg">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white"></div>
                  </div>
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white"></div>
                  </div>
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* Chat/Sidebar Panel */}
              <div className="bg-white p-4 border-t">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-100 rounded-lg p-2">
                      <div className="text-xs text-gray-600">
                        Copilot suggestions...
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="bg-gray-50 p-2 rounded">
                      What can I help you with?
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      Check the facts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Emojis */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-xl animate-bounce">
              😊
            </div>
            <div className="absolute top-12 -right-8 w-10 h-10 bg-red-400 rounded-full flex items-center justify-center text-lg animate-pulse">
              ❤️
            </div>
            <div className="absolute -bottom-8 left-8 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center text-xl animate-bounce delay-100">
              😂
            </div>
            <div className="absolute bottom-20 -left-8 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold animate-pulse delay-200">
              +
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamsHero;
