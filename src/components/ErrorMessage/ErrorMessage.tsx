import React from 'react';

export const ErrorMessage: React.FC<{ message?: string }> = ({
  message = 'Error loading data.',
}) => (
  <div className="my-8 text-center text-yellow-500 dark:text-yellow-300">
    {message}
  </div>
);
