import { PersistStorage } from '../src/Global';
import RmValidator from '../src/RmValidator';

test('should cehck valid server host or not', () => {
  let localhost = PersistStorage.NetworkConfig.localhost;
  let localIp = PersistStorage.NetworkConfig.localIp;
  let tauriHost = PersistStorage.NetworkConfig.tauriHost;
  let LiveDomain = 'https://example.com';

  expect(RmValidator.isValidServerHost(localhost)).toBe(true);
  expect(RmValidator.isValidServerHost(localIp)).toBe(true);
  expect(RmValidator.isValidServerHost(tauriHost)).toBe(true);
  expect(RmValidator.isValidServerHost(LiveDomain)).toBe(true);
});

test('checking "http://www.google.com" is url or correct should true', () => {
  expect(RmValidator.isValidUrl('http://www.google.com')).toBe(true);
});

test('checking "www.google.com" is url or correct should true', () => {
  expect(RmValidator.isValidUrl('www.google.com')).toBe(true);
});

test('checking "wwwsdsdfdsf" is url or correct', () => {
  expect(RmValidator.isValidUrl('wwwsdsdfdsf')).toBe(false);
});

test('converting "name=sami&id=3423432" to object data', () => {
  expect(RmValidator.parseQueryString('name=sami&id=3423432')).toEqual({
    name: 'sami',
    id: '3423432',
  });
});

test('converting object: {name: "sami", id: 43534} to query param: "name=sami&id=3423432" to object data', () => {
  expect(
    RmValidator.parseObjectToQueryString({ name: 'sami', id: 43534 })
  ).toEqual('name=sami&id=43534');
});

// Describe a test suite for the function
describe('checkPathParam', () => {
  // Test some valid URL and path parameter pattern pairs
  test("should return {id: '56456546546'} for /post/56456546546 and /post/:id", () => {
    expect(
      RmValidator.checkPathParam('/post/56456546546', '/post/:id')
    ).toEqual({ id: '56456546546' });
  });

  test("should return {name: 'john'} for /user/john/profile and /user/:name/profile", () => {
    expect(
      RmValidator.checkPathParam('/user/john/profile', '/user/:name/profile')
    ).toEqual({ name: 'john' });
  });

  test("should return {id: '123', action: 'review'} for /product/123/review and /product/:id/:action", () => {
    expect(
      RmValidator.checkPathParam('/product/123/review', '/product/:id/:action')
    ).toEqual({ id: '123', action: 'review' });
  });

  test("should return {id: 'abc'} for /post/abc and /post/:id", () => {
    expect(RmValidator.checkPathParam('/post/abc', '/post/:id')).toEqual({
      id: 'abc',
    });
  });

  // Test some invalid URL and path parameter pattern pairs
  test('should return null for /post/123 and /user/:id', () => {
    expect(RmValidator.checkPathParam('/post/123', '/user/:id')).toBeNull();
  });

  test('should return null for /post/123/comment and /post/:id', () => {
    expect(
      RmValidator.checkPathParam('/post/123/comment', '/post/:id')
    ).toBeNull();
  });
});

// Describe a test suite for the function
describe('isPathParamPattern', () => {
  // Test some valid path parameter patterns
  test('should return true for /post/:id', () => {
    expect(RmValidator.isPathParamPattern('/post/:id')).toBe(true);
  });

  test('should return true for /user/:name/profile', () => {
    expect(RmValidator.isPathParamPattern('/user/:name/profile')).toBe(true);
  });

  test('should return true for /product/:id/:action', () => {
    expect(RmValidator.isPathParamPattern('/product/:id/:action')).toBe(true);
  });

  // Test some invalid path parameter patterns
  test('should return false for /post/123', () => {
    expect(RmValidator.isPathParamPattern('/post/123')).toBe(false);
  });

  test('should return false for /user/:id:action', () => {
    expect(RmValidator.isPathParamPattern('/user/:id:action')).toBe(false);
  });

  test('should return false for post/:id', () => {
    expect(RmValidator.isPathParamPattern('post/:id')).toBe(false);
  });
});
