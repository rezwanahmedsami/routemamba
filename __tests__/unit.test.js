const routemamba = require("../src/routemamba");

test('checking "http://www.google.com" is url or correct should true', () => { 
    expect(routemamba.validURL("http://www.google.com")).toBe(true);
});

test('checking "www.google.com" is url or correct should true', () => { 
    expect(routemamba.validURL("www.google.com")).toBe(true);
});

test('checking "wwwsdsdfdsf" is url or correct', () => { 
    expect(routemamba.validURL("wwwsdsdfdsf")).toBe(false);
});

test('converting "name=sami&id=3423432" to object data', () => { 
    expect(routemamba.parse_query_string("name=sami&id=3423432")).toEqual({ name: 'sami', id: '3423432' });
});

test('converting object: {name: "sami", id: 43534} to query param: "name=sami&id=3423432" to object data', () => { 
    expect(routemamba.__parse_object_to_param({name: "sami", id: 43534})).toEqual("name=sami&id=43534");
});
