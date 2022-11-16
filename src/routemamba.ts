import {registerMetaUrl, registerServerHost, register_http_routes, register_routes_footers, register_routes_headers} from "./RmRegister";
import { navigate, pop_route, push_route } from "./Navigators";
import {initTabs} from "./RmTabsHandler";
import {render} from "./RmRender";
export {
    registerMetaUrl,
    registerServerHost,
    register_http_routes,
    register_routes_footers,
    register_routes_headers,
    navigate,
    render,
    pop_route,
    push_route,
    initTabs,
}