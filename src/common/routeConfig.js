import _ from "lodash";
import {default as AppRoot} from "../AppRoot";
import {PageNotFound} from "../features/common";
import authenticationRoute from "../features/authentication/route";

import homeRoute from "../features/home/route";
import commonRoute from "../features/common/route";
import examplesRoute from "../features/examples/route";

import musicRoute from "../features/music/route";

// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes config for new features, and remove config when remove features, etc.
const childRoutes = [
    homeRoute,
    commonRoute,
    examplesRoute,
    musicRoute
];

const routes = [{
    path: "/",
    component: AppRoot,
    childRoutes: [
        ...childRoutes, ...authenticationRoute,
        {path: "*", name: "Page not found", component: PageNotFound}
    ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0))
}];

// Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
function handleIndexRoute(route) {
    if (!route.childRoutes || !route.childRoutes.length) {
        return;
    }

    const indexRoute = _.find(route.childRoutes, (child => child.isIndex));
    if (indexRoute) {
        const first = {...indexRoute};
        first.path = "";
        first.exact = true;
        first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
        route.childRoutes.unshift(first);
    }
    route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
