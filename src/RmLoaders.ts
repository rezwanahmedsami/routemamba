import { PersistStorage, RoutesStorage } from "./Global";
import { RouteData, RouteEngineInput, RouteHttpUrl } from "./types";
import * as DomRenderer from "./DomRenderer";
import RmValidator from "./RmValidator";
import { RouteEngineInit } from "./RoutesInitializer";

export const MetaLoader = (httpUrl: RouteHttpUrl): void =>{
    if (RoutesStorage.meta_content_url != undefined && RoutesStorage.meta_content_url != '') {
        let current_url: string = window.location.href;
        let split_url: Array<string> = current_url.split("/");
        let last_index = (split_url.length - 1);
        let route_path = split_url[last_index];
        let get_route_param = route_path.split("?");
        let data: object = {};
        let query_data: any = {};

        if (httpUrl == undefined || httpUrl == '') {
            if (get_route_param.length > 1) {
                query_data = RmValidator.parseQueryString(get_route_param[1]);
            }
            query_data = get_route_param[0];
        }else{
            let split_http_url = httpUrl.split("/");
            let http_url_path_split = split_http_url[split_http_url.length - 1];
            let http_url_param_query = http_url_path_split.split("?");
            if (http_url_param_query.length > 1) {
                query_data = RmValidator.parseQueryString(http_url_param_query[1]);
            }
            query_data.route = http_url_param_query[0];
        }
        const RouteEngineInput: RouteEngineInput = {
            method: 'GET',
            content_url: RoutesStorage.meta_content_url,
            container: 'head meta',
            preloader: '',
            error_content: '',
            data: query_data,
            http_url_change: false,
            server_host: RoutesStorage.server_host,
            http_url: ''
        }
        RouteEngineInit(RouteEngineInput);
    }else{
        DomRenderer.__render_DOM_root(PersistStorage.DomContent.DefineMetaUrlError);
        throw new Error(PersistStorage.DomContent.DefineMetaUrlError);
    }
}