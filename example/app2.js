routemamba.registerMetaUrl("inc/meta-content.php");

routemamba.registerServerHost("http://localhost:3000/");

routemamba.register_http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "content/about.php",
        container: "#root",
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "about.php"
     }
]);

routemamba.register_routes_headers([
    {
        content_url: "content/header.php",
        container: "#header_load",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["about.php"]
     },
]);

routemamba.register_routes_footers([
    {
        content_url: "content/footer.php",
        container: "#footer_load",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["about.php"]
     },
]);