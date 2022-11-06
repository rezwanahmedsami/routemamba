
/**
 * types of every route method objects @param
 */
type RouteMethod            = string;
type RouteMetaLoader        = boolean;
type RouteContentUrl        = string;
type RouteContainer         = string;
type RoutePreloader         = string;
type RouteData              = string;
type RouteErrorContent      = string;
type RouteHttpUrlChange     = boolean;
type RouteHttpUrl           = boolean;


/**
 * Route types defined for @param
 * of all route method call.
 */
 export type Route  = {
    method?:             RouteMethod,
    meta_loader?:        RouteMetaLoader,
    content_url?:        RouteContentUrl,
    container?:          RouteContainer,
    preloader?:          RoutePreloader,
    data?:               RouteData,
    error_content?:      RouteErrorContent,
    http_url_change?:    RouteHttpUrlChange,
    http_url?:           RouteHttpUrl,
}

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