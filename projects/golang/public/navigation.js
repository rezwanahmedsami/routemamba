var Homenav = document.getElementById("Homenav");
var PricingNav = document.getElementById("PricingNav");
var FeaturesNav = document.getElementById("FeaturesNav");
var PostNav = document.getElementById("PostNav");

function Navigatehandler(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    let href = e.target.getAttribute("href");
    console.log("href: " + href);
    routemamba.navigate(href);
}
Homenav.addEventListener("click", Navigatehandler);

PricingNav.addEventListener("click", Navigatehandler);

FeaturesNav.addEventListener("click", Navigatehandler);

PostNav.addEventListener("click", Navigatehandler);