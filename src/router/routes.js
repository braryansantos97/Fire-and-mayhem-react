import React from 'react';
import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import Selection from '../pages/Selection';
import Arena from '../pages/Arena';
import About from '../pages/About';

// import { Route, Switch } from "react-router-dom";

const routes = [
  {
    path: "/",
    key: "welcome",
    component: Welcome
  },
  {
    path: '/home',
    key: 'HOME',
    exact: true,
    Component: Home,
  },
	{
    path: '/selection',
    key: 'SELECTION',
    Component: Selection,
	},
  {
    path: '/arena',
    key: 'ARENA',
    Component: Arena,
  },
	{
    path: '/about',
		key: 'ABOUT',
    Component: About,
	},
];

export default routes;
//
// /**
//  * Render a route with potential sub routes
//  * https://reacttraining.com/react-router/web/example/route-config
//  */
//
// function RouteWithSubRoutes(route) {
//   console.log(route);
//   return (
//     <Route
//       path={route.path}
//       exact={route.exact}
//       render={props => <route.component {...props} routes={route.routes} />}
//     />
//   );
// }
//
// /**
//  * Use this component for any new section of routes (any config object that has a "routes" property
//  */
// export function RenderRoutes({ routes }) {
//   return (
//     <Switch>
//       {routes.map((route, i) => {
//         return <RouteWithSubRoutes key={route.key} {...route} />;
//       })}
//       <Route component={() => <h1>Not Found!</h1>} />
//     </Switch>
//   );
// }
