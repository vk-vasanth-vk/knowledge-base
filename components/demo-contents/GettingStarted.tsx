import React from "react";

const BeginnerGuide = () => {
  return (
    <div className="flex-1 border ml-10 p-10 bg-white rounded-lg">
      <div className="max-w-3xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          The Beginner’s Guide to Kovai
        </h1>

        <p className="mb-6">
          Welcome to KovaiBase! This guide will walk you through the essentials
          of getting started with our platform. Whether you&apos;re here to manage
          your team, streamline communication, or build your knowledge base,
          this guide is for you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">What is KovaiBase?</h2>
        <p className="mb-4">
          KovaiBase is a collaborative knowledge base platform designed for
          support teams, product teams, and SaaS companies. It allows you to
          manage internal documentation, share customer-facing help articles,
          and keep your content organized.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Getting Around</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Dashboard:</strong> Your main hub for recent activity and
            quick links.
          </li>
          <li>
            <strong>Categories:</strong> Organize content by topics like
            Account, Billing, or Features.
          </li>
          <li>
            <strong>Search:</strong> Quickly find answers or documentation using
            the search bar.
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p className="text-blue-700 font-medium">
            💡 Tip: You can pin important articles to the top of a category for
            quick access.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Creating Your First Article
        </h2>
        <p className="mb-4">
          To create your first article, click the{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">New Article</code>{" "}
          button, select a category, and begin typing. You can add images,
          videos, and even embed code snippets.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Collaborating with Your Team
        </h2>
        <p className="mb-4">
          KovaiBase supports real-time collaboration. Invite your teammates,
          assign roles, and track article version history to ensure everything
          stays updated and accurate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Next Steps</h2>
        <ul className="list-disc pl-6 mb-8">
          <li>
            Check out the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Quick Start Guide
            </a>
          </li>
          <li>
            Explore our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Product Features
            </a>
          </li>
          <li>
            Need help?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact Support
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-500">Updated on April 18, 2025</p>
      </div>
    </div>
  );
};

export default BeginnerGuide;
