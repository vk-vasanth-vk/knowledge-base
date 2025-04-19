import React from "react";
import { Slack, Settings, Bell, UserCheck, ShieldCheck } from "lucide-react";

const Integration = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Slack Integration Setup Guide</h1>
      <p className="text-lg text-gray-600 mb-8">
        Integrating Slack with KovaiBase enables real-time collaboration by connecting your support
        communications directly to your workspace. In this article, we’ll walk you through the steps
        to get started with Slack integration and how to maximize its benefits.
      </p>

      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-3 mb-2">
            <Slack className="text-blue-500" />
            <h2 className="text-2xl font-semibold">Why Integrate Slack?</h2>
          </div>
          <p className="text-gray-700">
            Slack integration ensures your team stays informed about support activities in real-time.
            Notifications about new tickets, replies, or escalations can be sent to specific channels,
            streamlining collaboration without switching tools.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <Settings className="text-indigo-600" />
            <h2 className="text-2xl font-semibold">Step 1: Access Integration Settings</h2>
          </div>
          <p className="text-gray-700">
            Go to <strong>Settings &gt; Integrations</strong> in KovaiBase. Locate the Slack card and click
            <strong> Connect</strong>. You’ll be redirected to Slack’s authentication screen.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <UserCheck className="text-green-600" />
            <h2 className="text-2xl font-semibold">Step 2: Authorize Access</h2>
          </div>
          <p className="text-gray-700">
            Sign in to your Slack workspace and allow KovaiBase to post messages. Select the appropriate
            channel where you want updates to appear.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <Bell className="text-yellow-500" />
            <h2 className="text-2xl font-semibold">Step 3: Configure Notification Preferences</h2>
          </div>
          <p className="text-gray-700">
            Choose the types of updates you want to receive in Slack—new tickets, ticket replies,
            internal notes, etc. Customize by team or tag to reduce noise and improve relevance.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-purple-600" />
            <h2 className="text-2xl font-semibold">Step 4: Test & Save</h2>
          </div>
          <p className="text-gray-700">
            After configuration, click <strong>Send Test Notification</strong> to verify the integration
            works. Once confirmed, hit <strong>Save Changes</strong>.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <Slack className="text-pink-500" />
            <h2 className="text-2xl font-semibold">Best Practices</h2>
          </div>
          <p className="text-gray-700">
            Set up separate Slack channels for different teams or categories to keep conversations organized.
            Use Slack’s search and pin features to highlight important support updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Integration;
