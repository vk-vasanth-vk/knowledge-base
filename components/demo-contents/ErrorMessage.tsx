import React from "react";
import { AlertCircle, Settings, ClipboardList, Bug, ShieldCheck, BookOpen } from "lucide-react";

const ErrorMessageGuide = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Error Message Guide</h1>
      <p className="text-lg text-gray-600 mb-8">
        Encountering an error message can be frustrating, but most issues are easy to resolve.
        This guide will help you identify common error messages within KovaiBase and walk you
        through possible causes and fixes.
      </p>

      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="text-red-500" />
            <h2 className="text-2xl font-semibold">Why Do Error Messages Occur?</h2>
          </div>
          <p className="text-gray-700">
            Error messages are triggered when an action fails due to system rules, connectivity
            issues, or user input errors. Understanding the message helps quickly resolve the problem.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="text-blue-600" />
            <h2 className="text-2xl font-semibold">Common Error Messages</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>&quot;Invalid Credentials&quot;:</strong> Check your username and password for typos.</li>
            <li><strong>&quot;Network Error&quot;:</strong> Ensure a stable internet connection.</li>
            <li><strong>&quot;Access Denied&quot;:</strong> You may not have the necessary permissions.</li>
            <li><strong>&quot;Form Submission Failed&quot;:</strong> Required fields may be missing or incorrectly formatted.</li>
            <li><strong>&quot;Session Timeout&quot;:</strong> Log in again to continue your session.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <Settings className="text-indigo-600" />
            <h2 className="text-2xl font-semibold">Troubleshooting Steps</h2>
          </div>
          <p className="text-gray-700">
            Try reloading the page, clearing your browser cache, or switching browsers. If the error
            persists, review recent actions or configurations that might have triggered the issue.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <Bug className="text-orange-500" />
            <h2 className="text-2xl font-semibold">When to Report an Issue</h2>
          </div>
          <p className="text-gray-700">
            If the error message is unclear or continues after basic troubleshooting, contact our
            support team. Include a screenshot and a description of the steps leading to the issue.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-green-600" />
            <h2 className="text-2xl font-semibold">Preventing Future Errors</h2>
          </div>
          <p className="text-gray-700">
            Keep your browser and application updated, and avoid leaving forms idle for long periods.
            Ensure proper user permissions and training to minimize common input mistakes.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="text-purple-500" />
            <h2 className="text-2xl font-semibold">Resources & Help</h2>
          </div>
          <p className="text-gray-700">
            Visit our Help Center for more troubleshooting guides or contact support directly for
            personalized assistance.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ErrorMessageGuide;
