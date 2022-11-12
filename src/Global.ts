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

    interface persistNetworkConfig {
        readonly localhost:                     string;
        readonly localIp:                       string;
        readonly localFilePath:                 string;
        readonly tauriHost:                     string;
        readonly http_www:                      string;
        readonly https_www:                     string;
    }

    interface persistantDomContent{
        readonly ErrorHeadContent:              RouteErrorHead;
        readonly DefineMetaUrlError:            string;
        readonly __404_urlErrorContent:         string;
        readonly __404_ServerHostErrorContent:  string;
    }

    export var NetworkConfig:    persistNetworkConfig = {
        localhost: 'http://localhost',
        localIp: 'http://127.0.0.1',
        localFilePath: 'file://',
        tauriHost:   'tauri://localhost',
        http_www: "http://www.",
        https_www:  "https://www."
    }

    export var DomContent:              persistantDomContent = {
        ErrorHeadContent: `<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ERROR</title>`,
        DefineMetaUrlError: 'Define Meta Content Url',
        __404_urlErrorContent: `
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
        <div class="error_body"><div class="error_card"><div class="error_header"><h1>404 HTTP URL</h1></div><div class="error_desc"><p><p class="red-box">Routemamba rendering error !!</p>Did you forget to declare <span class="red-box">http_url</span> on: </p><code class="bg-code"><span class="r">routemamba</span><span class="c">.</span><span class="b">route</span><span class="w">({</span><br><br>&nbsp&nbsp <span class="w">http_url:</span> <b class="red-box-l">undefined</b> &nbsp <b class="red"><<-- error !(undefined)</b><br><br><span class="w">});</span></code><p>Set <span class="red-box">http_url</span> to solve this problem</p><hr><p>Developed by: Rezwan Ahmod Sami</p></div></div></div>`,
         __404_ServerHostErrorContent: `<style>
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
         </style><div class="error_body"><div class="error_card"><div class="error_header"><h1>404 SERVER HOST</h1></div><div class="error_desc"><p><p class="red-box">Routemamba rendering error !!</p>Did you forget to declare <span class="red-box">server_host</span> on: </p><code class="bg-code"><span class="r">routemamba</span><span class="c">.</span><span class="b">server_host</span><span class="w">&nbsp=</span>&nbsp<b class="red-box-l">undefined</b> &nbsp <b class="red"><<-- error!!!</b><br><br></span></code><p>Set <span class="red-box">server_host</span> to solve this problem</p><hr><p>Developed by: Rezwan Ahmod Sami</p></div></div></div>`
    };
}