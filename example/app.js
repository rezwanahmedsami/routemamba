routemamba.registerMetaUrl('inc/meta-content.php');

routemamba.registerServerHost('http://localhost:3000/example/');

routemamba.register_http_routes([
  {
    method: 'GET',
    meta_loader: true,
    content_url: 'content/home.php',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/example/',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: 'content/home.php',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/example/index.php',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: 'content/about.php',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/example/about.php',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: 'content/privacy.php',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/example/privacy.php',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: 'content/tabs-example.php',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/example/tabs-example.php',
  },
]);

routemamba.register_routes_headers([
  {
    content_url: 'content/header.php',
    preloader: 'loading...',
    error_content: 'error',
    http_url: [
      '/example/',
      '/example/about.php',
      '/example/privacy.php',
      '/example/tabs-example.php',
    ],
  },
]);

routemamba.register_routes_footers([
  {
    content_url: 'content/footer.php',
    preloader: 'loading...',
    error_content: 'error',
    http_url: [
      '/example/',
      '/example/about.php',
      '/example/privacy.php',
      '/example/tabs-example.php',
    ],
  },
]);

routemamba.render();

var home_btn = document.getElementById('home');
var about_btn = document.getElementById('about');
var privacy_btn = document.getElementById('privacy');
var tabs_example_btn = document.getElementById('tabs-example');
var back = document.getElementById('back');
var next = document.getElementById('next');

back.addEventListener('click', () => {
  routemamba.pop_route();
});

next.addEventListener('click', () => {
  routemamba.push_route();
});

home_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/example/',
    {},
    {
      header_load: true,
      footer_load: true,
    }
  );
});

about_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/example/about.php',
    {
      id: 43345,
      name: 'rezwan',
    },
    {
      header_load: true,
      footer_load: true,
    }
  );
});

privacy_btn.addEventListener('click', () => {
  routemamba.navigate('/example/privacy.php');
});

tabs_example_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/example/tabs-example.php',
    {},
    {
      meta_loader: true,
      method: 'GET',
      http_url_change: true,
      header_load: true,
      footer_load: true,
    }
  );
});
