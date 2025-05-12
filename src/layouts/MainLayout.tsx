import React from 'react';
import { useTheme } from 'context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="bg-black dark:bg-gray-900 shadow sticky top-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-blue-800 dark:text-yellow-300 no-underline"
          >
            <h1 className="text-3xl font-bold text-yellow-400 m-0">SW</h1>
          </Link>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-2xl text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-yellow-900 transition"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </header>
      <main className="min-h-[calc(100vh-80px)] py-8 bg-gray-100 dark:bg-gray-600">
        <div className="max-w-7xl mx-auto px-4">{children}</div>
      </main>
    </>
  );
};
