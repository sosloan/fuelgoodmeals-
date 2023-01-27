import Today from '../pages/Today';
import Games from '../pages/Games';
import Apps from '../pages/Apps';
import Arcade from '../pages/Arcade';
import Search from '../pages/Search';

const routes = [
  {
    path: '/today/',
    component: Today,
  },
  {
    path: '/games/',
    component: Games,
  },
  {
    path: '/apps/',
    component: Apps,
  },
  {
    path: '/arcade/',
    component: Arcade,
  },
  {
    path: '/search/',
    component: Search,
  },
  {
    path: '/app/:id',
    asyncComponent: () => import('../pages/AppDetails'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import('../pages/Account'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import('../pages/404'),
  },
];

export default routes;
