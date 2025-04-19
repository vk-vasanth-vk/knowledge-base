import React, { useState } from "react";
import TechnicalWritingArticle from "./demo-contents/GettingStarted";

interface ContentAreaProps {
  title: string;
  description: string;
  resources: string[];
}

const ContentArea = ({ title, description, resources }: ContentAreaProps) => {
  const [showContent, setShowContent] = useState(false);
  // const [selectedResource, setSelectedResource] = useState("");

  const handleResourceClick = () => {
    // setSelectedResource(resource);
    setShowContent(true);
  };

  if (showContent) {
    return <TechnicalWritingArticle />;
  }

  return (
    <div className="flex-1 border ml-10 p-10 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>

      <p className="text-gray-600 mb-8">{description}</p>

      <div className="w-full border mb-10"></div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <button
            key={index}
            onClick={() => handleResourceClick()}
            className="block text-blue-600 hover:underline text-left w-full"
          >
            {resource}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
