/**
 * @functions
 */

import { RoutesStorage, RenderConfig, RouteComponentTypes } from './Global';
import RmValidator from './RmValidator';
import { type Route, type RouteContentUrl, type RouteData } from './types';
import * as RoutesInitializer from './RoutesInitializer';
import * as RmLoaders from './RmLoaders';
import {
  generate_required_all_root_elements,
  __render_DOM_root,
} from './DomRenderer';

export const renderHeader = (): void => {
  const current_http_url: string = window.location.href;
  const url = new URL(current_http_url);
  const route_path = url.pathname + url.search;
  const get_route_param: string[] = route_path.split('?');
  let data: RouteData = {};
  let query_data = '';

  if (get_route_param[1] != undefined) {
    data = RmValidator.parseQueryString(get_route_param[1]);
  }

  query_data = RmValidator.parseObjectToQueryString(data);

  let found = false;
  for (let Hindex = 0; Hindex < RoutesStorage.RoutesHeaders.length; Hindex++) {
    const Hroute = RoutesStorage.RoutesHeaders[Hindex];
    for (let i = 0; i < Hroute.http_url.length; i++) {
      let http_url = Hroute.http_url[i];
      if (http_url == get_route_param[0]) {
        const content_path = Hroute.content_url;
        const route_split = content_path.split('?');
        const content_url = `${route_split[0]}?` + query_data;

        const Route = {
          method: 'GET',
          meta_loader: false,
          content_url,
          component_type: RouteComponentTypes.HEADER,
          preloader: Hroute.preloader,
          data: {},
          error_content: Hroute.error_content,
          http_url_change: false,
          http_url,
        };

        RoutesInitializer.route(Route);
        found = true;
        break;
      } else if (
        http_url != get_route_param[0] &&
        i == Hroute.http_url.length - 1 &&
        Hindex == RoutesStorage.RoutesHeaders.length - 1
      ) {
        RoutesStorage.RouteContentsState.ShouldHeaderload = false;
        RoutesStorage.RouteContentsState.HeaderContent = '';
      }
    }
    if (found) {
      break;
    }
  }
};

export const renderBody = (): void => {
  const current_http_url: string = window.location.href;
  const url = new URL(current_http_url);
  const route_path = url.pathname + url.search;
  const get_route_param: string[] = route_path.split('?');
  let data: RouteData = {};
  let query_data = '';
  if (get_route_param[1] != undefined) {
    data = RmValidator.parseQueryString(get_route_param[1]);
  }

  query_data = RmValidator.parseObjectToQueryString(data);

  for (let i = 0; i < RoutesStorage.RoutesPages.length; i++) {
    let Broute = RoutesStorage.RoutesPages[i];
    let http_url = Broute.http_url;
    if (http_url == get_route_param[0]) {
      let route_content_url = '';
      if (Broute.method == 'GET') {
        const content_path = Broute.content_url;
        const route_split = content_path.split('?');
        route_content_url = `${route_split[0]}?` + query_data;
      }
      const meta_loader = true;
      const Route = {
        method: Broute.method,
        meta_loader,
        content_url: route_content_url,
        component_type: RouteComponentTypes.BODY,
        container: Broute.container,
        preloader: Broute.preloader,
        data: Broute.data,
        error_content: Broute.error_content,
        http_url_change: Broute.http_url_change,
        http_url,
      };
      RoutesInitializer.route(Route);
      break;
    } else if (
      http_url != get_route_param[0] &&
      i === RoutesStorage.RoutesPages.length - 1
    ) {
      __render_DOM_root(`No any Register route found: ${get_route_param[0]}`);
      throw new Error(`No any Register route found: ${get_route_param[0]}`);
    }
  }
};

export const renderFooter = (): void => {
  const current_http_url: string = window.location.href;
  const url = new URL(current_http_url);
  const route_path = url.pathname + url.search;
  const get_route_param: string[] = route_path.split('?');
  let data: RouteData = {};
  let query_data = '';

  if (get_route_param[1] != undefined) {
    data = RmValidator.parseQueryString(get_route_param[1]);
  }

  query_data = RmValidator.parseObjectToQueryString(data);

  let found = false;

  for (let Findex = 0; Findex < RoutesStorage.RoutesFooters.length; Findex++) {
    const Froute = RoutesStorage.RoutesFooters[Findex];
    for (let i = 0; i < Froute.http_url.length; i++) {
      let http_url = Froute.http_url[i];
      // if (http_url == '/') {
      //   http_url = '';
      // }
      if (http_url == get_route_param[0]) {
        const content_path = Froute.content_url;
        const route_split = content_path.split('?');
        const content_url = `${route_split[0]}?` + query_data;

        const Route = {
          method: 'GET',
          meta_loader: false,
          content_url,
          component_type: RouteComponentTypes.FOOTER,
          preloader: Froute.preloader,
          data: {},
          error_content: Froute.error_content,
          http_url_change: false,
          http_url,
        };

        RoutesInitializer.route(Route);
        found = true;
        break;
      } else if (
        http_url != get_route_param[0] &&
        i == Froute.http_url.length - 1 &&
        Findex == RoutesStorage.RoutesFooters.length - 1
      ) {
        RoutesStorage.RouteContentsState.ShouldFooterload = false;
        RoutesStorage.RouteContentsState.FooterContent = '';
      }
    }
    if (found) {
      break;
    }
  }
};

export const render = (): void => {
  generate_required_all_root_elements();
  renderHeader();
  renderFooter();
  renderBody();
};

export const await_rendering = (status: boolean) => {
  RenderConfig.await_rendering = status;
};
