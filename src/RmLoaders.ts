/* eslint-disable @typescript-eslint/no-explicit-any */
import { PersistStorage, RoutesStorage, RouteComponentTypes } from './Global';
import { type RouteEngineInput, type RouteHttpUrl } from './types';
import * as DomRenderer from './DomRenderer';
import RmValidator from './RmValidator';
import { RouteEngineInit } from './RoutesInitializer';
import * as RmRender from './RmRender';

export const MetaLoader = (httpUrl: RouteHttpUrl): void => {
  if (
    RoutesStorage.meta_content_url != undefined &&
    RoutesStorage.meta_content_url != ''
  ) {
    const current_url: string = window.location.href;
    const split_url: string[] = current_url.split('/');
    const last_index = split_url.length - 1;
    const route_path = split_url[last_index];
    const get_route_param = route_path.split('?');
    let query_data: any = {};

    if (httpUrl == undefined || httpUrl == '') {
      if (get_route_param.length > 1) {
        query_data = RmValidator.parseQueryString(get_route_param[1]);
      }
      // query_data.route = get_route_param[0];
      query_data.route = '/';
    } else {
      const split_http_url = httpUrl.split('/');
      const http_url_path_split = split_http_url[split_http_url.length - 1];
      const http_url_param_query = http_url_path_split.split('?');
      if (http_url_param_query.length > 1) {
        query_data = RmValidator.parseQueryString(http_url_param_query[1]);
      }
      query_data.route = http_url_param_query[0];
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
    const split_url: string[] = current_http_url.split('/');
    const last_index: number = split_url.length - 1;
    const route_path: string = split_url[last_index];
    const get_route_param: string[] = route_path.split('?');

    const RoutePages = RoutesStorage.RoutesPages;
    for (let i = 0; i < RoutePages.length; i++) {
      let http_url: RouteHttpUrl = RoutePages[i].http_url;
      if (http_url == '/') {
        http_url = '';
      }
      if (http_url == get_route_param[0]) {
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
