import { type RegisterdRoutesFooters, type RegisterdRoutesHeaders, type RegisterdRoutesPages, type RouteErrorHead, type RouteMetaUrl, type RouteServerHost } from './types';
/**
 * there all golbal array, object and variable initialized
 */
export declare enum RouteComponentTypes {
    HEADER = 0,
    META = 1,
    BODY = 2,
    FOOTER = 3,
    TAB = 4
}
export declare namespace HtmlSelector {
    var Root: string;
    var Header: string;
    var Footer: string;
    var Body: string;
}
export declare namespace RoutesStorage {
    var RoutesPages: RegisterdRoutesPages;
    var RoutesHeaders: RegisterdRoutesHeaders<string[]>;
    var RoutesFooters: RegisterdRoutesFooters<string[]>;
    var server_host: RouteServerHost;
    var meta_content_url: RouteMetaUrl;
    namespace RouteContentsState {
        namespace renderStatus {
            var header: boolean;
            var body: boolean;
            var footer: boolean;
        }
        var ShouldHeaderload: boolean;
        var ShouldFooterload: boolean;
        var HeaderContent: string | null;
        var FooterContent: string | null;
        var BodyContent: string | null;
        var MetaContent: string | null;
        var HttpUrl: string | null;
        var navigationCallback: Function | null;
    }
}
export declare namespace RenderConfig {
    var await_rendering: boolean;
}
/**
 * this is persist storage to store readonly value.
 */
export declare namespace PersistStorage {
    interface persistNetworkConfig {
        readonly localhost: string;
        readonly localIp: string;
        readonly localFilePath: string;
        readonly tauriHost: string;
        readonly http_www: string;
        readonly https_www: string;
    }
    interface persistantDomContent {
        readonly ErrorHeadContent: RouteErrorHead;
        readonly DefineMetaUrlError: string;
        readonly NavigateRoutePathUndefined: string;
        readonly __404_urlErrorContent: string;
        readonly __404_ServerHostErrorContent: string;
    }
    export var NetworkConfig: persistNetworkConfig;
    export var DomContent: persistantDomContent;
    export {};
}
