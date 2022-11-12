import { PersistStorage } from "./Global";
import RmValidator from "./RmValidator";
import { RouteEngineInput } from "./types";
import * as DomRenderer from "../src/DomRenderer";

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
            if(!RmValidator.isEmptyObject(Input.data)){
                let exist_q_mark: boolean = Input.content_url.includes("?");
                if (exist_q_mark) {
                    let split_c_u: Array<string> = Input.content_url.split("?");
                    if (split_c_u[split_c_u.length - 1] != '') {
                        Input.content_url += "&";
                    }
                }else{
                    Input.content_url += "?";
                }
            }

            Input.content_url = RmValidator.parseObjectToQueryString(Input.data);

        }

        xhttp.open(Input.method, Input.content_url);

        if (Input.method == "POST") {
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }

        xhttp.send(finalData);
        
    }
}