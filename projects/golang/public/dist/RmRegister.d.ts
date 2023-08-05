import { type RegisterdRoutesPages, type RegisterdRoutesHeaders, type RegisterdRoutesFooters, type RouteServerHost, type RouteMetaUrl } from './types';
export declare const register_http_routes: (Routes: RegisterdRoutesPages) => void;
export declare const register_routes_headers: (Headers: RegisterdRoutesHeaders<string[]>) => void;
export declare const register_routes_footers: (Footers: RegisterdRoutesFooters<string[]>) => void;
export declare const registerServerHost: (ServerHost: RouteServerHost) => void;
export declare const registerMetaUrl: (MetaUrl: RouteMetaUrl) => void;
