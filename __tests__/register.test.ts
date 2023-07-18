import { RoutesStorage } from '../src/Global';

import * as RmRegister from '../src/RmRegister';

test('should register server host', () => {
  let serverHost = 'https://example.com';
  RmRegister.registerServerHost(serverHost);
  expect(RoutesStorage.server_host).toBe(serverHost);
});

test('should register meta url', () => {
  let metaurl = '/web/meta.html';
  RmRegister.registerMetaUrl(metaurl);
  expect(RoutesStorage.meta_content_url).toBe(metaurl);
});

test('Should register http routes in Routes pages storage', () => {
  RmRegister.register_http_routes([
    {
      method: 'GET',
      meta_loader: true,
      content_url: '/web/components/home.html',
      preloader: '<h1>loading...</h2>',
      data: {},
      error_content: 'error',
      http_url_change: false,
      http_url: '',
    },
    {
      method: 'GET',
      meta_loader: true,
      content_url: '/web/components/home.html',
      preloader: '<h1>loading...</h2>',
      data: {},
      error_content: 'error',
      http_url_change: false,
      http_url: 'index.html',
    },
    {
      method: 'GET',
      meta_loader: true,
      content_url: '/web/components/about.html',
      preloader: '<h1>loading...</h2>',
      data: {},
      error_content: 'error',
      http_url_change: false,
      http_url: 'about.html',
    },
    {
      method: 'GET',
      meta_loader: true,
      content_url: '/web/components/tabs.html',
      preloader: '<h1>loading...</h2>',
      data: {},
      error_content: 'error',
      http_url_change: false,
      http_url: 'tabs.html',
    },
  ]);
  expect(RoutesStorage.RoutesPages.length).toEqual(4);

  RoutesStorage.RoutesPages = [];
});

test('Should register http routes footers in storage', () => {
  RmRegister.register_routes_footers([
    {
      content_url: '/web/components/header-footer/footer.html',
      preloader: 'loading...',
      error_content: 'error',
      http_url: ['index.html'],
    },
  ]);

  expect(RoutesStorage.RoutesFooters.length).toEqual(1);
  RoutesStorage.RoutesFooters = [];
});

test('Push header footer data into routes footer and header storage', () => {
  RoutesStorage.RoutesFooters.push({
    content_url: 'content/footer.php',
    preloader: 'loading...',
    error_content: 'error',
    http_url: ['index.php'],
  });

  RoutesStorage.RoutesHeaders.push({
    content_url: 'content/header.php',
    preloader: 'loading...',
    error_content: 'error',
    http_url: ['index.php'],
  });

  expect(RoutesStorage.RoutesFooters[0]).toEqual({
    content_url: 'content/footer.php',
    preloader: 'loading...',
    error_content: 'error',
    http_url: ['index.php'],
  });
  expect(RoutesStorage.RoutesHeaders[0]).toEqual({
    content_url: 'content/header.php',
    preloader: 'loading...',
    error_content: 'error',
    http_url: ['index.php'],
  });
});

test('Push Route pages storage data', () => {
  RoutesStorage.RoutesPages.push({
    method: 'GET',
    meta_loader: true,
    content_url: 'content/home.php',
    preloader: '<h1>loading...</h2>',
    data: {
      name: 'rezwan',
      description: 'This is just a jest test for description',
    },
    error_content: 'error',
    http_url_change: false,
    http_url: '',
  });
  expect(RoutesStorage.RoutesPages[0]).toEqual({
    method: 'GET',
    meta_loader: true,
    content_url: 'content/home.php',
    preloader: '<h1>loading...</h2>',
    data: {
      name: 'rezwan',
      description: 'This is just a jest test for description',
    },
    error_content: 'error',
    http_url_change: false,
    http_url: '',
  });
});
