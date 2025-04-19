"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ContentArea from "@/components/ContentArea";
import { useSearchParams } from 'next/navigation';

const TroubleShootClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'loading';
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryContent>(initialCategory as keyof typeof categoryContent);

  const categoryContent = {
    loading: {
      title: "App Loading Issues",
      description: "Solutions for app loading and performance problems",
      resources: [
        "Common Loading Problems",
        "Browser Compatibility Issues",
        "Clearing Cache and Data",
        "Network Connectivity Fixes",
        "Performance Optimization Tips",
        "Mobile App Loading Solutions",
        "Error Message Guide",
        "System Requirements Check"
      ]
    },
    api: {
      title: "API Timeout Issues",
      description: "Fix common API connectivity problems",
      resources: [
        "API Connection Troubleshooting",
        "Timeout Error Solutions",
        "API Authentication Issues",
        "Rate Limiting Problems",
        "Request/Response Debugging",
        "API Performance Tips",
        "Error Code Reference",
        "API Status Monitoring"
      ]
    },
    login: {
      title: "Login Problems",
      description: "Resolve common login and access issues",
      resources: [
        "Login Error Solutions",
        "Password Reset Help",
        "2FA Troubleshooting",
        "Session Management Issues",
        "Account Recovery Steps",
        "SSO Connection Problems",
        "Browser Login Issues",
        "Mobile Login Solutions"
      ]
    },
    errors: {
      title: "Common Error Codes",
      description: "Understanding and resolving error messages",
      resources: [
        "Error Code Directory",
        "400 Error Solutions",
        "500 Error Fixes",
        "Network Error Guide",
        "Database Error Help",
        "Security Error Resolution",
        "Validation Error Fixes",
        "System Error Solutions"
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
                onClick={() => setActiveCategory('loading')}
                className={`block w-full text-left ${activeCategory === 'loading' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                App Loading Issues
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('api')}
                className={`block w-full text-left ${activeCategory === 'api' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                API Timeout Issues
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('login')}
                className={`block w-full text-left ${activeCategory === 'login' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Login Problems
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('errors')}
                className={`block w-full text-left ${activeCategory === 'errors' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Common Error Codes
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

export default TroubleShootClient