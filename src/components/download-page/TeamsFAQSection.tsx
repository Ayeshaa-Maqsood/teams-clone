import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "01",
    question: "What is happening to the classic Teams app?",
  },
  {
    id: "02",
    question: "How can I switch to the new Teams app?",
  },
  {
    id: "03",
    question: "What are the benefits of the new Teams app?",
  },
  {
    id: "04",
    question: "Do I need to install the Teams app to be able to use Teams?",
  },
];

const footnotes = [
  {
    id: 1,
    text: "AI-generated meeting notes are currently available in Microsoft Teams Premium only.",
  },
  {
    id: 2,
    text: "Cancellation policies for paid subscriptions may vary based on factors such as your customer status, your product, and your domain selections on Microsoft. You may cancel your subscription at any time in the Microsoft 365 admin center. Certain subscriptions, such as cancellation-free Learn how to cancel your Microsoft 365 subscription. When a subscription is canceled, all associated data will be deleted. Learn more about data retention, deletion, and destruction in Microsoft 365.",
  },
  {
    id: 3,
    text: "Microsoft 365 Copilot may not be available for all markets and languages To purchase, customers must have a qualifying plan for enterprise or business.",
  },
  {
    id: 4,
    text: "AI usage limits apply. AI features only available to subscription owner and cannot be shared. Learn more",
  },
  {
    id: 5,
    text: "Copilot in Excel requires AutoSave to be enabled, meaning the file must be saved to OneDrive (it doesn't function with unsaved files.",
  },
  {
    id: 6,
    text: "Copilot features in Outlook apply to accounts with @outlook.com, @hotmail.com, @live.com or @msn.com email addresses and are available in Outlook.com, Outlook built into Windows, Outlook on Mac and iOS and Android apps.",
  },
  {
    id: 7,
    text: "Identity theft monitoring is only available in the United States and US territories.",
  },
  {
    id: 8,
    text: "After your one-month free trial, you will be charged the applicable subscription fee. A credit card is required to sign up. Cancel anytime to stop future charges.",
  },
];

export default function TeamsFAQSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [showAllFootnotes, setShowAllFootnotes] = useState(false);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const displayedFootnotes = showAllFootnotes
    ? footnotes
    : footnotes.slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Expand all
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Collapse all
          </button>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-gray-200">
            <button
              onClick={() => toggleExpanded(item.id)}
              className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <span className="text-blue-600 font-medium text-sm">
                  {item.id}/
                </span>
                <span className="text-gray-900 font-medium">
                  {item.question}
                </span>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  {expandedItems.has(item.id) ? (
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
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </button>
            {expandedItems.has(item.id) && (
              <div className="pb-4 pl-8 pr-12">
                <p className="text-gray-600">
                  This would contain the answer content for "{item.question}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footnotes Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="space-y-4">
          {displayedFootnotes.map((footnote) => (
            <div key={footnote.id} className="flex gap-2 text-sm">
              <span className="text-blue-600 font-medium flex-shrink-0">
                [{footnote.id}]
              </span>
              <p className="text-gray-600 leading-relaxed">
                {footnote.text.includes("Learn how to cancel") ? (
                  <>
                    {footnote.text.split("Learn how to cancel")[0]}
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Learn how to cancel your Microsoft 365 subscription
                    </a>
                    {
                      footnote.text
                        .split(
                          "Learn how to cancel your Microsoft 365 subscription"
                        )[1]
                        ?.split("Learn more about")[0]
                    }
                    {footnote.text.includes("Learn more about") && (
                      <>
                        <a
                          href="#"
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Learn more about data retention, deletion, and
                          destruction in Microsoft 365
                        </a>
                        .
                      </>
                    )}
                  </>
                ) : footnote.text.includes("Learn more") ? (
                  <>
                    {footnote.text.split("Learn more")[0]}
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Learn more
                    </a>
                  </>
                ) : footnote.text.includes("enterprise or business") ? (
                  <>
                    {footnote.text.split("enterprise or business")[0]}
                    <a
                      href="#"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      enterprise or business
                    </a>
                    .
                  </>
                ) : (
                  footnote.text
                )}
              </p>
            </div>
          ))}
        </div>

        {!showAllFootnotes && footnotes.length > 4 && (
          <button
            onClick={() => setShowAllFootnotes(true)}
            className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Show all footnotes
          </button>
        )}
      </div>
    </div>
  );
}
