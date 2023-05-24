import { PersistStorage, RoutesStorage, RouteComponentTypes } from "./Global";
import RmValidator from "./RmValidator";
import { Route, RouteContentUrl, RouteData, RouteEngineInput, RouteHttpUrl } from "./types";
import * as DomRenderer from "./DomRenderer";
import * as RmLoaders from "./RmLoaders";

export const RouteEngineInit = (Input: RouteEngineInput): void => {

    let current_url: string = window.location.href;

    if(Input.server_host != ""){
        const isValidServerHost = RmValidator.isValidServerHost(Input.server_host);

        if(!isValidServerHost){
            alert("The server host is invalid");
        }else{
            if ((Input.server_host.indexOf(PersistStorage.NetworkConfig.https_www) !== -1) || (Input.server_host.indexOf(PersistStorage.NetworkConfig.http_www) !== -1)) {

                
                let split_url: Array<string> = current_url.split("/");
                let new_url: string = "";

                for (let i = 0; i < 3; i++) {
                    
                    if (i == 1) {
                        new_url += "//";
                    }else{
                        new_url += split_url[i];
                    }
                    
                }

                new_url += "/";
                if (Input.http_url == Input.server_host) {
                    Input.http_url = new_url;
                }
                Input.server_host = new_url;
                
            }else if((Input.server_host.indexOf(PersistStorage.NetworkConfig.localIp) !== -1) || (Input.server_host.indexOf(PersistStorage.NetworkConfig.localhost) !== -1)){

                if (current_url.indexOf(PersistStorage.NetworkConfig.localIp) !== -1) {
                    if (Input.server_host.indexOf(PersistStorage.NetworkConfig.localhost) !== -1) {
                        Input.server_host = Input.server_host.replace(PersistStorage.NetworkConfig.localhost, PersistStorage.NetworkConfig.localIp);
                    }
                }else if(current_url.indexOf(PersistStorage.NetworkConfig.localhost) !== -1){
                    if (Input.server_host.indexOf(PersistStorage.NetworkConfig.localIp) !== -1) {
                        Input.server_host = Input.server_host.replace(PersistStorage.NetworkConfig.localIp, PersistStorage.NetworkConfig.localhost);
                    }
                }
            }else{
                let split_server_host: Array<string> = Input.server_host.split("/");
                let new_host: string = "";

                for (let x = 0; x < split_server_host.length; x++) {
                    
                    if ((x == 0) && (split_server_host[x] == "https:") || (split_server_host[x] == "http:")) {
                        new_host = split_server_host[x]+"/";
                        continue;
                    }

                    if (x == 1 && ((current_url.indexOf(PersistStorage.NetworkConfig.http_www) !== -1) || (Input.server_host.indexOf(PersistStorage.NetworkConfig.http_www) !== -1))) {
                        new_host += "www.";
                    }
                    if (split_server_host[x] == "") {
                        new_host += "/";
                        continue;
                    }

                    new_host += split_server_host[x];
                    
                }
                if (Input.http_url == Input.server_host) {
                    Input.http_url = new_host;
                }

                Input.server_host = new_host
            }
        }
    }


    if (Input.http_url_change != false) {
        if (Input.http_url != undefined) {
            if(Input.http_url == ""){
                Input.http_url = Input.server_host;
            }
            window.history.pushState(Input.server_host, '', Input.http_url);
        }
    }

    if (Input.container != '' && Input.content_url != '') {
        const xhttp: XMLHttpRequest = new XMLHttpRequest();

        xhttp.onprogress = function(){
            if (Input.preloader != undefined && Input.preloader != '') {
                DomRenderer.__render_DOM(Input.container, Input.preloader);
            }
        }

        xhttp.onload = function (this: XMLHttpRequest, e: ProgressEvent){
            DomRenderer.__render_DOM(Input.container, this.response);
        }

        xhttp.onerror = function (this: XMLHttpRequest, e: ProgressEvent) {
            DomRenderer.__render_DOM(Input.container, Input.error_content);
            throw new Error(this.response);
        }

        let finalData: string = "";

        if (Input.method == "POST") {
            finalData = RmValidator.parseObjectToQueryString(Input.data);
        }else if(Input.method == "GET"){

            if (RoutesStorage.meta_content_url == Input.content_url) {
                if(!RmValidator.isEmptyObject(Input.data)){
                    let exist_q_mark: boolean = Input.content_url.includes("?");
                    if (exist_q_mark) {
                        let split_c_u: Array<string> = Input.content_url.split("?");
                        if (split_c_u[split_c_u.length - 1] != '' && split_c_u[split_c_u.length - 1] != undefined) {
                            Input.content_url += "&";
                        }
                    }else{
                        Input.content_url += "?";
                    }
                }
    
                Input.content_url += RmValidator.parseObjectToQueryString(Input.data);
            }

        }

        xhttp.open(Input.method, Input.content_url);

        if (Input.method == "POST") {
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }

        xhttp.send(finalData);
        
    }
}

export const route = (Route: Route): void =>{
    let split_http_url: Array<string> = [];
    let RouteHttpUrl: RouteHttpUrl = Route.http_url;
    let RouteContentUrl: RouteContentUrl = Route.content_url;
    let RouteData: RouteData = {};
    let ComponentType: RouteComponentTypes = Route.component_type;
    console.log("url: "+RouteContentUrl);
    console.log("component type: "+ComponentType);
    DomRenderer.generate_required_all_root_elements();
    if (Route.http_url != undefined) {
        split_http_url = Route.http_url.split("?");
    }else{
        DomRenderer.__render_DOM_head(PersistStorage.DomContent.ErrorHeadContent);
        DomRenderer.__render_DOM_root(PersistStorage.DomContent.__404_urlErrorContent);
    }

    if (split_http_url[1] != undefined) {
        RouteData = RmValidator.parseQueryString(split_http_url[1]);

        RouteContentUrl = RouteContentUrl+"?"+split_http_url[1];
    }else if(Route.data != undefined && Route.data != null && !RmValidator.isEmptyObject(Route.data)){
        let query = RmValidator.parseObjectToQueryString(Route.data);
        RouteContentUrl = RouteContentUrl+"?"+query;
        RouteHttpUrl = RouteHttpUrl+"?"+query;
    }

    if (Route.meta_loader) {
        RmLoaders.MetaLoader(RouteHttpUrl);
    }

    const RouteEngineInput: RouteEngineInput = {
        method: Route.method,
        content_url: RouteContentUrl,
        component_type: Route.component_type,
        container: Route.container,
        preloader: Route.preloader,
        error_content: Route.preloader,
        data: RouteData,
        http_url_change: Route.http_url_change,
        server_host: RoutesStorage.server_host,
        http_url: RouteHttpUrl
    }

    if (Route.http_url_change != undefined && !Route.http_url_change) {
        RouteEngineInit(RouteEngineInput);
    }else if(Route.http_url_change == true){
        if (RoutesStorage.server_host != undefined && RoutesStorage.server_host != '') {
            RouteEngineInit(RouteEngineInput);
        }else{
            DomRenderer.__render_DOM_head(PersistStorage.DomContent.ErrorHeadContent);
            DomRenderer.__render_DOM_root(PersistStorage.DomContent.__404_ServerHostErrorContent);
        }
    }

}