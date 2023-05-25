
/**
 * @functions
 */

import { RoutesStorage, RenderConfig } from "./Global";
import RmValidator from "./RmValidator";
import { Route, RouteContentUrl, RouteData } from "./types";
import { RouteComponentTypes } from "./Global";
import * as RoutesInitializer from "./RoutesInitializer";
import * as RmLoaders from "./RmLoaders";
import {generate_required_all_root_elements} from "./DomRenderer";

export const renderHeader = (): void => {
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

    RoutesStorage.RoutesHeaders.forEach(Hroute => {
        for (let i = 0; i < Hroute.http_url.length; i++) {
            let http_url = Hroute.http_url[i];
            if (http_url == "/") {
                http_url = "";
            }
            if (http_url == get_route_param[0]) {
                let content_path = Hroute.content_url;
                let route_split = content_path.split("?");
                let content_url: RouteContentUrl = `${route_split[0]}?`+query_data;

                let Route: Route = {
                    method: 'GET',
                    meta_loader: false,
                    content_url: content_url,
                    component_type: RouteComponentTypes.HEADER,
                    preloader: Hroute.preloader,
                    data: {},
                    error_content: Hroute.error_content,
                    http_url_change: false,
                    http_url: http_url
                }

                RoutesInitializer.route(Route);
                break;
            }
        }
    });

}

export const renderBody = (): void =>{
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

    RoutesStorage.RoutesPages.forEach(Broute => {
        let http_url = Broute.http_url;
        if (http_url == "/") {
            http_url = "";
        }
        if (http_url == get_route_param[0]) {
            let route_content_url: RouteContentUrl = '';
            if (Broute.method == 'GET') {
                let content_path = Broute.content_url;
                let route_split = content_path.split("?");
                route_content_url = `${route_split[0]}?`+query_data;
            }
            let meta_loader = true;
            let Route: Route = {
                method: Broute.method,
                meta_loader: meta_loader,
                content_url: route_content_url,
                component_type: RouteComponentTypes.BODY,
                container: Broute.container,
                preloader: Broute.preloader,
                data: Broute.data,
                error_content: Broute.error_content,
                http_url_change: Broute.http_url_change,
                http_url: http_url
            }
            RoutesInitializer.route(Route);
        }else if(split_url.length < 4 && http_url == ''){
            let route_content_url: RouteContentUrl = '';
            if (Broute.method == 'GET') {
                let content_path = Broute.content_url;
                let route_split = content_path.split("?");
                route_content_url = `${route_split[0]}?`+query_data;
            }
            let meta_loader = true;
            let Route: Route = {
                method: Broute.method,
                meta_loader: meta_loader,
                content_url: route_content_url,
                component_type: RouteComponentTypes.BODY,
                container: Broute.container,
                preloader: Broute.preloader,
                data: Broute.data,
                error_content: Broute.error_content,
                http_url_change: Broute.http_url_change,
                http_url: http_url
            }
            RoutesInitializer.route(Route);
        }
    });
}

export const renderFooter = (): void =>{
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

    RoutesStorage.RoutesFooters.forEach(Froute => {
        
        for (let i = 0; i < Froute.http_url.length; i++) {
            let http_url = Froute.http_url[i];
            if (http_url == "/") {
                http_url = "";
            }
            if (http_url == get_route_param[0]) {
                let content_path = Froute.content_url;
                let route_split = content_path.split("?");
                let content_url: RouteContentUrl = `${route_split[0]}?`+query_data;

                let Route: Route = {
                    method: 'GET',
                    meta_loader: false,
                    content_url: content_url,
                    component_type: RouteComponentTypes.FOOTER,
                    preloader: Froute.preloader,
                    data: {},
                    error_content: Froute.error_content,
                    http_url_change: false,
                    http_url: http_url
                }

                RoutesInitializer.route(Route);
                break;
            }
        }
    });
}

export const render = (): void =>{
    generate_required_all_root_elements();
    RmLoaders.MetaLoader("");
    renderHeader();
    renderFooter();
    renderBody();
}

export const await_rendering = (status: boolean) => {
    RenderConfig.await_rendering = status
}