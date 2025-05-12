import React, { createContext, useContext, useState } from 'react';

type ResourceNameContextType = {
  resourceName: string | undefined;
  setResourceName: (name: string | undefined) => void;
};

const ResourceNameContext = createContext<ResourceNameContextType | undefined>(
  undefined
);

export const ResourceNameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [resourceName, setResourceName] = useState<string | undefined>(
    undefined
  );
  return (
    <ResourceNameContext.Provider value={{ resourceName, setResourceName }}>
      {children}
    </ResourceNameContext.Provider>
  );
};

export const useResourceName = () => {
  const ctx = useContext(ResourceNameContext);
  if (!ctx) throw new Error('ResourceNameProvider is not found');
  return ctx;
};
