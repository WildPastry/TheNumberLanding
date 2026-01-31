import Home from '../pages/Home';
import Layout from '../pages/Layout';
import { Navigate } from 'react-router-dom';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';

const routesConfig = [
  {
    children: [
      {
        element: <Navigate to='/home' />,
        path: '/'
      },
      {
        element: <Home />,
        path: '/home'
      },
      {
        element: <Privacy />,
        path: '/privacy'
      },
      {
        element: <Terms />,
        path: '/terms'
      }
    ],
    element: <Layout />,
    path: '/'
  }
];

export default routesConfig;
