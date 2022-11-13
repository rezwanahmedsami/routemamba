import { PersistStorage, RoutesStorage } from "./Global";
import RmValidator from "./RmValidator";
import * as RoutesInitializer from "./RoutesInitializer";
import {NavigateRoute, NavigateData, NavigateOptions, RouteHttpUrl, Route} from "./types";

export const navigate = (route_to: NavigateRoute = null, data: NavigateData = null, options: NavigateOptions = {}) =>{
    if (route_to != null) {
        RoutesStorage.RoutesPages.forEach((r, i) => {
            if (route_to.indexOf(r.http_url) !== -1) {
                
                let h_url: RouteHttpUrl = r.http_url;
                r.http_url = route_to;

                if (data != null) {
                    r.data = data;
                }


                    if (options.meta_loader != undefined && typeof options.meta_loader == "boolean") {
                        r.meta_loader = options.meta_loader;
                    }
                    if (options.http_url_change != undefined && typeof options.http_url_change == "boolean") {
                        r.http_url_change = options.http_url_change;
                    }else{
                        r.http_url_change = true;
                    }

                    if (options.method != undefined && options.method != "") {
                        r.method = options.method;
                    }

                    if (options.header_load != undefined && typeof options.header_load == "boolean") {
                        RoutesStorage.RoutesHeaders.forEach(h => {
                            for (let i = 0; i < h.http_url.length; i++) {
                                if (h.http_url[i] == h_url) {
                                    let Route: Route = {
                                        method: 'GET',
                                        meta_loader: false,
                                        content_url: h.content_url,
                                        container: h.container,
                                        preloader: h.preloader,
                                        data: {},
                                        error_content: h.error_content,
                                        http_url_change: false,
                                        http_url: h.http_url[i]
                                    }
                                    RoutesInitializer.route(Route);
                                    break;
                                }
                            }
                        });
                    }

                    if (options.footer_load != undefined && typeof options.footer_load == "boolean") {
                        RoutesStorage.RoutesFooters.forEach(f => {
                            for (let i = 0; i < f.http_url.length; i++) {
                                if (f.http_url[i] == h_url) {
                                    let Route: Route = {
                                        method: 'GET',
                                        meta_loader: false,
                                        content_url: f.content_url,
                                        container: f.container,
                                        preloader: f.preloader,
                                        data: {},
                                        error_content: f.error_content,
                                        http_url_change: false,
                                        http_url: f.http_url[i]
                                    }
                                    RoutesInitializer.route(Route);
                                    break;
                                }
                            }
                        });
                    }
                
                RoutesInitializer.route(r);
            }else if((route_to.indexOf(r.http_url) === -1) && i == (RoutesStorage.RoutesPages.length - 1)){
                throw new Error(`${route_to} is not a registered routes.`);
            }
        });
    }else{
        throw Error(PersistStorage.DomContent.NavigateRoutePathUndefined);
    }
}