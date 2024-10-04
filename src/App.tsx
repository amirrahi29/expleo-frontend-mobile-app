import * as React from 'react';
import { MainNavigation } from './navigation/MainNavigation';

const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  return (
    <MainNavigation isAuthenticated={isAuthenticated} />
  );
};

export default App;
