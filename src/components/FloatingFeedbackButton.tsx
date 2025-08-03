import { useState } from "react";
import {
  MessageCircle,
  ThumbsUp,
  AlertCircle,
  Lightbulb,
  X,
} from "lucide-react";

const FloatingFeedbackButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedbackType, setSelectedFeedbackType] = useState("");

  const feedbackOptions = [
    {
      id: "compliment",
      icon: <ThumbsUp className="w-5 h-5" />,
      text: "Give a compliment",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "problem",
      icon: <AlertCircle className="w-5 h-5" />,
      text: "Report a problem",
      bgColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "suggestion",
      icon: <Lightbulb className="w-5 h-5" />,
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
      {/* Floating Feedback Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2 group"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">Feedback</span>
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Submit feedback to Microsoft
              </h2>
              <button
                onClick={handleCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-4">
                  Classify your feedback
                </h3>

                <div className="space-y-3">
                  {feedbackOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedFeedbackType(option.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
                        selectedFeedbackType === option.id
                          ? "bg-blue-600 ring-2 ring-blue-300"
                          : option.bgColor
                      }`}
                    >
                      {option.icon}
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="text-xs text-gray-500 mb-6">
                Learn more about how this data is used and your rights. By
                pressing Submit, your feedback will be used to improve Microsoft
                products and services.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy statement
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={!selectedFeedbackType}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedFeedbackType
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 transition-colors"
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
