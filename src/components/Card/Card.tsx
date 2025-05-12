import React from 'react';

interface SectionCardProps {
  section: string;
  meta: {
    name: string;
    icon: React.ReactNode;
    route: string;
    description: string;
  };
  onClick: () => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({ meta, onClick }) => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow p-8 flex-1 min-w-[250px] flex flex-col items-start">
    <div className="text-2xl mb-4">{meta.icon}</div>
    <h2 className="text-xl font-bold mb-2">{meta.name}</h2>
    <p className="mb-4">{meta.description}</p>
    <button
      className="mt-auto px-6 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition"
      onClick={onClick}
    >
      View All
    </button>
  </div>
);
