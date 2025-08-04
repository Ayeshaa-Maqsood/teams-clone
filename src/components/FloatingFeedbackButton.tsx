import { useState } from "react";

const FloatingFeedbackButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedbackType, setSelectedFeedbackType] = useState("");

  const feedbackOptions = [
    {
      id: "compliment",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
      text: "Give a compliment",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "problem",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      ),
      text: "Report a problem",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "suggestion",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      text: "Make a suggestion",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  const handleSubmit = () => {
    if (selectedFeedbackType) {
      console.log("Feedback submitted:", selectedFeedbackType);
      setIsModalOpen(false);
      setSelectedFeedbackType("");
      // Here you would typically send the feedback to your backend
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedFeedbackType("");
  };

  return (
    <>
      {/* Floating Feedback Button - Responsive */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 group px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="font-medium hidden sm:inline">Feedback</span>
      </button>

      {/* Modal Overlay - Responsive */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Modal Content - Responsive sizing */}
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg transform transition-all duration-300 scale-100 mx-2 sm:mx-0 max-h-screen sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header - Responsive padding and text */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 pr-2">
                Submit feedback to Microsoft
              </h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body - Responsive padding */}
            <div className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                  Classify your feedback
                </h3>

                <div className="space-y-2 sm:space-y-3">
                  {feedbackOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedFeedbackType(option.id)}
                      className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 text-sm sm:text-base ${
                        selectedFeedbackType === option.id
                          ? "bg-blue-600 ring-2 ring-blue-300"
                          : option.bgColor
                      }`}
                    >
                      <span className="flex-shrink-0">{option.icon}</span>
                      <span className="text-left">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Notice - Responsive text size */}
              <div className="text-xs text-gray-500 mb-4 sm:mb-6 leading-relaxed">
                Learn more about how this data is used and your rights. By
                pressing Submit, your feedback will be used to improve Microsoft
                products and services.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy statement
                </a>
              </div>

              {/* Action Buttons - Responsive layout */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={!selectedFeedbackType}
                  className={`w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
                    selectedFeedbackType
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
                <button
                  onClick={handleCancel}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingFeedbackButton;
