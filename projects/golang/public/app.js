// set server host
routemamba.registerServerHost("http://localhost:3002/");
// set meta content
routemamba.registerMetaUrl("/components/meta");

routemamba.register_http_routes([
  {
    method: "GET",
    meta_loader: true,
    content_url: "/components/home",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "/",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "/components/features",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "/features",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "/components/pricing",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "/pricing",
  },
  {
    method: "GET",
    meta_loader: true,
    content_url: "/components/post",
    data: {},
    preloader: "loading...",
    error_content: "error",
    http_url_change: false,
    http_url: "/post/:date/:title",
  },

]);

// Set pages headers
routemamba.register_routes_headers([
  {
    content_url: "/components/header",

    preloader: "loading...",
    error_content: "error",
    http_url: ["/", "/features", "/pricing", "/post/:date/:title"],
  },
]);

routemamba.register_routes_footers([
  {
    content_url: "/components/footer",

    preloader: "loading...",
    error_content: "error",
    http_url: ["/", "/features", "/pricing", "/post/:date/:title"],
  },
]);

routemamba.render();
