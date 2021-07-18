import HomePage from './components/pages/HomePage';
import UsersListPage, {loadData} from './components/pages/UsersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',
    loadData,
  },
];
