let home_nav = document.getElementById("home_nav");
let about_nav = document.getElementById("about_nav");
let tabs_nav = document.getElementById("tabs_nav");

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