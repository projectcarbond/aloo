import Home from './App/Home';
import About from './App/About';

const routes = [{
  path: '/',
  component: Home,
  exact: true
}, {
  path: '/about',
  component: About,
  exact: true
}];

export default routes;
