routemamba.registerMetaUrl("/web/components/meta/meta.html");

routemamba.registerServerHost("http://localhost:3000");
routemamba.await_rendering(true); // added new feature in V4.0.0
routemamba.register_http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/home.html",
      //   container: "#root", -- Removed at V4.0.0
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "/"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/home.html",
      //   container: "#root", -- Removed at V4.0.0
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "index.html"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/about.html",
      //   container: "#root", -- Removed at V4.0.0
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "about.html"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/tabs.html",
      //   container: "#root", -- Removed at V4.0.0
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "tabs.html"
     },
]);

routemamba.register_routes_headers([
    {
        content_url: "/web/components/header-footer/header.html",
      //   container: "#header_load", -- Removed at V4.0.0
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/", "index.html", "about.html", "tabs.html"]
     }
]);

routemamba.register_routes_footers([
    {
        content_url: "/web/components/header-footer/footer.html",
      //   container: "#footer_load", -- Removed at V4.0.0
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/", "index.html", "about.html", "tabs.html"]
     }
]);

routemamba.render();

console.log("app.js loaded");