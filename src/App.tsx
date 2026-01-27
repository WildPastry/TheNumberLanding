import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import type { JSX } from 'react';
import routesConfig from './routes/Routes';

const App: React.FC = (): JSX.Element => {
  const router = createBrowserRouter(routesConfig);
  return <RouterProvider router={router} />;
};

export default App;
