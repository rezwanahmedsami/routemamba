/* eslint-disable no-undef */
routemamba.registerMetaUrl('/web/components/meta/meta.html');

routemamba.registerServerHost('http://localhost:3000');
routemamba.await_rendering(true); // added new feature in V4.0.0
routemamba.register_http_routes([
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/web/components/home.html',
    //   container: "#root", -- Removed at V4.0.0
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/web/components/home.html',
    //   container: "#root", -- Removed at V4.0.0
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/index.html',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/web/components/about.html',
    //   container: "#root", -- Removed at V4.0.0
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/about.html',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/web/components/about2.html',
    //   container: "#root", -- Removed at V4.0.0
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/sub/about.html',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/web/components/tabs.html',
    //   container: "#root", -- Removed at V4.0.0
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/tabs.html',
  },
]);

routemamba.register_routes_headers([
  {
    content_url: '/web/components/header-footer/header.html',
    //   container: "#header_load", -- Removed at V4.0.0
    preloader: 'loading...',
    error_content: 'error',
    http_url: [
      '/',
      '/index.html',
      '/about.html',
      '/sub/about.html',
      '/tabs.html',
    ],
  },
]);

routemamba.register_routes_footers([
  {
    content_url: '/web/components/header-footer/footer.html',
    //   container: "#footer_load", -- Removed at V4.0.0
    preloader: 'loading...',
    error_content: 'error',
    http_url: [
      '/',
      '/index.html',
      '/about.html',
      '/sub/about.html',
      '/tabs.html',
    ],
  },
]);

routemamba.render();

let DemandTabView = routemamba.registerOnDemandTabView([
  {
    TabViewId: 'tab1',
    TabViewUrl: '/web/components/tab1.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab2',
    TabViewUrl: '/web/components/tab2.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab3',
    TabViewUrl: '/web/components/tab3.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab4',
    TabViewUrl: '/web/components/tab4.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab5',
    TabViewUrl: '/web/components/tab5.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab6',
    TabViewUrl: '/web/components/tab6.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab7',
    TabViewUrl: '/web/components/tab7.html',
    HttpUrlChange: false,
  },
  {
    TabViewId: 'tab8',
    TabViewUrl: '/web/components/tab8.html',
    HttpUrlChange: false,
  },
]);

DemandTabView.loadTabView('tab1');
DemandTabView.reloadTabView('tab1');

console.log('app.js loaded');
