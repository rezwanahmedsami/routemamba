
/**
 * types of every route method objects @param
 */
export type RouteMethod            = string;
export type RouteMetaLoader        = boolean;
export type RouteContentUrl        = string;
export type RouteContainer         = string;
export type RoutePreloader         = string;
export type RouteData              = object;
export type RouteErrorContent      = string;
export type RouteHttpUrlChange     = boolean;
export type RouteHttpUrl           = string;
export type RouteMetaUrl           = string;
export type RouteDomContent        = string;
export type RouteServerHost        = string;
export type RouteErrorHead         = string;


/**
 * Route engine types @param
 */
export type RouteEngine = {
    method:             RouteMethod,
    content_url:        RouteContentUrl,
    container:          RouteContainer,
    preloader:          RoutePreloader,
    error_content:      RouteErrorContent,
    data:               RouteData,
    http_url_change:    RouteHttpUrlChange,
    server_host:        RouteServerHost,
    http_url:           RouteHttpUrl
}

/**
 * Route types defined for @param
 * of all route method call.
 */
 export type Route  = {
    method:             RouteMethod,
    meta_loader:        RouteMetaLoader,
    content_url:        RouteContentUrl,
    container:          RouteContainer,
    preloader:          RoutePreloader,
    data:               RouteData,
    error_content:      RouteErrorContent,
    http_url_change:    RouteHttpUrlChange,
    http_url:           RouteHttpUrl,
}

export type RegisterdRoutesPages = Array<Route>;

export type RouteHeaderFooter<T> = {
    container:          RouteContainer,
    content_url:        RouteContentUrl,
    preloader:          RoutePreloader,
    error_content:      RouteErrorContent,
    http_url:           T
}

export type RegisterdRoutesHeaders<T> = Array<RouteHeaderFooter<T>>;
export type RegisterdRoutesFooters<T> = Array<RouteHeaderFooter<T>>;



/**
 * Navigation Options types @param
 */

type NavigationHeaderLoad = boolean;
type NavigationFooterLoad = boolean;

export type NavigationOptions  = {
    http_url?:          RouteHttpUrl,
    meta_loader?:       RouteMetaLoader,
    http_url_change?:   RouteHttpUrlChange,
    method?:            RouteMethod,
    header_load?:       NavigationHeaderLoad,
    footer_load?:       NavigationFooterLoad
}

/**
 * Tab handler Options types @param
 */
export type TabConfig = {
    tabRoute:           string,
    content_url:        string,
    preloader:          string,
    error_handler:      string
}

export type TabHandler = {
    tabSwitcher:            string,
    initialTab:             string,
    activeSwitcherClass:    string,
    activeTabClass:         string,
    tabs:                   Array<TabConfig>
}

export type TabRegister = Array<TabHandler>;