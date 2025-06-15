import React from "react";

function Introduction() {
  return (
    <section className="flex justify-center">
      <div className="xl:w-[80%] px-5">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard Documentation</h1>
        <p className="text-lg mb-6 text-gray-700">
          This documentation will guide you through the features and usage of the Dashboard application.
          Whether you are a new user or an experienced developer, you'll find helpful information to get started and make the most of the platform.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-800">
          <li>Overview of key features</li>
          <li>Step-by-step setup instructions</li>
          <li>Usage examples and best practices</li>
          <li>Frequently asked questions</li>
        </ul>
        <p className="text-md text-gray-600">
          Use the navigation menu to explore different sections. If you need further assistance, refer to the support resources or contact our team.
        </p>
      </div>
    </section>
  );
}

export default Introduction;