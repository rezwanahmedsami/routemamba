
var home_btn = document.getElementById("home");
var about_btn = document.getElementById("about");
var privacy_btn = document.getElementById("privacy");
var tabs_example_btn = document.getElementById("tabs-example");
var back = document.getElementById("back");
var next = document.getElementById("next");

// defining server host
routemamba.server_host = 'http://localhost/Elevator/elevator-v2/test/';

// define error pages
// routemamba.error_404 = '404 error';


// define meta contents
routemamba.meta_content_url = 'inc/meta-content.php';

// http routes setup
routemamba.http_routes([
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: '<h1>loading...</h2>',
         error_handler: 'error',
         http_url_change: false,
         http_url: ""
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: '<h1>loading...</h2>',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/about.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/tabs-example.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "tabs-example.php"
      }
]);

// set  pages headers
routemamba.page_headers_content([
      {
         method: "GET",
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      },
      {
         method: "GET",
         content_url: "content/header.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "tabs-example.php"
      }
]);

// set footers
routemamba.page_footers_content([
      {
         method: "GET",
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         content_url: "content/footer.php",
         component: "#footer_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      }
]);

back.addEventListener('click', ()=>{
   routemamba.pop_route();
});

next.addEventListener('click', ()=>{
   routemamba.push_route();
});


home_btn.addEventListener('click', ()=>{
   routemamba.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: '<h1>loading...</h2>',
         error_handler: routemamba.error_404,
         http_url_change: true,
         http_url: "index.php"
      });
});

about_btn.addEventListener('click', ()=>{
   routemamba.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/about.php",
         component: "#root",
         preloader: '<h1>loading...</h2>',
         // data: {id: 2456, name: "sami"},
         error_handler: 'error',
         http_url_change: true,
         http_url: "about.php?id=34324&name=rezwan"
      });
});

privacy_btn.addEventListener('click', ()=>{
   routemamba.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/privacy.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: true,
         http_url: "privacy.php"
      });
});

tabs_example_btn.addEventListener('click', ()=>{
   routemamba.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/tabs-example.php",
         component: "#root",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: true,
         http_url: "tabs-example.php"
      });
});

// rendering
routemamba.__render();


