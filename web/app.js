routemamba.server_host = "http://localhost:3000/";

routemamba.meta_content_url = "/web/components/meta/meta.html";

routemamba.http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/home.html",
        component: "#root",
        preloader: '<h1>loading...</h2>',
        error_handler: 'error',
        http_url_change: false,
        http_url: ""
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/home.html",
        component: "#root",
        preloader: '<h1>loading...</h2>',
        error_handler: 'error',
        http_url_change: false,
        http_url: "index.html"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/about.html",
        component: "#root",
        preloader: '<h1>loading...</h2>',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.html"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "/web/components/tabs.html",
        component: "#root",
        preloader: '<h1>loading...</h2>',
        error_handler: 'error',
        http_url_change: false,
        http_url: "tabs.html"
     },
]);

routemamba.page_headers_content([
    {
        method: "GET",
        content_url: "/web/components/header-footer/header.html",
        component: "#header_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: ""
     },
    {
        method: "GET",
        content_url: "/web/components/header-footer/header.html",
        component: "#header_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "index.html"
     },
     {
        method: "GET",
        content_url: "/web/components/header-footer/header.html",
        component: "#header_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.html"
     },
     {
        method: "GET",
        content_url: "/web/components/header-footer/header.html",
        component: "#header_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "tabs.html"
     },
]);

routemamba.page_footers_content([
    {
        method: "GET",
        content_url: "/web/components/header-footer/footer.html",
        component: "#footer_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "index.html"
     },
     {
        method: "GET",
        content_url: "/web/components/header-footer/footer.html",
        component: "#footer_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.html"
     },
     {
        method: "GET",
        content_url: "/web/components/header-footer/footer.html",
        component: "#footer_load",
        preloader: 'loading...',
        error_handler: 'error',
        http_url_change: false,
        http_url: "tabs.html"
     },
]);

routemamba.__render();