import { type RouteComponentTypes } from './Global';
/**
 * types of every route method objects @param
 */
export type RouteMethod = string;
export type RouteMetaLoader = boolean;
export type RouteContentUrl = string;
export type RouteContainer = string;
export type RoutePreloader = string;
export interface RouteData {
    [key: string]: any;
}
export type PathParamData = object | null;
export type RouteErrorContent = string;
export type RouteHttpUrlChange = boolean;
export type RouteHttpUrl = string;
export type RouteComponentType = RouteComponentTypes;
export type RouteMetaUrl = string;
export type RouteDomContent = string;
export type RouteServerHost = string;
export type RouteErrorHead = string;
export type NavigateRoute = string;
export type NavigateData = object | null;
export interface NavigateOptions {
    meta_loader?: RouteMetaLoader;
    http_url_change?: RouteHttpUrlChange;
    method?: RouteMethod;
    header_load?: boolean;
    footer_load?: boolean;
}
export interface Containers {
    header: string | null;
    footer: string | null;
    body: string | null;
}
/**
 * Route engine types @param
 */
export interface RouteEngineInput {
    method: RouteMethod;
    content_url: RouteContentUrl;
    component_type: RouteComponentType;
    container?: RouteContainer;
    preloader: RoutePreloader;
    error_content: RouteErrorContent;
    data: RouteData;
    http_url_change: RouteHttpUrlChange;
    server_host: RouteServerHost;
    http_url: RouteHttpUrl;
}
/**
 * Route types defined for @param
 * of all route method call.
 */
export interface Route {
    method: RouteMethod;
    meta_loader: RouteMetaLoader;
    content_url: RouteContentUrl;
    component_type: RouteComponentType;
    container?: RouteContainer;
    preloader: RoutePreloader;
    data: RouteData;
    PathParamData?: PathParamData;
    error_content: RouteErrorContent;
    http_url_change: RouteHttpUrlChange;
    http_url: RouteHttpUrl;
    registered_url_pattern?: string;
}
export interface RegisterRoute {
    method: RouteMethod;
    meta_loader: RouteMetaLoader;
    content_url: RouteContentUrl;
    container?: RouteContainer;
    preloader: RoutePreloader;
    data: RouteData;
    error_content: RouteErrorContent;
    http_url_change: RouteHttpUrlChange;
    http_url: RouteHttpUrl;
}
export type RegisterdRoutesPages = RegisterRoute[];
export interface RouteHeaderFooter<T> {
    container?: RouteContainer;
    content_url: RouteContentUrl;
    preloader: RoutePreloader;
    error_content: RouteErrorContent;
    http_url: T;
}
export type RegisterdRoutesHeaders<T> = Array<RouteHeaderFooter<T>>;
export type RegisterdRoutesFooters<T> = Array<RouteHeaderFooter<T>>;
/**
 * Navigation Options types @param
 */
type NavigationHeaderLoad = boolean;
type NavigationFooterLoad = boolean;
export interface NavigationOptions {
    http_url?: RouteHttpUrl;
    meta_loader?: RouteMetaLoader;
    http_url_change?: RouteHttpUrlChange;
    method?: RouteMethod;
    header_load?: NavigationHeaderLoad;
    footer_load?: NavigationFooterLoad;
}
/**
 * Tab handler Options types @param
 */
export interface TabConfig {
    tabRoute: string;
    content_url: string;
    preloader: string;
    error_content: string;
    data?: RouteData;
}
export interface TabHandler {
    tabSwitcher: string;
    initialTab: string;
    activeSwitcherClass: string;
    activeTabClass: string;
    tabs: TabConfig[];
}
export type TabRegister = TabHandler[];
export {};
