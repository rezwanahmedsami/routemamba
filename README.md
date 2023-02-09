[![](https://data.jsdelivr.com/v1/package/npm/routemamba/badge)](https://www.jsdelivr.com/package/npm/routemamba)
[![Rate this package](https://badges.openbase.com/js/rating/routemamba.svg?token=gvmAJQCxO2/PJgrc0EvODXOOaqAt69wEOFibwA2qPu0=)](https://openbase.com/js/routemamba?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
[![routemamba Versions](https://badges.openbase.com/js/versions/routemamba.svg?token=gvmAJQCxO2/PJgrc0EvODXOOaqAt69wEOFibwA2qPu0=)](https://openbase.com/js/routemamba?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
[![Featured on Openbase](https://badges.openbase.com/js/featured/routemamba.svg?token=gvmAJQCxO2/PJgrc0EvODXOOaqAt69wEOFibwA2qPu0=)](https://openbase.com/js/routemamba?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
[![routemamba Tutorials](https://badges.openbase.com/js/tutorials/routemamba.svg?token=gvmAJQCxO2/PJgrc0EvODXOOaqAt69wEOFibwA2qPu0=)](https://openbase.com/js/routemamba?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

# Routemamba [![Verified on Openbase](https://badges.openbase.com/js/verified/routemamba.svg?token=gvmAJQCxO2/PJgrc0EvODXOOaqAt69wEOFibwA2qPu0=)](https://openbase.com/js/routemamba?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

<img src="https://cdn.rezwanahmodsami.com/routemamba/logo/routemamba-logo.png" align="right" width="150px">

Routemamba is a javascript library to develop php single page/without reload web application more easily. you don't need to use node js environment and import package etc. To use that just you need to link by <script> tag in your project.
Check the documentation for understand. You can use this library in completely free.

For any issue You can directly contact with developer: [Rezwan Ahmod Sami](https://facebook.com/rezwanahmodsami)



# Introduction

Routemamba is now mainly developed to use in php projects. In this world lot's of web applications were built in php. Php is good enough, but in the competition of node js, a php developer can't give much user experience. So, that's the reason we developed routemamba. Routemamba js library will help you to make your php web application fully single page application and give your user better experience.

___
#### what is single page web application?
A single-page application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.
___

And also it's easy to use. You can use directly to your php project. To use that script you can directly add our cdn link in your html <head> tag or also you can add by downloading `routemamba.min.js` . 
Follow the guideline to use routemamba  in your project.

Enjoying routemamba? [Please leave a short review on Openbase](https://openbase.com/js/routemamba#rate)

## Project setup ```file/folder``` stuctures:
set files and folder like this to use ```routemamba.min.js```:
```bash
project_root
|
|-- assets
|      |-- routemamba
|                |-- routemamba.min.js
|-- components
|      |-- header-layout
|      |         |--- header-component.php
|      |-- footer-layout
|      |         |-- footer-component.php
|      |-- about-component.php
|      |-- Index-component.php
|      
|-- include
|      |-- header.php
|      |-- footer.php
|      |-- meta-content.php
|
|-- index.php
|-- about.php
|-- app.js
```

## video tutorial:
Check this full guided video tutorial:
[Video tutorial of routemamba.min.js](https://youtube.com/playlist?list=PLWeKWwtQYN-RIDzc4ZuruoYeU1HkuRpC_)(Note: This video is to use routemamba js. elevator js was previous name of routemamba.)

## Installation guide

You can directly install our routemamba js by using npm.

npm install Example:

``` bash
npm i routemamba
```
OR
by copy script tag:
``` html
<script src="https://unpkg.com/routemamba/dist/routemamba.min.js"></script>
```

Then Linked the routemamba.min.js file in your projects html ``` <head> ``` Tag

Example linking:

``` html
<head>
   <script src="https://unpkg.com/routemamba/dist/routemamba.min.js"></script>
</head>
```

If you are using ```npm i routemamba``` then go to the folder: ```node_modules/ ```  there you will see ```/routemamba ``` folder. Just copy the ```/routemamba ``` folder and use it in your ```/assets``` folder and then link into html ```<head>``` tag.


Best method is copy the ```/routemamba``` folder and paste it in assets folder and use it like:
```html
<script src="./assets/routemamba/dist/routemamba.min.js"></script>
```
Then create a file by name ```app.js``` in ```root``` folder.
Example:
``` bash
project_root/app.js
```

Then link the ```/app.js``` file in footer of  your project html file.

Example Code of ```/index.html``` :
```html
    <script src="/app.js"></script>
   </body>
</html>
```
OR
You can link as you want.

##
### app.js file setup example:
```app.js``` File code example as our demo test project: (you can find in ```/example``` folder)

First of all you need to set ```Server Host```. It can be your full url Example: ```https://example.com/``` OR ```https://localhost/``` for your localhost.

Example:
``` javascript
// set server host
routemamba.registerServerHost('http://example.com/');
```
Then set a ```meta content url``` to get meta content, mainly we used php for dynamic meta content. Check the ```/test/app.js``` file in this project dir.

Example:
```javascript
// set meta content
routemamba.registerMetaUrl('inc/meta-content.php');
```

After set meta content path, you need to add ```<meta></meta>``` tag on ```<head>``` tag.
##### Example:
```html
<head>
    <meta></meta>
</head>
```
**Note:** After adding this, it will will load meta content, but you will face a problem to do seo with meta content. I mean google or other's urls crawlers can't get your seo info from meta content because of meta content and other's content loading after document ready. So to fix that problem you also need to add some meta info by php.

##### Example: (in ```header.php``` file)
```php
<!DOCTYPE html>
<html lang="en">
<head>
   <meta>
      <?php
         $route = basename($_SERVER['PHP_SELF']);
         switch ($route) {
            case 'index.php':
               $title = 'Home';
               break;
            case 'about.php':
                  $title = 'About';
               break;
            case 'privacy.php':
               $title = 'Privacy';
               break;
            default:
            $title = 'Home';
            break;
         }
      
   ?>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?php echo $title; ?></title>
   </meta>
   <script src="https://cdn.rezwanahmodsami.com/routemamba/v2.0.x/routemamba.min.js"></script>
   
</head>
<body>
```

##### And In ```meta-content.php``` file:
``` php
<?php
   if (isset($_GET['route'])) {
      switch ($_GET['route']) {
         case 'index.php':
            $title = 'Home';
            break;
         case 'about.php':
               $title = 'About';
            break;
         case 'privacy.php':
            $title = 'Privacy';
            break;
         default:
         $title = 'Home';
         break;
      }
   }
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo $title; ?></title>
```

**Note:** In ```meta-content.php``` you can get any parameter from get request automaticly. 
**Example:** Suppose your url is ```https://example.com/category.php?catid=234&deviceid=45678&location=Bangladesh```
So, if you passed any parameter by url, you can get this parameter with extra parameter name is: ```route```.

##### Example: (how to get parameter's is ```meta-content.php``` file)
```php
// this is meta-content.php file
// you can get here by default route param
// example:
$route = $_GET["route"]; // this is default param and you can't remove this

// user defined param
// from: category.php?catid=234&deviceid=45678&location=Bangladesh
// example:
$catid = $_GET["catid"];
$deviceid = $_GET["deviceid"];
$location = $_GET["location"];

echo "Route: "$route."<br>";
echo "catid: "$catid."<br>";
echo "deviceid: "$deviceid."<br>";
echo "location: "$location."<br>";

// Output:
// Route: category.php
// catid: 234
// deviceid: 45678
// location: Bangladesh
```

That's everything you need to do for SEO.
___
### http routes

Then you must need to set ```http routes```. ```Http Routes``` is actually the urls, which urls user will visit. 
You need to pass array objects with all the routes.

Example: (from our test project ```/test/app.js``` file)
``` javascript
// http routes setup
routemamba.register_http_routes([
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "index.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/about.php",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "about.php"
      },
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/privacy.php",
         container: "#root",
         data: {},
         preloader: 'loading...',
         error_content: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      }
]);
```

Explanation code about array data objects:
``` javascript
{
            method: 'GET', // This is method of request, two method is accepted (POST/GET).
            meta_loader: true, // You need to define boolean(true/false) here to change the meta content on per link visits,
            content_url: "content/about.php", // there you need to give path of content_url, from where your contet will load in every route.
            container: "#root", // This is the container address, it will define by class or id in html where content will display.
            preloader: 'loading...', // This is preloader, there you can insert your preloader html content.
            data: {id: 2456}, // There you can pass data as javascript object
            error_content: '<h2>error<h2>', // There you can put error content in html.
            http_url_change: true, // there you need to define boolean(true/false) value to declare that http url should change or not in browser.
            http_url: "about.php" // This is http url, it will visible in browser url tab.
        }
```



#
Then you need to set ```routemamba.register_routes_headers([]);``` for set per routes different headers or same header content.

Example code:

``` javascript
// set  pages headers
routemamba.register_routes_headers([
      {
         content_url: "content/header.php",
         container: "#header_load",
         preloader: 'loading...',
         error_content: 'error',
         http_url: ["index.php", "about.php", "privacy.php"]
      },
]);
```
Then you need to set ```routemamba.page_footers_content([]);``` for set per routes different footers or same footer content.

Example code:
``` javascript
routemamba.register_routes_footers([
      {
         content_url: "content/footer.php",
         container: "#footer_load",
         preloader: 'loading...',
         error_content: 'error',
         http_url: ["index.php", "about.php", "privacy.php"]
      },
]);
```

### Pop route and push route:
Pop route and push route example for go back and go next:
``` javascript
// pop
routemamba.pop_route();

//push
routemamba.push_route();
```
Note: Must need to set it in any ```event listener```.
Example:
``` javascript
back.addEventListener('click', ()=>{
   routemamba.pop_route();
});

next.addEventListener('click', ()=>{
   routemamba.push_route();
});
```

# Navigate method: (Old ```route()``` method deprecated and removed from routemamba)
to navigate one page to another page without reload again website, use ```routemamba.navigate()``` method.
```javascript
if(bookmarks_btn != undefined){

   bookmarks_btn.addEventListener('click', (route) => {
         route.preventDefault(); // for stop double click
         route.stopImmediatePropagation(); // for stop immidiate Propagation.

         // routemamba.navigate(<URl here>, <Data here>, <Options here>);
         routemamba.navigate("bookmarks.php", {
             id: 345345,
             name: "rezwan",
         }, {
             header_load: true,
             footer_load: true
         });

         //more examples:
         routemamba.navigate("bookmarks.php?id=4545&name=rezwan", {}, {
             meta_loader: true,
            method: "GET",
            http_url_change: true,
            header_load: true,
            footer_load: true
         });

         routemamba.navigate("bookmarks.php?id=4545&name=rezwan", {}, {});
         routemamba.navigate("bookmarks.php?id=4545&name=rezwan");
         routemamba.navigate("bookmarks.php");
         
      
   });
}
```

#### Note:
If you face double click problem or multiple content load problem, don't forget to use: ```preventDefault()``` & ```stopImmediatePropagation()``` in on click event listener.

## Last important:
You must need to call a method ```routemamba.render();``` else content will not load.
Example: 
``` javascript
// rendering
routemamba.render();

```

### Whole ```app.js``` code example: (from ```/example``` project)
```javascript
routemamba.registerMetaUrl("inc/meta-content.php");

routemamba.registerServerHost("http://localhost:3000/example/");

routemamba.register_http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "content/home.php",
        container: "#root",
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "/"
     },
     {
      method: "GET",
      meta_loader: true,
      content_url: "content/home.php",
      container: "#root",
      preloader: '<h1>loading...</h2>',
      data: {},
      error_content: 'error',
      http_url_change: false,
      http_url: "index.php"
   },
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
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "content/privacy.php",
        container: "#root",
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "privacy.php"
     },
     {
        method: "GET",
        meta_loader: true,
        content_url: "content/tabs-example.php",
        container: "#root",
        preloader: '<h1>loading...</h2>',
        data: {},
        error_content: 'error',
        http_url_change: false,
        http_url: "tabs-example.php"
     },
]);

routemamba.register_routes_headers([
    {
        content_url: "content/header.php",
        container: "#header_load",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/","about.php", "privacy.php", "tabs-example.php"]
     },
]);

routemamba.register_routes_footers([
    {
        content_url: "content/footer.php",
        container: "#footer_load",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["/","about.php", "privacy.php", "tabs-example.php"]
     },
]);

routemamba.render();

var home_btn = document.getElementById("home");
var about_btn = document.getElementById("about");
var privacy_btn = document.getElementById("privacy");
var tabs_example_btn = document.getElementById("tabs-example");
var back = document.getElementById("back");
var next = document.getElementById("next");

back.addEventListener('click', ()=>{
    routemamba.pop_route();
 });
 
 next.addEventListener('click', ()=>{
    routemamba.push_route();
 });
 

home_btn.addEventListener('click', ()=>{
    routemamba.navigate("/", {}, {
        header_load: true,
        footer_load: true
    });
});

about_btn.addEventListener('click', ()=>{
    routemamba.navigate("about.php", {
       id: 43345,
       name: "rezwan"
    }, {
       header_load: true,
       footer_load: true
    });
 });

 privacy_btn.addEventListener('click', ()=>{
    routemamba.navigate("privacy.php");
 });
 
 tabs_example_btn.addEventListener('click', ()=>{
    routemamba.navigate("tabs-example.php", {}, {
       meta_loader: true,
       method: "GET",
       http_url_change: true,
       header_load: true,
       footer_load: true
    });
 });

```

## Creating tabs
Some people also wants to create a tabs system easily. So, now by routemamba you can easily
add tabs by routemamba method: ```routemamba.initTabs([])```. See this Example:
#### javascript initialization: 
```javascript
routemamba.initTabs([
        {
            tabSwitcher: ".tab-switcher", // tab switcher buttons class here.
            initialTab: "tab1", // inital tab id here
            activeSwitcherClass: "tab-active", // active tab class here, which class you want to add.
            activeTabClass: "activeTab", // active tab class here, which class you want to add.
            tabs: [ //define tabs info here
                {
                    tabRoute: "tab1", // tab id where content will load
                    content_url: "content/tabs/tab1.php", // tab component
                    preloader: 'loading...', // preloading content
                    error_handler: 'error', // error content
                },
                {
                    tabRoute: "tab2",
                    content_url: "content/tabs/tab2.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab3",
                    content_url: "content/tabs/tab3.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
            ]
        },
    ]);

    // note: you can initalize multiple tabs here
    // example:

    routemamba.initTabs([
        {
            tabSwitcher: ".tab-switcher",
            initialTab: "tab1",
            activeSwitcherClass: "tab-active",
            activeTabClass: "activeTab",
            tabs: [
                {
                    tabRoute: "tab1",
                    content_url: "content/tabs/tab1.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab2",
                    content_url: "content/tabs/tab2.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab3",
                    content_url: "content/tabs/tab3.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
            ]
        },
        {
            tabSwitcher: ".tab-switcher2",
            initialTab: "tab22",
            activeSwitcherClass: "tab-active2",
            activeTabClass: "activeTab2",
            tabs: [
                {
                    tabRoute: "tab12",
                    content_url: "content/tabs/tab1.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab22",
                    content_url: "content/tabs/tab2.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
                {
                    tabRoute: "tab32",
                    content_url: "content/tabs/tab3.php",
                    preloader: 'loading...',
                    error_handler: 'error',
                },
            ]
        },
    ]);
```
Note: you must need to initialize this method where tabs will load. if you want to see more details check this code: [Tabs example code](https://github.com/rezwanahmodsami/routemamba/tree/main/example/content/tabs-example.php)

#### html code example: 
```html
<style>
    .TabRoot{
        width: 500px;
        height: 500px;
        background-color: green;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }
    .tabs-btns{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tabs-btns button{
        margin-right: 5px;
    }
    .tab-contents {
        width: 480px;
        padding: 5px;
        background-color: red;
    }
    .tab-active {
        background-color: yellow;
        display: flex;
    }
    .activeTab{
        display: block !important;
    }

    .tab-active2 {
        background-color: yellow;
        display: flex;
    }
    .activeTab2{
        display: block !important;
    }
    .tab-container{
        display: none;
    }
</style>

<div class="TabRoot">
    <div class="tabs-btns">
         // this is tab switchers
        <button class="tab-switcher" tabRoute="tab1">Tab1</button> //  you must need to define tabRoute="" attribute here.
        <button class="tab-switcher" tabRoute="tab2">Tab2</button>
        <button class="tab-switcher" tabRoute="tab3">Tab3</button>
    </div>
    <div class="tab-contents">
        <div id="tab1" class="tab-container"> // there you need to define tab id, where content will load.
        </div>
        <div id="tab2" class="tab-container">
        </div>
        <div id="tab3" class="tab-container">
        </div>
    </div>
</div>
```

_______

## Reactive system by State Management in routemamba
In routemamba, you can perform reactive system by managing states. This can be done in two ways.
* Local states.
* Global States. (Coming soon)

#### Local states: 
Local states are used to show data that is reactive in a specific section or multiple sections.

To use local states you have to do like that: 
```javascript

    // To display changes in particular section
    const [count, setCount] = routemamba.localState.useState(0, "#count1");

    // to display changes at a time multiple section
    const [count, setCount] = routemamba.localState.useState(0, ["#count1", "#count2"]);

    // use setCount() to set state value
    setCount(4534);

    // call count to get count value
    console.log("Total count is:", count());
```

___
## Contributing

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Work on your fork
    1. Make your changes and additions
        - Most of your changes should be focused on `src/` and `__tests__/` folders and/or `README.md`.
        - Files such as `/dist/routemamba.min.js` and `/dist/routemamba.min.js.LICENSE.txt` are autogenerated when running tests (`npm run build`) and need not to be changed **manually**.
    2. Change or add tests if needed
    3. Run tests and make sure they pass
    4. Add changes to README.md if needed
4. Commit changes to your own branch
5. **Make sure** you merge the latest from "upstream" and resolve conflicts if there is any
6. Repeat step 3(3) above
7. Push your work back up to your fork
8. Submit a Pull request so that we can review your changes

## Author Info:

**Name:** Rezwan Ahmod Sami.\
**Profession:** Software Engineer, Entrepreneur.\
**Lives In:** Bangladesh.\
**Socials:**
- [Facebook](https://facebook.com/rezwanahmodsami)
- [Twitter](https://twitter.com/rezwanahmodsami)
- [Linkedin](https://linkedin.com/rezwanahmodsami)
- [github](https://github.com/rezwanahmodsami)
- [Instagram](https://instagram.com/rezwanahmodsami)
