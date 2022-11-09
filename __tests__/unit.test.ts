import RmValidator from "../src/RmValidator";

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
