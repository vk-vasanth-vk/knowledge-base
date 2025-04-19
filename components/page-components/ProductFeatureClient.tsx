"use client";
import React ,{ useState } from 'react'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ContentArea from "@/components/ContentArea";
import { useSearchParams } from 'next/navigation';

const ProductFeatureClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'analytics';
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryContent>(initialCategory as keyof typeof categoryContent);

  const categoryContent = {
    analytics: {
      title: "Real-time Analytics",
      description: "View and analyze live data insights",
      resources: [
        "Getting Started with Analytics Dashboard",
        "Understanding Key Metrics",
        "Creating Custom Reports",
        "Data Visualization Tools",
        "Setting Up Analytics Alerts",
        "Performance Tracking Features",
        "Export and Share Reports",
        "Analytics Best Practices"
      ]
    },
    dashboard: {
      title: "Custom Dashboard Setup",
      description: "Personalize your dashboard with widgets",
      resources: [
        "Dashboard Customization Guide",
        "Adding and Removing Widgets",
        "Layout Configuration Options",
        "Widget Data Sources Setup",
        "Real-time Widget Updates",
        "Dashboard Sharing Options",
        "Template Management",
        "Dashboard Performance Tips"
      ]
    },
    export: {
      title: "Data Export Options",
      description: "Export reports in CSV and PDF formats",
      resources: [
        "Export File Format Options",
        "Bulk Data Export Guide",
        "Scheduled Export Setup",
        "Custom Export Templates",
        "Data Filtering for Exports",
        "Export History Management",
        "Automated Export Rules",
        "Export Security Guidelines"
      ]
    },
    notifications: {
      title: "Notifications & Alerts",
      description: "Set up alerts for important updates",
      resources: [
        "Alert Configuration Guide",
        "Custom Notification Rules",
        "Channel Integration Setup",
        "Alert Priority Levels",
        "Notification Templates",
        "Mobile Alert Settings",
        "Team Notification Management",
        "Alert History and Logs"
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
                onClick={() => setActiveCategory('analytics')}
                className={`block w-full text-left ${activeCategory === 'analytics' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Real-time Analytics
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('dashboard')}
                className={`block w-full text-left ${activeCategory === 'dashboard' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Custom Dashboard Setup
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('export')}
                className={`block w-full text-left ${activeCategory === 'export' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Data Export Options
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('notifications')}
                className={`block w-full text-left ${activeCategory === 'notifications' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Notifications & Alerts
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

export default ProductFeatureClient