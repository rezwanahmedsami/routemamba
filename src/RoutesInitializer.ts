/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PersistStorage,
  RoutesStorage,
  RouteComponentTypes,
  HtmlSelector,
  RenderConfig,
  Info,
  OnDemandTabViewStorage,
} from './Global';
import RmValidator from './RmValidator';
import {
  type Route,
  type RouteContentUrl,
  type RouteData,
  type RouteEngineInput,
  type RouteHttpUrl,
} from './types';
import * as DomRenderer from './DomRenderer';
import * as RmLoaders from './RmLoaders';
import * as Controllers from './Controllers';

export const RouteEngineInit = (Input: RouteEngineInput): void => {
  const current_url: string = window.location.href;

  const addPreloader = (): void => {
    if (
      Input.preloader != undefined &&
      Input.preloader != '' &&
      Input.container != undefined
    ) {
      DomRenderer.__render_DOM(Input.container, Input.preloader);
    }
  };

  switch (Input.component_type) {
    case RouteComponentTypes.HEADER:
      Input.container = HtmlSelector.Header;
      break;
    case RouteComponentTypes.BODY:
      Input.container = HtmlSelector.Body;
      break;
    case RouteComponentTypes.FOOTER:
      Input.container = HtmlSelector.Footer;
      break;
    case RouteComponentTypes.ON_DEMAND_TABVIEW:
      Input.container = HtmlSelector.OnDemandTabView;
      let OnDemandTabViewElement = document.querySelector(
        `${Input.container}`
      ) as HTMLElement;
      if (
        OnDemandTabViewElement == undefined ||
        OnDemandTabViewElement == null
      ) {
        throw new Error(
          `<on-demand-tab-view> tag not found. can't load on-demand tab view. see documentation for more details. ${Info.documentation}`
        );
      }
      break;
    default:
      break;
  }

  if (Input.server_host != '') {
    const isValidServerHost = RmValidator.isValidServerHost(Input.server_host);

    if (!isValidServerHost) {
      alert('The server host is invalid');
    } else {
      if (
        Input.server_host.includes(PersistStorage.NetworkConfig.https_www) ||
        Input.server_host.includes(PersistStorage.NetworkConfig.http_www)
      ) {
        const split_url: string[] = current_url.split('/');
        let new_url = '';

        for (let i = 0; i < 3; i++) {
          if (i == 1) {
            new_url += '//';
          } else {
            new_url += split_url[i];
          }
        }

        new_url += '/';
        if (Input.http_url == Input.server_host) {
          Input.http_url = new_url;
        }
        Input.server_host = new_url;
      } else if (
        Input.server_host.includes(PersistStorage.NetworkConfig.localIp) ||
        Input.server_host.includes(PersistStorage.NetworkConfig.localhost)
      ) {
        if (current_url.includes(PersistStorage.NetworkConfig.localIp)) {
          if (
            Input.server_host.includes(PersistStorage.NetworkConfig.localhost)
          ) {
            Input.server_host = Input.server_host.replace(
              PersistStorage.NetworkConfig.localhost,
              PersistStorage.NetworkConfig.localIp
            );
          }
        } else if (
          current_url.includes(PersistStorage.NetworkConfig.localhost)
        ) {
          if (
            Input.server_host.includes(PersistStorage.NetworkConfig.localIp)
          ) {
            Input.server_host = Input.server_host.replace(
              PersistStorage.NetworkConfig.localIp,
              PersistStorage.NetworkConfig.localhost
            );
          }
        }
      } else {
        const split_server_host: string[] = Input.server_host.split('/');
        let new_host = '';

        for (let x = 0; x < split_server_host.length; x++) {
          if (
            (x == 0 && split_server_host[x] == 'https:') ||
            split_server_host[x] == 'http:'
          ) {
            new_host = split_server_host[x] + '/';
            continue;
          }

          if (
            x == 1 &&
            (current_url.includes(PersistStorage.NetworkConfig.http_www) ||
              Input.server_host.includes(PersistStorage.NetworkConfig.http_www))
          ) {
            new_host += 'www.';
          }
          if (split_server_host[x] == '') {
            new_host += '/';
            continue;
          }

          new_host += split_server_host[x];
        }
        if (Input.http_url == Input.server_host) {
          Input.http_url = new_host;
        }

        Input.server_host = new_host;
      }
    }
  }

  if (Input.http_url_change) {
    if (Input.http_url != undefined) {
      if (Input.http_url == '') {
        Input.http_url = Input.server_host;
      }
      window.history.pushState(Input.server_host, '', Input.http_url);
    }
  }

  if (
    Input.container != '' &&
    Input.container != undefined &&
    Input.content_url != ''
  ) {
    const xhttp: XMLHttpRequest = new XMLHttpRequest();
    // add preloader
    addPreloader();

    xhttp.onprogress = function () {
      // void
    };

    xhttp.onload = function (this: XMLHttpRequest, e: ProgressEvent) {
      if (
        RenderConfig.await_rendering &&
        Input.component_type != RouteComponentTypes.TAB &&
        Input.component_type != RouteComponentTypes.ON_DEMAND_TABVIEW &&
        Input.component_type != RouteComponentTypes.META
      ) {
        // if any kind of error status then store error-content else store response
        if (this.status >= 400) {
          Controllers.store_content(Input.component_type, Input.error_content);
          throw new Error(`Error ${this.status}: ${this.statusText}`);
        }
        Controllers.store_content(Input.component_type, this.response);
      } else {
        if (Input.container != undefined) {
          // if any kind of error status then store error-content else store response
          if (this.status >= 400) {
            DomRenderer.__render_DOM(Input.container, Input.error_content);
            throw new Error(`Error ${this.status}: ${this.statusText}`);
          }
          DomRenderer.__render_DOM(Input.container, this.response);
          // check its on demand tab view or not
          if (Input.component_type == RouteComponentTypes.ON_DEMAND_TABVIEW) {
            console.log(Input);
            if (OnDemandTabViewStorage.states.RequestedTabViewid != null) {
              OnDemandTabViewStorage.RegisterdTabViewsContents.push({
                TabViewId: OnDemandTabViewStorage.states.RequestedTabViewid,
                TabViewContent: this.response,
              });
            }
          }
        }
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    xhttp.onerror = function (this: XMLHttpRequest, e: ProgressEvent) {
      if (Input.container != undefined) {
        DomRenderer.__render_DOM(Input.container, Input.error_content);
      }
      throw new Error(this.response);
    };

    let finalData = '';

    if (Input.method == 'POST') {
      finalData = RmValidator.parseObjectToQueryString(Input.data);
    } else if (Input.method == 'GET') {
      if (RoutesStorage.meta_content_url == Input.content_url) {
        if (!RmValidator.isEmptyObject(Input.data)) {
          const exist_q_mark: boolean = Input.content_url.includes('?');
          if (exist_q_mark) {
            const split_c_u: string[] = Input.content_url.split('?');
            if (
              split_c_u[split_c_u.length - 1] != '' &&
              split_c_u[split_c_u.length - 1] != undefined
            ) {
              Input.content_url += '&';
            }
          } else {
            Input.content_url += '?';
          }
        }

        Input.content_url += RmValidator.parseObjectToQueryString(Input.data);
      }
    }

    xhttp.open(Input.method, Input.content_url);

    if (Input.method == 'POST') {
      xhttp.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
      );
    }

    xhttp.send(finalData);
  } else {
    throw new Error('Container or Content Url is not defined.');
  }
};

export const route = (Route: Route): void => {
  let split_http_url: string[] = [];
  let RouteHttpUrl: RouteHttpUrl = Route.http_url;
  let RouteContentUrl: RouteContentUrl = Route.content_url;
  let RouteData: RouteData = {};

  if (
    Route.PathParamData != undefined ||
    (Route.PathParamData == null && typeof Route.PathParamData == 'object')
  ) {
    Object.assign(RouteData, Route.PathParamData);
  }

  if (Route.http_url != undefined) {
    split_http_url = Route.http_url.split('?');
  } else {
    DomRenderer.__render_DOM_head(PersistStorage.DomContent.ErrorHeadContent);
    DomRenderer.__render_DOM_root(
      PersistStorage.DomContent.__404_urlErrorContent
    );
  }

  if (split_http_url[1] != undefined) {
    let queryData: RouteData = RmValidator.parseQueryString(split_http_url[1]);

    if (!RmValidator.isEmptyObject(queryData)) {
      // Loop through the keys in queryData
      for (let key in queryData) {
        // Check if the key doesn't exist in RouteData
        if (!RouteData.hasOwnProperty(key)) {
          // Assign the key-value pair from queryData to RouteData
          RouteData[key] = queryData[key];
        }
      }
    }

    const query = RmValidator.parseObjectToQueryString(RouteData);
    if (RouteContentUrl.includes('?')) {
      RouteContentUrl = RouteContentUrl + '&' + query;
    } else {
      RouteContentUrl = RouteContentUrl + '?' + query;
    }
  } else if (
    Route.data != undefined &&
    Route.data != null &&
    !RmValidator.isEmptyObject(Route.data)
  ) {
    Object.assign(RouteData, Route.data);
    const query1 = RmValidator.parseObjectToQueryString(Route.data);
    const query2 = RmValidator.parseObjectToQueryString(RouteData);
    if (RouteContentUrl.includes('?')) {
      RouteContentUrl = RouteContentUrl + '&' + query2;
    } else {
      RouteContentUrl = RouteContentUrl + '?' + query2;
    }
    if (RouteHttpUrl.includes('?')) {
      RouteContentUrl = RouteHttpUrl + '&' + query1;
    } else {
      RouteHttpUrl = RouteHttpUrl + '?' + query1;
    }
  } else if (
    split_http_url[1] == undefined &&
    ((Route.data == undefined && Route.data == null) ||
      RmValidator.isEmptyObject(Route.data)) &&
    !RmValidator.isEmptyObject(RouteData)
  ) {
    // console.log("condition accepted")
    const query = RmValidator.parseObjectToQueryString(RouteData);
    if (RouteContentUrl.includes('?')) {
      RouteContentUrl = RouteContentUrl + '&' + query;
    } else {
      RouteContentUrl = RouteContentUrl + '?' + query;
    }
  }

  if (Route.meta_loader) {
    RmLoaders.MetaLoader(RouteHttpUrl, Route.registered_url_pattern);
  }

  const RouteEngineInput: RouteEngineInput = {
    method: Route.method,
    content_url: RouteContentUrl,
    component_type: Route.component_type,
    container: Route.container,
    preloader: Route.preloader,
    error_content: Route.error_content,
    data: RouteData,
    http_url_change: Route.http_url_change,
    server_host: RoutesStorage.server_host,
    http_url: RouteHttpUrl,
  };

  if (Route.http_url_change != undefined && !Route.http_url_change) {
    RouteEngineInit(RouteEngineInput);
  } else if (Route.http_url_change) {
    if (
      RoutesStorage.server_host != undefined &&
      RoutesStorage.server_host != ''
    ) {
      RouteEngineInit(RouteEngineInput);
    } else {
      DomRenderer.__render_DOM_head(PersistStorage.DomContent.ErrorHeadContent);
      DomRenderer.__render_DOM_root(
        PersistStorage.DomContent.__404_ServerHostErrorContent
      );
    }
  }
};
