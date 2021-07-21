import App from './App';
import AdminsLIstPage from './pages/AdminsLIstPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import UsersListPage from './pages/UsersListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...AdminsLIstPage,
        path: '/admins',
      },
      {
        ...NotFound,
      }
    ]
  }
];
