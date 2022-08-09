
# Routemamba (old name: elevatorjs)

Routemamba is a javascript library to develop php single page/without reload web application more easily. you don't need to use node js environment and import package etc. To use that just you need to link by <script> tag in your project.
Check the documentation for understand. You can use this library in completely free.

For any issue You can directly contact with developer: [Rezwan Ahmod Sami](https://facebook.com/rezwanahmodsami)

Note: Routemamba is new name of elevatorjs what was created by rezwan ahmod sami, all the feature is same just name is change elevatorjs to routemamba and version is reseted v1.0.8 to v1.0.0 .



# Introduction

Routemamba is now mainly developed to use in php projects. In this world lot's of web applications were built in php. Php is good enough, but in the competition of node js, a php developer can't give much user experience. So, that's the reason we developed routemamba. Routemamba js library will help you to make your php web application fully single page application and give your user better experience.

___
#### what is single page web application?
A single-page application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.
___

And also it's easy to use. You can use directly to your php project. To use that script you can directly add our cdn link in your html <head> tag or also you can add by downloading `routemamba.min.js` . 
Follow the guideline to use routemamba  in your project.

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
[Video tutorial of routemamba.min.js](https://youtu.be/8DB2wYQZyZY)(Note: This video is to use routemamba js. elvator js was previous name of routemamba.)

## Installation guide

You can directly install our routemamba js by using npm.

npm install Example:

``` bash
npm i routemamba
```
OR
by copy script tag:
``` html
<script src="https://cdn.rezwanahmodsami.com/routemamba/v1.0.x/routemamba.min.js"></script>
```

Then Linked the routemamba.min.js file in your projects html ``` <head> ``` Tag

Example linking:

``` html
<head>
   <script src="https://cdn.rezwanahmodsami.com/routemamba/v1.0.x/routemamba.min.js"></script>
</head>
```

If you are using ```npm i routemamba``` then go to the folder: ```node_modules/ ```  there you will see ```/routemamba ``` folder. Just copy the ```/routemamba ``` folder and use it in your ```/assets``` folder and then link into html ```<head>``` tag.


Best method is copy the ```/routemamba``` folder and paste it in assets folder and use it like:
```html
<script src="./assets/routemamba/routemamba.min.js"></script>
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
```app.js``` File code example as our demo test project: (you can find in ```/test``` folder)

First of all you need to set ```Server Host```. It can be your full url Example: ```https://example.com/``` OR ```https://localhost/``` for your localhost.

Example:
``` javascript
// set server host
routemamba.server_host = 'http://example.com/';
```
Then set a ```meta content url``` to get meta content, mainly we used php for dynamic meta content. Check the ```/test/app.js``` file in this project dir.

Example:
```javascript
// set meta content
routemamba.meta_content_url = 'inc/meta-content.php';
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
   <script src="https://cdn.rezwanahmodsami.com/routemamba/v1.0.x/routemamba.min.js"></script>
   
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
routemamba.http_routes([
      {
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
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
      }
]);
```

Explanation code about array data objects:
``` javascript
routemamba.route({
            method: 'GET', // This is method of request, two method is accepted (POST/GET).
            meta_loader: true, // You need to define boolean(true/false) here to change the meta content on per link visits,
            content_url: "content/about.php", // there you need to give path of content_url, from where your contet will load in every route.
            component: "#root", // This is the component address, it will define by class or id in html where content will display.
            preloader: 'loading...', // This is preloader, there you can insert your preloader html content.
            data: {id: 2456}, // There you can pass data as javascript object
            error_handler: '<h2>error<h2>', // There you can put error content in html.
            http_url_change: true, // there you need to define boolean(true/false) value to declare that http url should change or not in browser.
            http_url: "about.php" // This is http url, it will visible in browser url tab.
        })
```

in ```routemamba.route()``` method
        ```@param``` ```arr``` will take object as parameter.

#### Object keys:
```method: GET, // This is method of request, two method is accepted (POST/GET). ```

```meta_loader: true, // You need to define boolean(true/false) here to change the meta content on per link visits, ```

```content_url: "content/about.php", // there you need to give path of content_url, from where your contet will load in every route.```

```component: "#root", // This is the component address, it will define by class or id in html where content will display.```

```preloader: 'loading...', // This is preloader, there you can insert your preloader html content.```

```data: {id: 2456}, // There you can pass data as javascript object```

```error_handler: '<h2>error<h2>', // There you can put error content in html.```

``` http_url_change: true, // there you need to define boolean(true/false) value to declare that http url should change or not in browser.```

```http_url: "about.php" // This is http url, it will visible in browser url tab.```


This objects keys also same as other's methods.

#
Then you need to set ```routemamba.page_headers_content([]);``` for set per routes different headers or same header content.

Example code:

``` javascript
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
         content_url: "content/header2.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
      }
]);
```
Then you need to set ```routemamba.page_footers_content([]);``` for set per routes different footers or same footer content.

Example code:
``` javascript
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

### route example with ```onclick``` event:
``` javascript
home_btn.addEventListener('click', ()=>{
   routemamba.route({
         method: "GET",
         meta_loader: true,
         content_url: "content/home.php",
         component: "#root",
         preloader: 'loading...',
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
         preloader: 'loading...',
         data: {id: 2456},
         error_handler: 'error',
         http_url_change: true,
         http_url: "about.php"
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
```

### Externally header and footer loader:

This  ```routemamba.header_load({});``` & ```routemamba.footer_load({});``` methods specially use for load header in onclick route to change header and footer.
By this features you can add multiple header and footer. Specially for mobile based web applications development and dynamic data pass and content load.

See the code example:
``` javascript
//header loader method
routemamba.header_load({
    content_url: "header-content/header_post_page.php",
    component: "#header_load",
    preloader: preloader_header,
    error_handler: 'error',
    http_url: url
});

// footer loader method
routemamba.footer_load({
   content_url: "footer-content/footer_post_page.php",
   component: "#footer_load",
   preloader: preloader_footer,
   error_handler: 'error',
   http_url: url
});
```

Details use example:

``` javascript
if(bookmarks_btn != undefined){

   bookmarks_btn.addEventListener('click', (route) => {
         route.preventDefault(); // for stop double click
         route.stopImmediatePropagation(); // for stop immidiate Propagation.
         
         let url  = $(bookmarks_btn).attr("href");
         routemamba.header_load({
               content_url: "header-content/header_bookmarks.php",
               component: "#header_load",
               preloader: preloader_header,
               error_handler: 'error',
               http_url: url
         });
         routemamba.route({
               method: "GET",
               meta_loader: true,
               content_url: "app-content/bookmarks-content.php",
               component: "#main_body",
               preloader: '',
               error_handler: 'error',
               http_url_change: true,
               http_url: url
         });

            routemamba.footer_load({
               content_url: "footer-content/footer_bookmarks.php",
               component: "#footer_load",
               preloader: '',
               error_handler: 'error',
               http_url: url
      });
      
   });
}
```

#### Note:
If you face double click problem or multiple content load problem, don't forget to use: ```preventDefault()``` & ```stopImmediatePropagation()``` in on click event listener.

## Last important:
You must need to call a method ```routemamba.__render();``` else content will not load.
Example: 
``` javascript
// rendering
routemamba.__render();

```

### Whole ```app.js``` code example: (from ```/test``` project)
```javascript

let home_btn = document.getElementById("home");
let about_btn = document.getElementById("about");
let privacy_btn = document.getElementById("privacy");
let back = document.getElementById("back");
let next = document.getElementById("next");

// defining server host
routemamba.server_host = 'http://localhost/routemamba/routemamba-v2/test/';

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
         preloader: 'loading...',
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
         content_url: "content/header2.php",
         component: "#header_load",
         preloader: 'loading...',
         error_handler: 'error',
         http_url_change: false,
         http_url: "privacy.php"
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
         preloader: 'loading...',
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
         preloader: 'loading...',
         data: {id: 2456},
         error_handler: 'error',
         http_url_change: true,
         http_url: "about.php"
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


// rendering
routemamba.__render();

```

## Author Info:
![Rezwan Ahmod Sami](https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/277165262_3131060227148128_3760611883011220703_n.jpg?_nc_cat=103&ccb=1-6&_nc_sid=19026a&_nc_eui2=AeFQqPH7wmu5cB65urI2c5dCc757f2tOD-tzvnt_a04P65eQicMg1K12Dh0Y2VbQox-5-1q-YU_Up8XfJ7s6VLPB&_nc_ohc=y3t2Zy9e7K4AX_Bd5Z8&_nc_ht=scontent.fdac24-2.fna&oh=00_AT-EW8skhXueCcoHLfDKCEGSmWmsmheMzF023kDhfZWPpA&oe=62800FC8)

**Name:** Rezwan Ahmod Sami.\
**Profession:** Software Engineer, Entrepreneur.\
**Lives In:** Bangladesh.\
**Socials:**
- [Facebook](https://facebook.com/rezwanahmodsami)
- [Twitter](https://twitter.com/rezwanahmodsami)
- [Linkedin](https://linkedin.com/rezwanahmodsami)
- [github](https://github.com/rezwanahmodsami)
- [Instagram](https://instagram.com/rezwanahmodsami)