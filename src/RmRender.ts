
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
                    container: Hroute.container,
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
                // Broute.content_url = `${route_split[0]}?`+query_data;
            }
            let meta_loader = false;
            let Route: Route = {
                method: Broute.method,
                meta_loader: meta_loader,
                content_url: route_content_url,
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
                // Broute.content_url = `${route_split[0]}?`+query_data;
            }
            let meta_loader = false;
            let Route: Route = {
                method: Broute.method,
                meta_loader: meta_loader,
                content_url: route_content_url,
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
                    container: Froute.container,
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
    RmLoaders.MetaLoader("");
    renderHeader();
    renderBody();
    renderFooter();
}