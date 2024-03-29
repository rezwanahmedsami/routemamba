import {
  registerMetaUrl,
  registerServerHost,
  register_http_routes,
  register_routes_footers,
  register_routes_headers,
} from './RmRegister';
import { navigate, pop_route, push_route } from './Navigators';
import { initTabs } from './RmTabsHandler';
import { render, await_rendering } from './RmRender';
import { localState } from './RmStateManager';

export {
  registerMetaUrl,
  registerServerHost,
  register_http_routes,
  register_routes_footers,
  register_routes_headers,
  navigate,
  render,
  await_rendering,
  pop_route,
  push_route,
  initTabs,
  localState,
};
