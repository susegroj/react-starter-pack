import { Home, NotFound } from '@pages';

const routes = [
  {
    key: 'home',
    path: '/',
    exact: true,
    privateRoute: false,
    role: 'regular',
    component: Home,
  },
  {
    key: 'not-found',
    path: '',
    exact: false,
    privateRoute: false,
    role: 'regular',
    component: NotFound,
  },
];

export default routes;
