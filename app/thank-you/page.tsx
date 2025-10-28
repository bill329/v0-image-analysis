import React from "react";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Thank You | Stone Concepts",
  description: "Thank you for contacting Stone Concepts. We will be in touch with you shortly.",
  robots: "index, follow",
}

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center">
      <CheckCircle className="mx-auto h-39 w-39 text-green-500 mb-8" />
      <h1 className="text-4xl font-bold text-green-600">Thank You!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your request has been successfully submitted. We’ll be in touch shortly.
      </p>
      <div className="mt-6">
        <a href="/" className="text-black underline  hover:text-green-800">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;