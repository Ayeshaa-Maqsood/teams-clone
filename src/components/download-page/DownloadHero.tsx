import { ChevronDown } from "lucide-react";
import microsoftLogo from "../../images/microsoft logo.png";
import backgroundImage from "../../images/hero-bg.avif"; // Import your background image here

const DownloadHero = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header - Same as TeamsHero but without Download Teams button */}
      <header className="bg-white shadow-sm relative z-20">
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

            {/* Right side - Only Sign in button (Download Teams removed) */}
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[80vh] py-12">
          {/* Left Content - Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal text-gray-900 leading-tight">
                Download Microsoft Teams for Windows
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg">
                Communicate and collaborate with anyone, anytime, with Teams.
              </p>
            </div>

            {/* Download button */}
            <div className="pt-2">
              <button
                className="text-white px-8 py-3 rounded-md font-medium text-base transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: "#6264A7" }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = "#5558A3";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = "#6264A7";
                }}
              >
                Download Microsoft Teams for Windows
              </button>
            </div>
          </div>

          {/* Right side - Empty space for background image */}
          <div className="hidden lg:block lg:w-1/2">
            {/* This space will be filled by your background image */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DownloadHero;
