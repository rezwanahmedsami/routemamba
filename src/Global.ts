import { RegisterdRoutesFooters, RegisterdRoutesHeaders, RegisterdRoutesPages, RouteErrorHead, RouteMetaUrl, RouteServerHost } from "./types";

/**
 * there all golbal array, object and variable initialized
 */
export namespace  RoutesStorage {
    export var RoutesPages:             RegisterdRoutesPages = [];
    export var RoutesHeaders:           RegisterdRoutesHeaders<Array<string>> = [];
    export var RoutesFooters:           RegisterdRoutesFooters<Array<string>> = [];
    export var server_host:             RouteServerHost = "";
    export var meta_content_url:        RouteMetaUrl = "";
}

/**
 * this is persist storage to store readonly value.
 */
export namespace PersistStorage {

    interface persistantDomContent{
        readonly ErrorHeadContent:      RouteErrorHead;
    }

    export var DomContent:              persistantDomContent = {
        ErrorHeadContent: `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ERROR</title>`,
    };
}