/* eslint-disable no-undef */
/* eslint-disable camelcase */
var home_nav = document.getElementById('home_nav');
var about_nav = document.getElementById('about_nav');
var about_nav2 = document.getElementById('about_nav2');
var tabs_nav = document.getElementById('tabs_nav');

home_nav.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const href = home_nav.getAttribute('href');

  routemamba.navigate(href);
});

about_nav.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const href = about_nav.getAttribute('href');

  routemamba.navigate(
    href,
    {},
    { header_load: true, footer_load: false },
    () => {
      console.log(
        'About name loaded and i just prinitng from callback function of navigate'
      );
    }
  );
});
about_nav2.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const href = about_nav2.getAttribute('href');

  routemamba.navigate(href);
});

tabs_nav.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const href = tabs_nav.getAttribute('href');

  routemamba.navigate(href);
});
