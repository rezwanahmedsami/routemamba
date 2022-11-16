/*!

MIT License

Copyright (c) 2022 Rezwan Ahmod Sami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


*/
// done
function nodeScriptReplace(node) {
	if ( nodeScriptIs(node) === true ) {
			node.parentNode.replaceChild( nodeScriptClone(node) , node );
	}
	else {
			var i = -1, children = node.childNodes;
			while ( ++i < children.length ) {
				  nodeScriptReplace( children[i] );
			}
	}

		return node;
}
// done
function nodeScriptClone(node){
		var script  = document.createElement("script");
		script.text = node.innerHTML;

		var i = -1, attrs = node.attributes, attr;
		while ( ++i < attrs.length ) {                                    
			script.setAttribute( (attr = attrs[i]).name, attr.value );
		}
		return script;
}
// done
function nodeScriptIs(node) {
		return node.tagName === 'SCRIPT';
}
// done
function loadScript(component) {
	let nodes;
	nodes = document.querySelectorAll(component);
	if (nodes != null && nodes != undefined) {
		nodes.forEach(n => {
			nodeScriptReplace(n);
		})
	}
}

class routemamba_init {
    constructor() {
        this.error = [];
    }
// done
    __render_DOM_root(content) {
        document.querySelector("body").innerHTML = content;
    }
// done
    __render_DOM(component, content) {
        component.innerHTML = content;
    }
// done
    __render_DOM_head(content) {
        document.querySelector("head").innerHTML = content;
    }
// done
    __parse_object_to_param(parsed_qs) {
        let data = '';
        if (parsed_qs != null) {
            let parsed_keys = Object.keys(parsed_qs);
            let parsed_values = Object.values(parsed_qs);

            for (let i = 0; i < parsed_keys.length; i++) {
                data += parsed_keys[i] + '=' + parsed_values[i];

                if ((parsed_keys.length - 1) != i) {
                    data += '&';
                }
            }
        }
        return data;
    }
// done
    __parse_object_to_param(parsed_qs) {
        let data = '';
        if (parsed_qs != null) {
            let parsed_keys = Object.keys(parsed_qs);
            let parsed_values = Object.values(parsed_qs);

            for (let i = 0; i < parsed_keys.length; i++) {
                data += parsed_keys[i] + '=' + parsed_values[i];

                if ((parsed_keys.length - 1) != i) {
                    data += '&';
                }
            }
        }
        return data;
    }
// done
    parse_query_string(query) {
        let vars = query.split("&");
        let query_string = {};
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            let key = decodeURIComponent(pair[0]);
            let value = decodeURIComponent(pair[1]);
            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
            } else if (typeof query_string[key] === "string") {
                let arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    }
// done
     validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }
// done
    isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
    }
// done
    __init_routemamba(method, content_url, component, preloader='', error_handler='', data='',type, http_url_change=false, server_host='', http_url='') {
        let component_div = document.querySelector(component);

        if (server_host != "") {
            var isValidServerHost = (server_host.indexOf("http://127.0.0.1") !== -1) || (server_host.indexOf("http://localhost") !== -1) || (server_host.indexOf("file://") !== -1) ? true : this.validURL(server_host) || (server_host.indexOf("tauri://localhost") !== -1) ? true : this.validURL(server_host);
            if (!isValidServerHost) {
                alert("The server host is invalid");
            }else{
                
                if ((server_host.indexOf("https://www.") !== -1) || (server_host.indexOf("http://www.") !== -1)) {
                    let current_url = window.location.href;
                    let split_url = current_url.split("/");
                    let new_url = "";
                    for(let i = 0; i < 3; i++){
                        if(i == 1){
                            new_url += "//";
                        }else{
                            new_url += split_url[i];
                        }
                    }
                  
                    new_url += "/";
                    if(http_url == server_host){
                        http_url = new_url;
                    }
                    server_host = new_url;
                }else if((server_host.indexOf("http://127.0.0.1") !== -1) || (server_host.indexOf("http://localhost") !== -1)){
                    let cur_url = window.location.href;
                    if (cur_url.indexOf("http://127.0.0.1") !== -1) {
                        if (server_host.indexOf("http://localhost") !== -1) {
                            server_host = server_host.replace("http://localhost", "http://127.0.0.1");
                        }
                    }else if(cur_url.indexOf("http://localhost") !== -1){
                        if (server_host.indexOf("http://127.0.0.1") !== -1) {
                            server_host = server_host.replace("http://127.0.0.1", "http://localhost");
                        }
                    }
                }else{
                    let current_url = window.location.href;
                    let split_server_host = server_host.split("/");
                    let new_host = "";
                    for (let x = 0; x < split_server_host.length; x++) {
                        if ((x == 0) && (split_server_host[x] == "https:") || (split_server_host[x] == "http:")) {
                            new_host = split_server_host[x]+"/";
                            continue;
                        }
                        if (x == 1 && ((current_url.indexOf("https://www.") !== -1) || (server_host.indexOf("http://www.") !== -1))) {
                            new_host += "www.";
                            continue;
                        }
                        if (split_server_host[x] == "") {
                            new_host += "/";
                            continue;
                        }
                        new_host += split_server_host[x];
                    }
                    
                    if(http_url == server_host){
                        http_url = new_host;
                    }
                    server_host = new_host;
                }
            }
        }

        if (http_url_change != false) {
            if (http_url != undefined) {
                if (type == 'route') {
                    
                    window.history.pushState(server_host, '', http_url);
                }
            }
        }

        if (component != '' && content_url != '') {

            const xhttp = new XMLHttpRequest();

            xhttp.onprogress = function () {
                if (preloader != undefined && preloader != '') {
					document.querySelector(component).innerHTML = preloader;
					loadScript(component);
                }
            }
            xhttp.onload = function () {
				document.querySelector(component).innerHTML = this.response;
				loadScript(component);
            }
            xhttp.onerror = function () {
				document.querySelector(component).innerHTML = error_handler;
				loadScript(component);
            }

            if (method == "POST") {
                let keys = Object.keys(data);
                let values = Object.values(data);
                data = "";
                for (let i = 0; i < keys.length; i++) {
                    data += `${keys[i]}=${values[i]}`;
                    if (i != (keys.length - 1)) {
                        data += "&";
                    }
                }
            }else if(method == "GET"){
                if (data != ""){
                    let exist_q_mark = content_url.includes("?");
                    if (exist_q_mark) {
                        let split_c_u = content_url.split("?");
                        if (split_c_u[split_c_u.length - 1] != "") {
                            content_url += "&";
                        }
                    }else{
                        content_url += "?";
                    }
                }
                let keys = Object.keys(data);
                let values = Object.values(data);
                for (let i = 0; i < keys.length; i++) {
                    content_url += `${keys[i]}=${values[i]}`;
                    if (i != (keys.length - 1)) {
                        content_url += "&";
                    }
                }
            }
            xhttp.open(method, content_url);
            if (method == "POST") {
                xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            xhttp.send(data);
        }

    }

}

class Routemamba extends routemamba_init {

    constructor() {
        super();
        this.engine = true;
        this.__init_error = [];

        this.server_host;
        this.meta_content_url;
        this.preloader;
        this.error_head = `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ERROR</title>`;

        this.__404_url = `
        <style>
        body{
            margin: 0;
            padding: 0;
            background-color: rgb(245, 245, 245);
         }
         .error_body{
            width: 100% !important;
            height: 100% !important;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
         }
         
         .error_card{
            display: block;
            width: 400px;
            background-color: rgb(255, 255, 255);
            border-radius: 5px;
            padding: 15px;
            box-shadow: 1px 0px 12px rgb(177, 177, 177);
         }
         
         .error_header{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid grey;
         }
         
         h1{
            color: rgb(248, 82, 82);
         }
         
         p{
            color: grey;
         }
         
         .red-box{
            background-color: rgba(255, 182, 182, 0.699);
            color: rgb(255, 88, 88);
            padding: 3px;
            border-radius: 3px;
            font-weight: 700;
         }
         
         .red-box-l{
            background-color: rgb(255, 174, 174);
            color: rgb(247, 72, 72);
            padding: 3px;
            border-radius: 3px;
            font-weight: 700;
         }
         
         .r{
            color: #65DBCA;
         }
         .p{
            color: #C792EA
         }
         
         .b{
            color: #82AAE5
         }
         
         .w{
            color: #c9D1DF;
         }
         
         .red{
            color: red;
         }
         
         .bg-code{
            background-color: #011627;
            color: rgb(1, 153, 22);
            display: block;
            padding: 5px;
            border-radius: 5px;
            font-weight: 700;
            width: 100%;
         }
        </style>
        <div class="error_body"><div class="error_card"><div class="error_header"><h1>404 HTTP URL</h1></div><div class="error_desc"><p><p class="red-box">Routemamba rendering error !!</p>Did you forget to declare <span class="red-box">http_url</span> on: </p><code class="bg-code"><span class="r">routemamba</span><span class="c">.</span><span class="b">route</span><span class="w">({</span><br><br>&nbsp&nbsp <span class="w">http_url:</span> <b class="red-box-l">undefined</b> &nbsp <b class="red"><<-- error !(undefined)</b><br><br><span class="w">});</span></code><p>Set <span class="red-box">http_url</span> to solve this problem</p><hr><p>Developed by: Rezwan Ahmod Sami</p></div></div></div>`;
        this.__404_server_host = `<style>
        body{
            margin: 0;
            padding: 0;
            background-color: rgb(245, 245, 245);
         }
         .error_body{
            width: 100% !important;
            height: 100% !important;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
         }
         
         .error_card{
            display: block;
            width: 400px;
            background-color: rgb(255, 255, 255);
            border-radius: 5px;
            padding: 15px;
            box-shadow: 1px 0px 12px rgb(177, 177, 177);
         }
         
         .error_header{
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid grey;
         }
         
         h1{
            color: rgb(248, 82, 82);
         }
         
         p{
            color: grey;
         }
         
         .red-box{
            background-color: rgba(255, 182, 182, 0.699);
            color: rgb(255, 88, 88);
            padding: 3px;
            border-radius: 3px;
            font-weight: 700;
         }
         
         .red-box-l{
            background-color: rgb(255, 174, 174);
            color: rgb(247, 72, 72);
            padding: 3px;
            border-radius: 3px;
            font-weight: 700;
         }
         
         .r{
            color: #65DBCA;
         }
         .p{
            color: #C792EA
         }
         
         .b{
            color: #82AAE5
         }
         
         .w{
            color: #c9D1DF;
         }
         
         .red{
            color: red;
         }
         
         .bg-code{
            background-color: #011627;
            color: rgb(1, 153, 22);
            display: block;
            padding: 5px;
            border-radius: 5px;
            font-weight: 700;
            width: 100%;
         }
        </style><div class="error_body"><div class="error_card"><div class="error_header"><h1>404 SERVER HOST</h1></div><div class="error_desc"><p><p class="red-box">Routemamba rendering error !!</p>Did you forget to declare <span class="red-box">server_host</span> on: </p><code class="bg-code"><span class="r">routemamba</span><span class="c">.</span><span class="b">server_host</span><span class="w">&nbsp=</span>&nbsp<b class="red-box-l">undefined</b> &nbsp <b class="red"><<-- error!!!</b><br><br></span></code><p>Set <span class="red-box">server_host</span> to solve this problem</p><hr><p>Developed by: Rezwan Ahmod Sami</p></div></div></div>`;
        this.error_404;
        this.error_400;
        this.error_500;

        this.construct_routes = [];
        this.construct_headers = [];
        this.construct_footers = [];

    }

    /*
        in route() method
        @param arr will take object as parameter.

        Example:

        routemamba.route({
            method: GET, // This is method of request, two method is accepted (POST/GET).
            meta_loader: true, // You need to define boolean(true/false) here to change the meta content on per link visits,
            content_url: "content/about.php", // there you need to give path of content_url, from where your contet will load in every route.
            component: "#root", // This is the component address, it will define by class or id in html where content will display.
            preloader: 'loading...', // This is preloader, there you can insert your preloader html content.
            data: {id: 2456}, // There you can pass data as javascript object
            error_handler: '<h2>error<h2>', // There you can put error content in html.
            http_url_change: true, // there you need to define boolean(true/false) value to declare that http url should change or not in browser.
            http_url: "about.php" // This is http url, it will visible in browser url tab.
        })
    */
   // done
    route(arr) {
        let method = arr.method;
        let content_url = arr.content_url;
        let component = arr.component;
        let preloader = arr.preloader;
        let error_handler = arr.error_handler;
        let data = arr.data;
        let http_url_change = arr.http_url_change;
        let http_url = arr.http_url;
        let meta_loader = arr.meta_loader;
        let get_route_param = '';
        let type = 'route';
        if (arr.type != undefined) {
            type  = arr.type;
        }

        if (http_url != undefined) {
            get_route_param = http_url.split("?");
        } else {
            this.__render_DOM_head(this.error_head);
            this.__render_DOM_root(this.__404_url);
        }

        if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
            content_url = content_url + '?' + this.__parse_object_to_param(data);
        }else if(data != undefined && data != null && !this.isEmptyObject(data) && data != ""){
            let query = this.__parse_object_to_param(data);
            content_url = content_url + '?' + query;
            http_url = http_url + "?"+ query;
        }
        if (meta_loader == true) {
            this.meta_loader(http_url);
        }

        if (http_url_change != undefined && http_url_change == false) {
            this.__init_routemamba(method, content_url, component, preloader, error_handler, data, type);
        } else if (http_url_change == true) {

            if (this.server_host != undefined && this.server_host != '') {
                if (http_url != undefined) {
                    this.__init_routemamba(method, content_url, component, preloader, error_handler, data,type, http_url_change, this.server_host, http_url);

                } else {
                    this.__render_DOM_head(this.error_head);
                    this.__render_DOM_root(this.__404_url);
                }
            } else {
                this.__render_DOM_head(this.error_head);
                this.__render_DOM_root(this.__404_server_host);
            }
        }

    }
// done
    http_routes(routes_arr) {
        let routes_keys = Object.keys(routes_arr);
        let routes_values = Object.values(routes_arr);

        // let construct_routes = [];

        for (let i = 0; i < routes_keys.length; i++) {

            this.construct_routes[routes_keys[i]] = routes_values[i];

        }

        window.addEventListener('popstate', (event)=>{
            this.__history_routes_handler(true);
        }
        );

    }
// done
    __history_routes_handler(status) {
        if (status == true) {
            let current_http_url = window.location.href;
            let split_url = current_http_url.split('/');
            let last_index = (split_url.length - 1);
            let route_path = split_url[last_index];
            let get_route_param = route_path.split("?");
            let data = '';
            if (get_route_param[1] != undefined) {
                data = this.parse_query_string(get_route_param[1]);
            }

            let parse_data = this.__parse_object_to_param(data);
            
            this.construct_routes.forEach(route=>{
                if (route.http_url == get_route_param[0]) {
                    if (route.method == 'GET') {
                        let content_path = route.content_url;
                        let route_split = content_path.split('?');
                        route.content_url = `${route_split[0]}?` + parse_data;
                    }
                    this.__render_header();
                    this.route(route);
                    this.__render_footers();
                }
            });
        }

    }
// done
    // This is pop route to go back url
    pop_route() {
        history.back();
        window.addEventListener('popstate', (event)=>{
            this.__history_routes_handler(true);
        });
    }
// done
    // This is push route to go next url already you visited.
    push_route() {
        history.go(1);
        window.addEventListener('popstate', (event)=>{
            this.__history_routes_handler(true);
        });
    }
// done
    navigate(route_to = null, data = null, options = {}){
        if (route_to != null) {
            this.construct_routes.forEach(r => {
                if (route_to.indexOf(r.http_url) !== -1) {
                    let h_url = r.http_url;
                    
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
                        this.construct_headers.forEach(h => {
                            if (h.http_url == h_url) {
                                this.route(h);
                            }
                        });
                    }

                    if (options.footer_load != undefined && typeof options.footer_load == "boolean") {
                        this.construct_footers.forEach(f => {
                            if (f.http_url == h_url) {
                                this.route(f);
                            }
                        });
                    }
                    this.route(r);
                }
            })
        }else{
            throw Error("naviagte method called but route path not defined.");
        }
    }
// ignored
    header_load(arr) {
        arr.method = 'GET';
        arr.http_url_change = false;
        arr.type  = "header"
            let route_http_url = arr.http_url;
            let split_url = route_http_url.split('/');
            let last_index = (split_url.length - 1);
            let route_path = split_url[last_index];
            let get_route_param = route_path.split("?");
            if (get_route_param[1] != undefined) {
                arr.data = this.parse_query_string(get_route_param[1]);
            }

        this.route(arr);

    }
//ignored
    footer_load(arr) {
        arr.method = 'GET';
        arr.data = '';
        arr.http_url_change = false;
        arr.type  = "footer"

        let route_http_url = arr.http_url;
            let split_url = route_http_url.split('/');
            let last_index = (split_url.length - 1);
            let route_path = split_url[last_index];
            let get_route_param = route_path.split("?");
            if (get_route_param[1] != undefined) {
                arr.data = this.parse_query_string(get_route_param[1]);
            }
        this.route(arr);
    }
// done
    page_headers_content(content_arr) {
        let routes_keys = Object.keys(content_arr);
        let routes_values = Object.values(content_arr);

        for (let i = 0; i < routes_keys.length; i++) {

            this.construct_headers[routes_keys[i]] = routes_values[i];

        }
    }
// done
    page_footers_content(content_arr) {
        let routes_keys = Object.keys(content_arr);
        let routes_values = Object.values(content_arr);

        for (let i = 0; i < routes_keys.length; i++) {

            this.construct_footers[routes_keys[i]] = routes_values[i];

        }
    }
// done
    meta_loader(route_url) {
        if (this.meta_content_url != undefined && this.meta_content_url != '') {
            let current_http_url = window.location.href;
            let split_url = current_http_url.split('/');
            let last_index = (split_url.length - 1);
            let route_path = split_url[last_index];
            let get_route_param = route_path.split("?");
            let route = '';
            let query_data = {};

            if (route_url == undefined || route_url == "") {
                let split_current_url = current_http_url.split('/');
                let cur_route_path = split_current_url[split_current_url.length - 1];
                let split_param_query = cur_route_path.split("?");
                route = get_route_param[0];
                if (split_param_query.length > 1) {
                    query_data = this.parse_query_string(split_param_query[1]);
                }
                query_data.route = route;
            } else {
                let split_route_url = route_url.split('/');
                let r_path_split =split_route_url[split_route_url.length - 1];
                let r_get_param_query = r_path_split.split("?");
                if (r_get_param_query.length > 1) {
                    query_data = this.parse_query_string(r_get_param_query[1]);
                }
                route = r_get_param_query[0];
                query_data.route = route;
            }
            let method = 'GET';
            let content_url = this.meta_content_url;
            let component = 'head meta';
            let preloader = '';
            let error_handler = '';
            let type  = 'meta'
            let data = query_data;

            this.__init_routemamba(method, content_url, component, preloader, error_handler, data, type);

        } else {
            this.__render_DOM_root("define meta content");
        }
    }

    // done
    initTabs(registerdTabs){
        registerdTabs.forEach(regTab => {
            if (regTab.tabSwitcher == undefined || regTab.tabSwitcher == "") {
                throw new Error("`tabSwitcher` field can't be undefined or empty in Tabs register.");
            }
            if (regTab.initialTab == undefined || regTab.initialTab == "") {
                throw new Error("`initialTab` field can't be undefined or empty in Tabs register.");
            }
            if (regTab.tabs == undefined || regTab.tabs == "") {
                throw new Error("`tabs` field can't be undefined in Tabs register.");
            }

            let tabSwitcher = document.querySelectorAll(regTab.tabSwitcher);
            tabSwitcher.forEach(switcher => {
                if (switcher.getAttribute("tabRoute") == regTab.initialTab) {
                    if (document.querySelector(`.${regTab.activeSwitcherClass}`) != null && document.querySelector(`.${regTab.activeSwitcherClass}`) != undefined) {
                        document.querySelector(`.${regTab.activeSwitcherClass}`).classList.remove(regTab.activeSwitcherClass);
                    }
                    switcher.classList.add(regTab.activeSwitcherClass);
                }
                switcher.addEventListener("click", ()=>{
                    let tabRoute = switcher.getAttribute("tabRoute");
                    if (tabRoute != undefined) {
                        if (document.querySelector(`.${regTab.activeSwitcherClass}`) != null && document.querySelector(`.${regTab.activeSwitcherClass}`) != undefined) {
 
                            document.querySelector(`.${regTab.activeSwitcherClass}`).classList.remove(regTab.activeSwitcherClass);
                        }
                        switcher.classList.add(regTab.activeSwitcherClass);
                        let tabComponent = document.getElementById(tabRoute);
                        if (tabComponent != null && tabComponent != undefined) {
                            if (regTab.activeTabClass != undefined && regTab.activeTabClass != null && regTab.activeTabClass != "") {
                                document.querySelector(`.${regTab.activeTabClass}`).classList.remove(regTab.activeTabClass);
                                tabComponent.classList.add(regTab.activeTabClass);
                            }else{
                                document.querySelector('.rm-tab-active').style.setProperty("display","", "");
                                document.querySelector('.rm-tab-active').classList.remove('rm-tab-active');
                                tabComponent.style.setProperty("display","block", "important");
                                tabComponent.classList.add('rm-tab-active');
                            }
                        }else{
                            throw new Error("`"+tabRoute+"` tabRoute container can't be undefined.");
                        }
                    }else{
                        throw new Error("`tabRoute` Attribute can't be undefined in tab switcher.");
                    }
                })
            });

            regTab.tabs.forEach(Tab => {
                if (Tab.tabRoute == regTab.initialTab) {
                    let tabComponent = document.getElementById(Tab.tabRoute);
                    if (tabComponent != null && tabComponent != undefined) {
                        if (regTab.activeTabClass != undefined && regTab.activeTabClass != null && regTab.activeTabClass != "") {
                            tabComponent.classList.add(regTab.activeTabClass);
                        }else{
                            tabComponent.style.setProperty("display","block", "important");
                            tabComponent.classList.add('rm-tab-active');

                        }
                    }else{
                        throw new Error("`"+Tab.tabRoute+"` tabRoute container can't be undefined.");
                    }
                }
                let routeInfo = {
                    method: "GET",
                    meta_loader: false,
                    content_url: Tab.content_url,
                    component: `#${Tab.tabRoute}`,
                    preloader: Tab.preloader,
                    error_handler: Tab.error_handler,
                    http_url_change: false,
                    http_url: ""
                 }
                 if (Tab.data != undefined) {
                    routeInfo.data = Tab.data;
                 }
                this.route(routeInfo);
            });
        });
    }
    // done
    __render_header() {
        let current_http_url = window.location.href;
        let split_url = current_http_url.split('/');
        let last_index = (split_url.length - 1);
        let route_path = split_url[last_index];
        let get_route_param = route_path.split("?");
        let data = '';
        if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
        }

        let parse_data = this.__parse_object_to_param(data);

        this.construct_headers.forEach(route=>{
            if (route.http_url == get_route_param[0]) {
                if (route.method == 'GET') {
                    let content_path = route.content_url;
                    let route_split = content_path.split('?');
                    route.content_url = `${route_split[0]}?` + parse_data;
                }
                route.meta_loader = false;
                this.route(route);
            }
        }
        );
    }
// done
    __render_body() {
        let current_http_url = window.location.href;
        let split_url = current_http_url.split('/');
        let last_index = (split_url.length - 1);
        let route_path = split_url[last_index];
        let get_route_param = route_path.split("?");
        let data = '';
        if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
        }

        let parse_data = this.__parse_object_to_param(data);
        this.construct_routes.forEach(route=>{
            if (route.http_url == get_route_param[0]) {
                if (route.method == 'GET') {
                    let content_path = route.content_url;
                    let route_split = content_path.split('?');
                    route.content_url = `${route_split[0]}?` + parse_data;
                }
                route.meta_loader = false;
                this.route(route);
            }else if (split_url.length < 4 && route.http_url == "") {
                if (route.method == 'GET') {
                    let content_path = route.content_url;
                    let route_split = content_path.split('?');
                    route.content_url = `${route_split[0]}?` + parse_data;
                }
                route.meta_loader = false;
                this.route(route);
            }
        }
        );
    }
// done
    __render_footers() {
        let current_http_url = window.location.href;
        let split_url = current_http_url.split('/');
        let last_index = (split_url.length - 1);
        let route_path = split_url[last_index];
        let get_route_param = route_path.split("?");
        let data = '';
        if (get_route_param[1] != undefined) {
            data = this.parse_query_string(get_route_param[1]);
        }

        let parse_data = this.__parse_object_to_param(data);
        this.construct_footers.forEach(route=>{
            if (route.http_url == get_route_param[0]) {
                if (route.method == 'GET') {
                    let content_path = route.content_url;
                    let route_split = content_path.split('?');
                    route.content_url = `${route_split[0]}?` + parse_data;
                }
                route.meta_loader = false;
                this.route(route);
            }
        }
        );
    }
// done
    __render() {
        this.meta_loader();
        this.__render_header();
        this.__render_body();
        this.__render_footers();
    }

}

const routemamba = new Routemamba();

module.exports = routemamba;