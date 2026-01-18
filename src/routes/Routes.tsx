import Home from '../pages/Home';
import Layout from '../pages/Layout';
import { Navigate } from 'react-router-dom';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/terms',
        element: <Terms />
      }
    ]
  }
];

export default routesConfig;
