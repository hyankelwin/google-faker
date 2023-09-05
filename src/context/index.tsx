import React from 'react';

import { SearchProvider } from './SearchContext';

const AppProvider: React.FC = ({ children }) => (
  <SearchProvider>{children}</SearchProvider>
);

export default AppProvider;
