'use client';

import Header from "@/components/Header";
import ContentCard from "@/components/ContentCard";
import Footer from "@/components/Footer";

import { 
  BookOpen, 
  Monitor, 
  UserPlus, 
  Layout,
  UserCog,
  CreditCard,
  KeyRound,
  Shield,
  LineChart,
  Gauge,
  FileDown,
  Bell,
  Slack,
  Mail,
  Workflow,
  Webhook,
  AlertCircle,
  Timer,
  LogIn,
  FileCode,
  HelpCircle,
  CreditCard as PricingIcon,
  Lock,
  Smartphone
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-8">
        {/* Getting Started */}
        <h1 className="text-2xl font-bold mb-8">Getting Started</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Intro to the product"
            description="A quick overview of our product"
            icon={BookOpen}
            href="/getting-started"
            category="intro"
          />
          <ContentCard
            title="System Requirements"
            description="Minimum software and hardware requirements"
            icon={Monitor}
            href="/getting-started"
            category="system"
          />
          <ContentCard
            title="Signup & Login Guide"
            description="Instructions to account setup"
            icon={UserPlus}
            href="/getting-started"
            category="signup"
          />
          <ContentCard
            title="Dashboard Navigation"
            description="Learn to use the main interface and access tools"
            icon={Layout}
            href="/getting-started"
            category="dashboard"
          />
        </div>

        {/* Account Management */}
        <h1 className="text-2xl font-bold mb-8 mt-20">Account Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Update Profile Info"
            description="Manage your personal details and account information"
            icon={UserCog}
            href="/account-management"
            category="updateProfile"
          />
          <ContentCard
            title="Managing Subscriptions"
            description="View and modify your subscription plans"
            icon={CreditCard}
            href="/account-management"
            category="subscription"
          />
          <ContentCard
            title="Resetting the Password"
            description="Learn how to securely reset your forgotten password"
            icon={KeyRound}
            href="/account-management"
            category="password"
          />
          <ContentCard
            title="Manage Account Security"
            description="Configure 2FA, login alerts, and security settings"
            icon={Shield}
            href="/account-management"
            category="security"
          />
        </div>

        {/* Product Features */}
        <h1 className="text-2xl font-bold mb-8 mt-20">Product Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Real-time Analytics"
            description="View and analyze live data insights"
            icon={LineChart}
            href="/product-features"
            category="analytics"
          />
          <ContentCard
            title="Custom Dashboard Setup"
            description="Personalize your dashboard with widgets"
            icon={Gauge}
            href="/product-features"
            category="dashboard"
          />
          <ContentCard
            title="Data Export Options"
            description="Export reports in CSV and PDF formats"
            icon={FileDown}
            href="/product-features"
            category="export"
          />
          <ContentCard
            title="Notifications & Alerts"
            description="Set up alerts for important updates"
            icon={Bell}
            href="/product-features"
            category="notifications"
          />
        </div>

        {/* Integrations */}
        <h1 className="text-2xl font-bold mb-8 mt-20">Integrations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Connecting with Slack"
            description="Link your account for Slack notifications"
            icon={Slack}
            href="/integrations"
            category="slack"
          />
          <ContentCard
            title="Gmail Integration Setup"
            description="Sync and manage Gmail messages directly"
            icon={Mail}
            href="/integrations"
            category="gmail"
          />
          <ContentCard
            title="Zapier with the Product"
            description="Create automated workflows with Zapier"
            icon={Workflow}
            href="/integrations"
            category="zapier"
          />
          <ContentCard
            title="Webhooks & Custom API"
            description="Set up webhooks and custom integrations"
            icon={Webhook}
            href="/integrations"
            category="webhooks"
          />
        </div>

        {/* Troubleshooting */}
        <h1 className="text-2xl font-bold mb-8 mt-20">Troubleshooting</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="App Not Loading?"
            description="Solutions for app loading issues"
            icon={AlertCircle}
            href="/troubleshoot"
            category="loading"
          />
          <ContentCard
            title="API Timeout Issues"
            description="Fix common API connectivity problems"
            icon={Timer}
            href="/troubleshoot"
            category="api"
          />
          <ContentCard
            title="Troubleshoot Login Issues"
            description="Resolve common login problems"
            icon={LogIn}
            href="/troubleshoot"
            category="login"
          />
          <ContentCard
            title="Common Error Codes"
            description="Understanding error messages"
            icon={FileCode}
            href="/troubleshoot"
            category="errors"
          />
        </div>

        {/*  FAQs */}
        <h1 className="text-2xl font-bold mb-8 mt-20">FAQs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Can I Use It for Free?"
            description="Learn about our free plan features"
            icon={HelpCircle}
            href="/faqs"
            category="pricing"
          />
          <ContentCard
            title="How Do I Upgrade Plans?"
            description="Guide to upgrading your plan"
            icon={PricingIcon}
            href="/faqs"
            category="upgrade"
          />
          <ContentCard
            title="Is My Data Secure?"
            description="Overview of our security measures"
            icon={Lock}
            href="/faqs"
            category="security"
          />
          <ContentCard
            title="Can I use the platform on mobile ?"
            description="Access options and device support"
            icon={Smartphone}
            href="/faqs"
            category="platform"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
