import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { resourceLabels } from 'utils/resourceLabels';

interface BreadcrumbProps {
  resourceName?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ resourceName }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="my-4 text-base">
      <Link
        to="/"
        className="text-yellow-500 dark:text-yellow-300 no-underline"
      >
        Home
      </Link>
      {pathnames.map((segment, idx) => {
        const to = '/' + pathnames.slice(0, idx + 1).join('/');
        return (
          <span key={to}>
            {' / '}
            {idx === pathnames.length - 1 ? (
              resourceName === undefined ? (
                <span className="capitalize text-gray-600 dark:text-white">
                  {resourceLabels[segment]}
                </span>
              ) : (
                <span className="capitalize text-gray-600 dark:text-white">
                  {resourceName}
                </span>
              )
            ) : (
              <Link
                to={to}
                className="capitalize text-yellow-500 dark:text-yellow-300 no-underline"
              >
                {resourceLabels[segment]}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};
