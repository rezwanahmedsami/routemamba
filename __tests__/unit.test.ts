import RmValidator from "../src/RmValidator";
import {RoutesStorage} from "../src/Global";

import * as RmRegister from "../src/RmRegister";


test('should register server host', () => { 
    let serverHost = "https://example.com";
    RmRegister.registerServerHost(serverHost);
    expect(RoutesStorage.server_host).toBe(serverHost);
});

test('should register meta url', () => { 
    let metaurl = "/web/meta.html";
    RmRegister.registerMetaUrl(metaurl);
    expect(RoutesStorage.meta_content_url).toBe(metaurl);
});

test('Should register http routes in Routes pages storage', () => { 
    RmRegister.register_http_routes([
        {
            method: "GET",
            meta_loader: true,
            content_url: "/web/components/home.html",
            container: "#root",
            preloader: '<h1>loading...</h2>',
            data: {},
            error_content: 'error',
            http_url_change: false,
            http_url: ""
         },
         {
            method: "GET",
            meta_loader: true,
            content_url: "/web/components/home.html",
            container: "#root",
            preloader: '<h1>loading...</h2>',
            data: {},
            error_content: 'error',
            http_url_change: false,
            http_url: "index.html"
         },
         {
            method: "GET",
            meta_loader: true,
            content_url: "/web/components/about.html",
            container: "#root",
            preloader: '<h1>loading...</h2>',
            data: {},
            error_content: 'error',
            http_url_change: false,
            http_url: "about.html"
         },
         {
            method: "GET",
            meta_loader: true,
            content_url: "/web/components/tabs.html",
            container: "#root",
            preloader: '<h1>loading...</h2>',
            data: {},
            error_content: 'error',
            http_url_change: false,
            http_url: "tabs.html"
         },
    ]);
    expect(RoutesStorage.RoutesPages.length).toEqual(4);

    RoutesStorage.RoutesPages = [];
    
});

test('Should register http routes footers in storage', () => { 

    RmRegister.register_routes_footers([
        {
            content_url: "/web/components/header-footer/footer.html",
            container: "#footer_load",
            preloader: 'loading...',
            error_content: 'error',
            http_url: ["index.html"]
         },
    ]);

    expect(RoutesStorage.RoutesFooters.length).toEqual(1);
    RoutesStorage.RoutesFooters = [];
 })


test('Push header footer data into routes footer and header storage', () => { 
    RoutesStorage.RoutesFooters.push({
        container: "#footer_load",
        content_url: "content/footer.php",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["index.php"]
    });
    
    RoutesStorage.RoutesHeaders.push({
        container: "#header_load",
        content_url: "content/header.php",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["index.php"]
    });
    

    expect(RoutesStorage.RoutesFooters[0]).toEqual({
        container: "#footer_load",
        content_url: "content/footer.php",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["index.php"]
    });
    expect(RoutesStorage.RoutesHeaders[0]).toEqual({
        container: "#header_load",
        content_url: "content/header.php",
        preloader: 'loading...',
        error_content: 'error',
        http_url: ["index.php"]
    });
 });

 test('Push Route pages storage data', () => { 
    RoutesStorage.RoutesPages.push({
        method: "GET",
        meta_loader: true,
        content_url: "content/home.php",
        container: "#root",
        preloader: '<h1>loading...</h2>',
        data: {name: "rezwan", description: "This is just a jest test for description"},
        error_content: 'error',
        http_url_change: false,
        http_url: ""
    });
    expect(RoutesStorage.RoutesPages[0]).toEqual({
        method: "GET",
        meta_loader: true,
        content_url: "content/home.php",
        container: "#root",
        preloader: '<h1>loading...</h2>',
        data: {name: "rezwan", description: "This is just a jest test for description"},
        error_content: 'error',
        http_url_change: false,
        http_url: ""
    });
 })

test('checking "http://www.google.com" is url or correct should true', () => { 
    expect(RmValidator.isValidUrl("http://www.google.com")).toBe(true);
});

test('checking "www.google.com" is url or correct should true', () => { 
    expect(RmValidator.isValidUrl("www.google.com")).toBe(true);
});

test('checking "wwwsdsdfdsf" is url or correct', () => { 
    expect(RmValidator.isValidUrl("wwwsdsdfdsf")).toBe(false);
});

test('converting "name=sami&id=3423432" to object data', () => { 
    expect(RmValidator.parseQueryString("name=sami&id=3423432")).toEqual({ name: 'sami', id: '3423432' });
});

test('converting object: {name: "sami", id: 43534} to query param: "name=sami&id=3423432" to object data', () => { 
    expect(RmValidator.parseObjectToQueryString({name: "sami", id: 43534})).toEqual("name=sami&id=43534");
});
