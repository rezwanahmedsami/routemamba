
/**
 * @functions
 */

import { RoutesStorage } from "./Global";
import RmValidator from "./RmValidator";
import { Route, RouteContentUrl, RouteData } from "./types";

import * as RoutesInitializer from "./RoutesInitializer";
import * as RmLoaders from "./RmLoaders";

const renderHeader = (): void =>{
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
            if (Hroute.http_url[i] == get_route_param[0]) {
                let content_path = Hroute.content_url;
                let route_split = content_path.split("?");
                let content_url: RouteContentUrl = `${route_split[0]}?`+query_data;

                let Route: Route = {
                    method: 'GET',
                    meta_loader: false,
                    content_url: content_url,
                    container: Hroute.container,
                    preloader: Hroute.preloader,
                    data: {},
                    error_content: Hroute.error_content,
                    http_url_change: false,
                    http_url: Hroute.http_url[i]
                }

                RoutesInitializer.route(Route);
                break;
            }
        }
    });

}

const renderBody = (): void =>{
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
        if (Broute.http_url == get_route_param[0]) {
            if (Broute.method == 'GET') {
                let content_path = Broute.content_url;
                let route_split = content_path.split("?");
                Broute.content_url = `${route_split[0]}?`+query_data;
            }
            Broute.meta_loader = false;
            RoutesInitializer.route(Broute);
        }else if(split_url.length < 4 && Broute.http_url == ''){
            if (Broute.method == 'GET') {
                let content_path = Broute.content_url;
                let route_split = content_path.split("?");
                Broute.content_url = `${route_split[0]}?`+query_data;
            }
            Broute.meta_loader = false;
            RoutesInitializer.route(Broute);
        }
    });
}

const renderFooter = (): void =>{
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
            if (Froute.http_url[i] == get_route_param[0]) {
                let content_path = Froute.content_url;
                let route_split = content_path.split("?");
                let content_url: RouteContentUrl = `${route_split[0]}?`+query_data;

                let Route: Route = {
                    method: 'GET',
                    meta_loader: false,
                    content_url: content_url,
                    container: Froute.container,
                    preloader: Froute.preloader,
                    data: {},
                    error_content: Froute.error_content,
                    http_url_change: false,
                    http_url: Froute.http_url[i]
                }

                RoutesInitializer.route(Route);
                break;
            }
        }
    });
}

export const render = (): void =>{
    RmLoaders.MetaLoader("");
    renderHeader();
    renderBody();
    renderFooter();
}