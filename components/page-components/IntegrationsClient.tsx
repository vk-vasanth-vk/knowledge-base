"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ContentArea from "@/components/ContentArea";
import { useSearchParams } from 'next/navigation';

const IntegrationsClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'slack';
  type CategoryKey = keyof typeof categoryContent;
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(initialCategory as CategoryKey);

  const categoryContent = {
    slack: {
      title: "Connecting with Slack",
      description: "Link your account for Slack notifications",
      resources: [
        "Slack Integration Setup Guide",
        "Configuring Notification Channels",
        "Custom Slack Commands",
        "Automated Slack Alerts",
        "Managing Slack Permissions",
        "Channel Mapping Setup",
        "Troubleshooting Slack Connection",
        "Advanced Slack Features"
      ]
    },
    gmail: {
      title: "Gmail Integration",
      description: "Sync and manage Gmail messages directly",
      resources: [
        "Gmail Account Connection",
        "Email Forwarding Setup",
        "Managing Email Filters",
        "Auto-Reply Configuration",
        "Email Template Management",
        "Gmail Label Sync",
        "Multiple Account Setup",
        "Email Threading Options"
      ]
    },
    zapier: {
      title: "Zapier Integration",
      description: "Create automated workflows with Zapier",
      resources: [
        "Getting Started with Zapier",
        "Creating Custom Zaps",
        "Popular Workflow Templates",
        "Multi-step Automation",
        "Data Mapping Guide",
        "Error Handling in Zaps",
        "Testing Your Workflows",
        "Advanced Zapier Features"
      ]
    },
    webhooks: {
      title: "Webhooks & Custom API",
      description: "Set up webhooks and custom integrations",
      resources: [
        "Webhook Setup Guide",
        "API Authentication",
        "Custom Endpoint Creation",
        "Data Payload Structure",
        "Webhook Security Best Practices",
        "Testing Webhook Endpoints",
        "Error Handling & Retries",
        "API Rate Limiting"
      ]
    }
  };

  return (
    <div className="flex max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-8 gap-8">
      {/* Left Sidebar */}
      <div className="w-64 flex-shrink-0">
        <div className="mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md bg-white"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveCategory('slack')}
                className={`block w-full text-left ${activeCategory === 'slack' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Slack Integration
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('gmail')}
                className={`block w-full text-left ${activeCategory === 'gmail' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Gmail Integration
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('zapier')}
                className={`block w-full text-left ${activeCategory === 'zapier' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Zapier Integration
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('webhooks')}
                className={`block w-full text-left ${activeCategory === 'webhooks' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Webhooks & API
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <ContentArea 
        title={categoryContent[activeCategory].title}
        description={categoryContent[activeCategory].description}
        resources={categoryContent[activeCategory].resources}
      />
    </div>
  )
}

export default IntegrationsClient