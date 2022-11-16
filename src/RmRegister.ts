
import { RoutesStorage } from "./Global";
import { historyRoutesLoader } from "./RmLoaders";
import { RegisterdRoutesPages, RegisterdRoutesHeaders, RegisterdRoutesFooters, RouteServerHost, RouteMetaUrl} from "./types";

export const register_http_routes = (Routes: RegisterdRoutesPages): void => {
    RoutesStorage.RoutesPages = Routes;

    if (typeof window !== 'undefined') {
        window.addEventListener("popstate", (event)=>{
            historyRoutesLoader(true);
        });
    }
}

export const register_routes_headers = (Headers: RegisterdRoutesHeaders<Array<string>>): void => {
    RoutesStorage.RoutesHeaders = Headers;
}

export const register_routes_footers = (Footers: RegisterdRoutesFooters<Array<string>>): void => {
    RoutesStorage.RoutesFooters = Footers;
}

export const registerServerHost = (ServerHost: RouteServerHost): void => {
    RoutesStorage.server_host = ServerHost;
}

export const registerMetaUrl = (MetaUrl: RouteMetaUrl): void => {
    RoutesStorage.meta_content_url = MetaUrl;
}