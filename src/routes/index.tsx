// Layout
import { HeaderOnly } from '~/layouts';
import routesConfig from '~/config/route';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';

// Public Routes
const publicRoutes: any = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.explore, component: Explore },
    { path: routesConfig.live, component: Live },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
