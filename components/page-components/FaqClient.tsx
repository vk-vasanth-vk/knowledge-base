"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ContentArea from "@/components/ContentArea";
import { useSearchParams } from 'next/navigation';

const FaqClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'pricing';
  type CategoryKey = keyof typeof categoryContent;
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(initialCategory as CategoryKey);

  const categoryContent = {
    pricing: {
      title: "Pricing & Plans",
      description: "Learn about our pricing options and features",
      resources: [
        "Free Plan Features Overview",
        "Premium Plan Benefits",
        "Enterprise Solutions",
        "Billing Cycle Information",
        "Payment Methods Accepted",
        "Plan Comparison Guide",
        "Custom Pricing Options",
        "Upgrade Process Guide"
      ]
    },
    upgrade: {
      title: "Upgrading Plans",
      description: "Guide to upgrading your subscription",
      resources: [
        "How to Upgrade Your Plan",
        "Mid-cycle Upgrade Process",
        "Upgrade Benefits Guide",
        "Team Plan Upgrades",
        "Enterprise Upgrade Steps",
        "Billing Changes Guide",
        "Feature Access Timeline",
        "Post-upgrade Setup"
      ]
    },
    security: {
      title: "Data Security",
      description: "Overview of our security measures",
      resources: [
        "Data Protection Overview",
        "Security Certifications",
        "Privacy Policy Guide",
        "Data Encryption Details",
        "Access Control Measures",
        "Backup & Recovery",
        "Compliance Standards",
        "Security Best Practices"
      ]
    },
    platform: {
      title: "Platform Access",
      description: "Access options and device support",
      resources: [
        "Supported Devices",
        "Browser Requirements",
        "Mobile App Access",
        "Offline Capabilities",
        "Multi-device Usage",
        "Access Restrictions",
        "Platform Limitations",
        "Cross-platform Features"
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
                onClick={() => setActiveCategory('pricing')}
                className={`block w-full text-left ${activeCategory === 'pricing' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Pricing & Plans
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('upgrade')}
                className={`block w-full text-left ${activeCategory === 'upgrade' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Upgrading Plans
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('security')}
                className={`block w-full text-left ${activeCategory === 'security' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Data Security
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('platform')}
                className={`block w-full text-left ${activeCategory === 'platform' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Platform Access
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

export default FaqClient