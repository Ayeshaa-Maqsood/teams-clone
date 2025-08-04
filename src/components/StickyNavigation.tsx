import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const StickyNavigation = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabsRef = useRef({});

  const tabs = [
    { id: "featured", label: "Featured news", active: true },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products and services" },
    { id: "stories", label: "Customer stories" },
    { id: "started", label: "Get started" },
  ];

  // Update underline position when active tab changes
  useEffect(() => {
    const updateUnderline = () => {
      const activeButton = tabsRef.current[activeTab];
      if (activeButton) {
        const containerRect =
          activeButton.parentElement.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        const left = buttonRect.left - containerRect.left;
        const width = buttonRect.width;

        setUnderlineStyle({
          left: `${left}px`,
          width: `${width}px`,
        });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeTab]);

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "featured", element: "featured-news-section" },
        { id: "solutions", element: "solutions-section" },
        { id: "products", element: "teams-plans-section" },
        { id: "stories", element: "customer-stories-section" },
        { id: "started", element: "teams-landing-section" },
      ];

      const navHeight = 100;
      const scrollPosition = window.scrollY + navHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].element);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveTab(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);

    // Map tab IDs to actual section IDs in your components
    const sectionMap = {
      featured: "featured-news-section",
      solutions: "solutions-section",
      products: "teams-plans-section",
      stories: "customer-stories-section",
      started: "teams-landing-section",
    };

    const targetSection = document.getElementById(sectionMap[sectionId]);
    if (targetSection) {
      // Get the height of the sticky navigation
      const navHeight = 80;

      // For the featured section, we need to scroll to where the sticky nav starts
      // which is at the top of the featured section
      if (sectionId === "featured") {
        const targetPosition = targetSection.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        // For other sections, scroll to the section content but account for sticky nav
        const targetPosition = targetSection.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Calculate underline position for desktop - now handled by useEffect above

  return (
    <div
      className="sticky top-0 bg-white shadow-sm z-50 border-b"
      data-sticky-nav="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center relative">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabsRef.current[tab.id] = el)}
                onClick={() => scrollToSection(tab.id)}
                className={`text-sm font-medium pb-2 px-4 relative transition-colors ${
                  activeTab === tab.id
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Animated underline */}
            <div
              className="absolute bottom-0 h-0.5 bg-purple-600 transition-all duration-300 ease-in-out"
              style={underlineStyle}
            />
          </div>

          {/* Mobile Navigation Dropdown */}
          <div className="lg:hidden relative flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-between w-full text-left px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
            >
              <span>{tabs.find((tab) => tab.id === activeTab)?.label}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      scrollToSection(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${
                      activeTab === tab.id
                        ? "text-purple-600 font-medium bg-purple-50"
                        : "text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Side Button */}
          <button
            className="text-white px-6 py-2 rounded-md font-medium transition-colors ml-4"
            style={{ backgroundColor: "#5D5BD4" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#4A47B8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#5D5BD4")
            }
          >
            See plans and pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavigation;
