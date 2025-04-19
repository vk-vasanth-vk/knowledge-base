'use client';
import React from 'react'
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react'
import ContentArea from '@/components/ContentArea';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const GettingStartedClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'intro';
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryContent>(initialCategory as keyof typeof categoryContent);

  const categoryContent = {
    intro: {
      title: "Intro to Product",
      description: "A quick overview of our product",
      resources: [
        "The Beginner's Guide to KovaiBase",
        "What Is A Shared Inbox?",
        "Get Your Email Into KovaiBase",
        "Quick Start Guide",
        "Understanding Core Features",
        "Product Updates & Changelog",
        "Common Use Cases & Examples",
        "Getting Help & Support"
      ]
    },
    system: {
      title: "System Requirements",
      description: "Minimum software and hardware requirements",
      resources: [
        "Hardware Requirements",
        "Software Dependencies",
        "Browser Compatibility",
        "Network Requirements",
        "Storage Specifications",
        "Operating System Support",
        "Mobile Device Requirements",
        "Database Setup Guidelines"
      ]
    },
    signup: {
      title: "Signup & Login Guide",
      description: "Instructions to account setup",
      resources: [
        "Creating Your Account",
        "Setting Up 2FA",
        "Password Guidelines",
        "Account Recovery Options",
        "Email Verification Process",
        "Profile Setup Guide",
        "Team Invitation Process",
        "Account Security Best Practices"
      ]
    },
    dashboard: {
      title: "Dashboard Navigation",
      description: "Learn to use the main interface and access tools",
      resources: [
        "Dashboard Overview",
        "Customizing Your View",
        "Using Quick Actions",
        "Navigation Shortcuts",
        "Widget Configuration",
        "Data Visualization Options",
        "Workspace Organization",
        "Dashboard Sharing & Collaboration"
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
                onClick={() => setActiveCategory('intro')}
                className={`block w-full text-left ${activeCategory === 'intro' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Intro to Product
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('system')}
                className={`block w-full text-left ${activeCategory === 'system' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                System Requirements
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('signup')}
                className={`block w-full text-left ${activeCategory === 'signup' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Signup & Login Guide
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('dashboard')}
                className={`block w-full text-left ${activeCategory === 'dashboard' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Dashboard Navigation
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

export default GettingStartedClient