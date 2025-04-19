"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ContentArea from "@/components/ContentArea";
import { useSearchParams } from 'next/navigation';

const AccountManagementClient = () => {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'updateProfile';
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryContent>(initialCategory as keyof typeof categoryContent);

  const categoryContent = {
    updateProfile: {
      title: "Update Profile Info",
      description: "Manage your personal details and account information",
      resources: [
        "How to Edit Your Profile Information",
        "Updating Contact Details",
        "Managing Profile Privacy Settings",
        "Customizing Your Profile Picture",
        "Setting Communication Preferences",
        "Managing Notification Settings",
        "Profile Visibility Options",
        "Account Information Guidelines"
      ]
    },
    subscription: {
      title: "Managing Subscriptions",
      description: "View and modify your subscription plans",
      resources: [
        "Understanding Subscription Plans",
        "How to Upgrade Your Plan",
        "Downgrade Options and Process",
        "Managing Payment Methods",
        "Billing History and Invoices",
        "Subscription Renewal Settings",
        "Plan Comparison Guide",
        "Cancellation Process"
      ]
    },
    password: {
      title: "Resetting Password",
      description: "Learn how to securely reset your forgotten password",
      resources: [
        "Password Reset Process",
        "Creating Strong Passwords",
        "Password Recovery Options",
        "Security Questions Setup",
        "Two-Factor Authentication",
        "Password Change History",
        "Emergency Access Settings",
        "Account Recovery Tips"
      ]
    },
    security: {
      title: "Account Security",
      description: "Configure 2FA, login alerts, and security settings",
      resources: [
        "Security Best Practices",
        "Setting Up 2FA Authentication",
        "Managing Login Devices",
        "Security Alert Preferences",
        "Account Activity Monitoring",
        "Privacy Settings Configuration",
        "Security Checkup Guide",
        "Data Protection Options"
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
                onClick={() => setActiveCategory('updateProfile')}
                className={`block w-full text-left ${activeCategory === 'updateProfile' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Update Profile Info
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('subscription')}
                className={`block w-full text-left ${activeCategory === 'subscription' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Managing Subscriptions
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('password')}
                className={`block w-full text-left ${activeCategory === 'password' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Resetting Password
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveCategory('security')}
                className={`block w-full text-left ${activeCategory === 'security' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Account Security
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

export default AccountManagementClient;
