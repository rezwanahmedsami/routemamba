import { PersistStorage, RoutesStorage } from "./Global";
import { Route, RouteData, RouteEngineInput, RouteHttpUrl } from "./types";
import * as DomRenderer from "./DomRenderer";
import RmValidator from "./RmValidator";
import { RouteEngineInit } from "./RoutesInitializer";
import * as RmRender from "./RmRender";
import * as RoutesInitializer from "./RoutesInitializer";

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
            // query_data.route = get_route_param[0];
            query_data.route = "/";
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

export const historyRoutesLoader = (status: boolean): void =>{
    if (status == true) {
        let current_http_url: string = window.location.href;
        let split_url: Array<string> = current_http_url.split('/');
        let last_index: number = (split_url.length - 1);
        let route_path: string = split_url[last_index];
        let get_route_param: Array<string> = route_path.split("?");
        let data: RouteData = {};
        let query_data: string = '';

        if (get_route_param[1] != undefined) {
            data = RmValidator.parseQueryString(get_route_param[1]);
        }

        query_data = RmValidator.parseObjectToQueryString(data);

        let RoutePages = RoutesStorage.RoutesPages;
        for (let i = 0; i < RoutePages.length; i++) {
            if (RoutePages[i].http_url == get_route_param[0]) {
                // let content_path = RoutePages[i].content_url;
                // if (RoutePages[i].method == "GET") {
                //     let route_split = content_path.split("?");
                //     content_path = `${route_split[0]}?` + query_data;
                // }
                // let Route: Route = {
                //     method: RoutePages[i].method,
                //     meta_loader: RoutePages[i].meta_loader,
                //     content_url: content_path,
                //     container: RoutePages[i].container,
                //     preloader: RoutePages[i].preloader,
                //     data: RoutePages[i].data,
                //     error_content: RoutePages[i].error_content,
                //     http_url_change: RoutePages[i].http_url_change,
                //     http_url: RoutePages[i].http_url
                // }
                RmRender.renderHeader();
                RmRender.renderBody();
                // RoutesInitializer.route(Route);
                RmRender.renderFooter();
                break;
            }
        }
    }
}