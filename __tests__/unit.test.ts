import RmValidator from "../src/RmValidator";
import {RoutesStorage} from "../src/Global";

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

test('Push header footer data into routes footer and header storage', () => { 
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
