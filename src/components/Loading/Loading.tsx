import React from 'react';

export const Loading: React.FC<{ message?: string }> = ({
  message = 'Loading...',
}) => (
  <div className="my-8 text-center text-black dark:text-yellow-300">
    {message}
  </div>
);
