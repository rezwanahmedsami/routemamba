var home_nav = document.getElementById("home_nav");
var about_nav = document.getElementById("about_nav");
var tabs_nav = document.getElementById("tabs_nav");

home_nav.addEventListener("click", (e) => {
    e.preventDefault();
    let href = home_nav.getAttribute("href");

    routemamba.navigate(href);
})

about_nav.addEventListener("click", (e) => {
    e.preventDefault();
    let href = about_nav.getAttribute("href");

    routemamba.navigate(href);
})

tabs_nav.addEventListener("click", (e) => {
    e.preventDefault();
    let href = tabs_nav.getAttribute("href");

    routemamba.navigate(href);
})