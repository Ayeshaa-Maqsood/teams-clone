import { useState } from "react";

const StickyNavigation = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { id: "featured", label: "Featured news", active: true },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products and services" },
    { id: "stories", label: "Customer stories" },
    { id: "started", label: "Get started" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);

    // Map tab IDs to actual section IDs in your components
    const sectionMap: { [key: string]: string } = {
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

  return (
    <div
      className="sticky top-0 bg-white shadow-sm z-50 border-b"
      data-sticky-nav="true"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Navigation Tabs */}
          <div className="flex items-center space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-purple-600"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
                style={{
                  color: activeTab === tab.id ? "#5D5BD4" : undefined,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Side Button */}
          <button
            className="text-white px-6 py-2 rounded-md font-medium transition-colors"
            style={{ backgroundColor: "#5D5BD4" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#4A47B8")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#5D5BD4")
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
