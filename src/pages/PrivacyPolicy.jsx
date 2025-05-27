import React from "react";

const PrivacyPolicy = () => (
  <section className="w-full min-h-[60vh] py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#061345] to-[#071856] text-white">
    <div className="max-w-2xl w-full mx-auto bg-[rgba(255,255,255,0.02)] rounded-lg shadow-lg p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <ol className="list-decimal list-inside space-y-4 text-lg text-gray-200">
        <li>
          <strong>Information Collection</strong><br />
          We may collect personal information such as your name, email address, phone number, and business details when you interact with our services.
        </li>
        <li>
          <strong>Use of Information</strong><br />
          The information we collect is used to provide, maintain, and improve our services, communicate with you, and fulfill legal obligations.
        </li>
        <li>
          <strong>Data Security</strong><br />
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
        </li>
        <li>
          <strong>Data Sharing</strong><br />
          We do not sell or rent your personal information to third parties. We may share information with trusted partners who work on our behalf under confidentiality agreements.
        </li>
        <li>
          <strong>Cookies</strong><br />
          Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
        </li>
        <li>
          <strong>Changes to Policy</strong><br />
          We may update this privacy policy from time to time. Any changes will be posted on our website with the updated effective date.<br />
          By using our services, you consent to the terms outlined in this privacy policy.
        </li>
      </ol>
    </div>
  </section>
);

export default PrivacyPolicy; 