import React from "react";

const TermsOfService = () => (
  <section className="w-full min-h-[60vh] py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-[#061345] to-[#071856] text-white">
    <div className="max-w-2xl w-full mx-auto bg-[rgba(255,255,255,0.02)] rounded-lg shadow-lg p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Terms of Service</h1>
      <ol className="list-decimal list-inside space-y-4 text-lg text-gray-200">
        <li>
          <strong>Use of Services</strong><br />
          You agree to use our services only for lawful purposes and in accordance with applicable laws and regulations.
        </li>
        <li>
          <strong>Intellectual Property</strong><br />
          All content, designs, and software provided by Meezak Technologies are the intellectual property of the company and may not be reproduced or used without written permission.
        </li>
        <li>
          <strong>Service Modifications</strong><br />
          Meezak Technologies reserves the right to modify or discontinue services at any time without prior notice.
        </li>
        <li>
          <strong>Limitation of Liability</strong><br />
          Meezak Technologies shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
        </li>
        <li>
          <strong>Termination</strong><br />
          We reserve the right to suspend or terminate access to our services if you violate these terms.
        </li>
        <li>
          <strong>Governing Law</strong><br />
          These terms are governed by and construed in accordance with the laws of the jurisdiction in which Meezak Technologies operates.
        </li>
      </ol>
    </div>
  </section>
);

export default TermsOfService; 