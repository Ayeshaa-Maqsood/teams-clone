import { ChevronRight } from "lucide-react";
import FeatureImage1 from "../images/1-feature-image.avif";
import FeatureImage2 from "../images/2-feature-image.avif";
import FeatureImage3 from "../images/3-feature-image.avif";

const FeaturedNewsSection = () => {
  const newsCards = [
    {
      id: 1,
      title:
        "From Threads to Workflows: Microsoft Teams Features That Boost Everyone's Productivity",
      description:
        "Organizations want to work faster and smarter. Guided by customer feedback, Microsoft Teams is adding new features like threads, multiple emoji reactions, and emoji-triggered workflows.",
      image: FeatureImage1,
      buttonText: "Learn more",
      category: "productivity",
    },
    {
      id: 2,
      title: "2025: The Year the Frontier Firm Is Born",
      description:
        "Get the latest research and insights from the 2025 Work Trend Index Annual Report.",
      image: FeatureImage2,
      buttonText: "Read the report",
      category: "research",
    },
    {
      id: 3,
      title: "Prompt like a pro with Microsoft 365 Copilot in Teams",
      description:
        "Realize the full potential of your team's decision-making with prompts for Copilot in Teams. Streamline and transform your meetings so that every idea is visualized, evaluated, and brought to life.",
      image: FeatureImage3,
      buttonText: "Learn more",
      category: "ai",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen" id="featured-news-section">
      {/* Content Section - No sticky nav here anymore */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            FEATURED NEWS
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Discover what's happening with Teams
          </h2>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Card Image - At the top with rounded edges and wider aspect ratio */}
              <div className="p-6 pb-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 pt-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base flex-1">
                  {card.description}
                </p>

                {/* CTA Button - Updated with your custom color */}
                <button
                  className="inline-flex items-center space-x-3 font-semibold text-base transition-all duration-200 group self-start hover:text-purple-700"
                  style={{ color: "#5D5BD4" }}
                >
                  <div
                    className="rounded-lg p-2 transition-colors"
                    style={{ backgroundColor: "#5D5BD4" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.backgroundColor =
                        "#4A47B8")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.backgroundColor =
                        "#5D5BD4")
                    }
                  >
                    <ChevronRight
                      size={16}
                      className="text-white group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                  <span>{card.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsSection;
