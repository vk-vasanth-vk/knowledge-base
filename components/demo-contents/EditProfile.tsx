import React from "react";

const EditProfileArticle = () => {
  return (
    <div className="flex-1 border ml-10 p-10 bg-white rounded-lg">
      <div className="max-w-4xl mx-auto px-6 py-8 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">
          How to Edit Profile Information
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Your profile is the face of your account in KovaiBase. Keeping it up
          to date helps others in your team identify you, and ensures account
          details are accurate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Accessing Your Profile
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Click your avatar at the top right of the dashboard.</li>
          <li>
            Select <strong>“My Profile”</strong> from the dropdown menu.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Updating Profile Fields
        </h2>
        <p className="mb-4">You can edit the following fields:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Name:</strong> Display name shown to teammates.
          </li>
          <li>
            <strong>Email:</strong> Used for login and communication.
          </li>
          <li>
            <strong>Phone Number:</strong> Optional but useful for 2FA.
          </li>
          <li>
            <strong>Profile Picture:</strong> Upload a new image to personalize
            your avatar.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Saving Changes</h2>
        <p>
          Once you’ve made the necessary updates, click the{" "}
          <strong>“Save Changes”</strong> button at the bottom of the form.
          You’ll see a green confirmation message.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Troubleshooting</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Changes not reflecting? Try refreshing your browser.</li>
          <li>
            Receiving an error? Check field validations and internet connection.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Need Help?</h2>
        <p>
          Contact our support team anytime via the help widget or at{" "}
          <a
            href="mailto:support@kovaibase.com"
            className="text-blue-600 underline"
          >
            support@kovaibase.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default EditProfileArticle;
