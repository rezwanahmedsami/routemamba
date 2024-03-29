routemamba.registerMetaUrl('/components/meta');

routemamba.registerServerHost('http://localhost:3001/');

routemamba.register_http_routes([
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/home',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/about',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/about',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/privacy',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/privacy',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/pagenotExist',
    preloader: '<h1>404 loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/page-not-exist',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/tabs-example',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/tabs-example',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/post',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/post/:id',
  },
  {
    method: 'GET',
    meta_loader: true,
    content_url: '/components/news',
    preloader: '<h1>loading...</h2>',
    data: {},
    error_content: 'error',
    http_url_change: false,
    http_url: '/news/:date/:title',
  },
]);

routemamba.register_routes_headers([
  {
    content_url: '/components/header',
    preloader: '<h1>loading Header...</h2>',
    error_content: 'error',
    http_url: [
      '/',
      '/about',
      '/privacy',
      '/tabs-example',
      '/post/:id',
      '/news/:date/:title'
      // ,'/page-not-exist'
    ],
  },
]);

routemamba.register_routes_footers([
  {
    content_url: '/components/footer',
    preloader: '<h1>loading Footer...</h2>',
    error_content: 'error',
    http_url: [
        '/',
        '/about',
        '/privacy',
        '/tabs-example',
        '/post/:id',
        '/news/:date/:title'
        // ,'/page-not-exist'
    ],
  },
]);

routemamba.render();

var home_btn = document.getElementById('home');
var about_btn = document.getElementById('about');
var privacy_btn = document.getElementById('privacy');
var page_not_exist = document.getElementById('page-not-exist');
var tabs_example_btn = document.getElementById('tabs-example');
var post_btn = document.getElementById('post');
var news_btn = document.getElementById('news');
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
    '/',
    {},
    {
      header_load: true,
      footer_load: true,
    }
  );
});

about_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/about/',
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
  routemamba.navigate('/privacy');
});
page_not_exist.addEventListener('click', () => {
  routemamba.navigate('/page-not-exist',{},{
    header_load:true,
    footer_load:true
  });
});


tabs_example_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/tabs-example/',
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

post_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/post/56456546546/?test=1',
    {},
    {
      header_load: true,
      footer_load: true,
    }
  );
});

news_btn.addEventListener('click', () => {
  routemamba.navigate(
    '/news/01-05-2023/Currency-inflation-rate-is-higher-in-bangladesh/',
    {},
    {
      header_load: true,
      footer_load: true,
    }
  );
});