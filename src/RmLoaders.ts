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
    const current_http_url: string = window.location.href;
    const url = new URL(current_http_url);
    const route_path = url.pathname + url.search;
    const get_route_param: string[] = route_path.split('?');

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
