import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-900 rounded-xl p-6 shadow-lg">{children}</div>;
}
