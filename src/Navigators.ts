import { PersistStorage, RoutesStorage, RouteComponentTypes } from './Global';

import * as RoutesInitializer from './RoutesInitializer';
import {
  type NavigateRoute,
  type NavigateData,
  type NavigateOptions,
  type RouteHttpUrl,
  type Route,
  type RouteHttpUrlChange,
  type RouteMethod,
  type RouteMetaLoader,
  type RegisterdRoutesPages,
} from './types';

export const navigate = (
  route_to: NavigateRoute,
  data: NavigateData = null,
  options: NavigateOptions = {},
  callback: Function | null = null
) => {
  RoutesStorage.RouteContentsState.navigationCallback = callback;
  if (route_to != null || route_to != undefined) {
    const r: RegisterdRoutesPages = RoutesStorage.RoutesPages;
    for (let i = 0; i < r.length; i++) {
      let http_url: RouteHttpUrl = route_to;
      if (route_to.includes(r[i].http_url)) {
        const h_url: RouteHttpUrl = r[i].http_url;
        let http_url_change: RouteHttpUrlChange = true;
        let method: RouteMethod = r[i].method;
        let meta_loader: RouteMetaLoader = r[i].meta_loader;
        if (data == null) {
          data = {};
        }

        // setting / root path to blank, so it can be define dir as  root path
        if (route_to == '/') {
          http_url = '';
        }

        if (
          options.meta_loader != undefined &&
          typeof options.meta_loader === 'boolean'
        ) {
          meta_loader = options.meta_loader;
        }
        if (
          options.http_url_change != undefined &&
          typeof options.http_url_change === 'boolean'
        ) {
          http_url_change = options.http_url_change;
        }

        if (options.method != undefined && options.method != '') {
          method = options.method;
        }

        if (
          options.header_load != undefined &&
          typeof options.header_load === 'boolean'
        ) {
          RoutesStorage.RouteContentsState.ShouldHeaderload =
            options.header_load;

          if (options.header_load) {
            for (
              let hIndex = 0;
              hIndex < RoutesStorage.RoutesHeaders.length;
              hIndex++
            ) {
              const h = RoutesStorage.RoutesHeaders[hIndex];
              let found = false;
              for (let i = 0; i < h.http_url.length; i++) {
                if (h.http_url[i] == h_url) {
                  const Route = {
                    method: 'GET',
                    meta_loader: false,
                    content_url: h.content_url,
                    component_type: RouteComponentTypes.HEADER,
                    preloader: h.preloader,
                    data: {},
                    error_content: h.error_content,
                    http_url_change: false,
                    http_url: h.http_url[i],
                  };
                  RoutesInitializer.route(Route);
                  found = true;
                  break;
                } else if (
                  h.http_url[i] != h_url &&
                  i == h.http_url.length - 1 &&
                  hIndex == RoutesStorage.RoutesHeaders.length - 1
                ) {
                  RoutesStorage.RouteContentsState.ShouldHeaderload = false;
                  RoutesStorage.RouteContentsState.HeaderContent = '';
                }
              }
              if (found) {
                break;
              }
            }
          }
        }

        if (
          options.footer_load != undefined &&
          typeof options.footer_load === 'boolean'
        ) {
          RoutesStorage.RouteContentsState.ShouldFooterload =
            options.footer_load;

          if (options.footer_load) {
            for (
              let fIndex = 0;
              fIndex < RoutesStorage.RoutesFooters.length;
              fIndex++
            ) {
              const f = RoutesStorage.RoutesFooters[fIndex];
              let found = false;
              for (let i = 0; i < f.http_url.length; i++) {
                if (f.http_url[i] == h_url) {
                  const Route = {
                    method: 'GET',
                    meta_loader: false,
                    content_url: f.content_url,
                    component_type: RouteComponentTypes.FOOTER,
                    preloader: f.preloader,
                    data: {},
                    error_content: f.error_content,
                    http_url_change: false,
                    http_url: f.http_url[i],
                  };
                  RoutesInitializer.route(Route);
                  found = true;
                  break;
                } else if (
                  f.http_url[i] != h_url &&
                  i == f.http_url.length - 1 &&
                  fIndex == RoutesStorage.RoutesFooters.length - 1
                ) {
                  RoutesStorage.RouteContentsState.ShouldFooterload = false;
                  RoutesStorage.RouteContentsState.FooterContent = '';
                }
              }
              if (found) {
                break;
              }
            }
          }
        }
        const Route: Route = {
          method,
          meta_loader,
          content_url: r[i].content_url,
          component_type: RouteComponentTypes.BODY,
          preloader: r[i].preloader,
          data,
          error_content: r[i].error_content,
          http_url_change,
          http_url,
        };

        RoutesInitializer.route(Route);
        break;
      } else if (
        !route_to.includes(r[i].http_url) &&
        i == RoutesStorage.RoutesPages.length - 1
      ) {
        throw new Error(`${route_to} is not a registered routes.`);
      }
    }
  } else {
    throw Error(PersistStorage.DomContent.NavigateRoutePathUndefined);
  }
};

export const pop_route = (): void => {
  history.back();
};

export const push_route = (): void => {
  history.go(1);
};
