import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center">
          <h3 className="text-white font-bold mb-2">Globalink AI</h3>
          <p className="mb-4">Empowering Supply Chain with AI Agents</p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Globalink AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
