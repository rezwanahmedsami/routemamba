/* eslint-disable @typescript-eslint/no-explicit-any */
import { PersistStorage, RoutesStorage, RouteComponentTypes } from './Global';
import { type RouteEngineInput, type RouteHttpUrl } from './types';
import * as DomRenderer from './DomRenderer';
import RmValidator from './RmValidator';
import { RouteEngineInit } from './RoutesInitializer';
import * as RmRender from './RmRender';

export const MetaLoader = (
  httpUrl: RouteHttpUrl,
  RegisteredUrlPattern: RouteHttpUrl | undefined
): void => {
  if (
    RoutesStorage.meta_content_url != undefined &&
    RoutesStorage.meta_content_url != ''
  ) {
    const get_route_param = httpUrl.split('?');
    // if in url in last char exist any / then remove it
    if (get_route_param[0][get_route_param[0].length - 1] == '/') {
      get_route_param[0] = get_route_param[0].slice(0, -1);
    }
    let query_data: any = {};
    if (
      RegisteredUrlPattern != undefined &&
      RmValidator.checkPathParam(get_route_param[0], RegisteredUrlPattern) !=
        null
    ) {
      let PathParam = RmValidator.checkPathParam(
        get_route_param[0],
        RegisteredUrlPattern
      );
      if (PathParam != null && !RmValidator.isEmptyObject(PathParam)) {
        Object.assign(query_data, PathParam);
      }
    }
    if (httpUrl == undefined || httpUrl == '') {
      if (get_route_param.length > 1) {
        let q_data = RmValidator.parseQueryString(get_route_param[1]);
        if (!RmValidator.isEmptyObject(q_data)) {
          Object.assign(query_data, q_data);
        }
      }
      query_data.route = '/';
    } else {
      if (get_route_param.length > 1) {
        let q_data = RmValidator.parseQueryString(get_route_param[1]);
        if (!RmValidator.isEmptyObject(q_data)) {
          Object.assign(query_data, q_data);
        }
      }
      query_data.route =
        RegisteredUrlPattern != undefined
          ? RegisteredUrlPattern
          : get_route_param[0];
    }
    const RouteEngineInput: RouteEngineInput = {
      method: 'GET',
      content_url: RoutesStorage.meta_content_url,
      component_type: RouteComponentTypes.META,
      container: 'head meta',
      preloader: '',
      error_content: '',
      data: query_data,
      http_url_change: false,
      server_host: RoutesStorage.server_host,
      http_url: '',
    };
    RouteEngineInit(RouteEngineInput);
  } else {
    DomRenderer.__render_DOM_root(PersistStorage.DomContent.DefineMetaUrlError);
    throw new Error(PersistStorage.DomContent.DefineMetaUrlError);
  }
};

export const historyRoutesLoader = (status: boolean): void => {
  if (status) {
    // console.log('historyRoutesLoader called');

    // console.log('LAST HTTP URL: ', RoutesStorage.last_http_url);
    // console.log('last_http_url_path: ', last_http_url_path);

    const current_http_url: string = window.location.href;
    const url = new URL(current_http_url);
    const route_path = url.pathname + url.search;
    const get_route_param: string[] = route_path.split('?');
    // console.log('current_http_url: ', current_http_url);
    // console.log('route pth: ', route_path);

    // suppress render if last_http_url_path and route_path is same
    const last_http_url = RoutesStorage.last_http_url;
    if (last_http_url != undefined && last_http_url != '') {
      // console.log(last_http_url);
      const last_http_url_breakdown = new URL(last_http_url);
      // console.log(last_http_url_breakdown);
      const last_http_url_path =
        last_http_url_breakdown.pathname + last_http_url_breakdown.search;
      if (last_http_url_path == route_path) {
        return;
      }
    }

    const RoutePages = RoutesStorage.RoutesPages;
    for (let i = 0; i < RoutePages.length; i++) {
      let http_url: RouteHttpUrl = RoutePages[i].http_url;

      if (
        http_url == get_route_param[0] ||
        RmValidator.isPathParamPattern(http_url)
      ) {
        if (RoutesStorage.RouteContentsState.ShouldHeaderload) {
          RmRender.renderHeader();
        }
        RmRender.renderBody();
        if (RoutesStorage.RouteContentsState.ShouldFooterload) {
          RmRender.renderFooter();
        }
        break;
      }
    }
  }
};
