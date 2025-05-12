import React from 'react';

export const NoData: React.FC<{ message?: string }> = ({
  message = 'No data found.',
}) => (
  <div className="my-8 text-center text-yellow-500 dark:text-yellow-300">
    {message}
  </div>
);
