/** there all validators @functions exporting for validate string, objects, arrays etc from one place  */
import checkPathParam from './validators/checkPathParam';
import isPathParamPattern from './validators/isPathParamPattern';
declare const RmValidator: {
    isValidUrl: (str: string) => boolean;
    isEmptyObject: (obj: object) => boolean;
    parseQueryString: (query: string) => object;
    parseObjectToQueryString: (obj: object) => string;
    isValidServerHost: (server_host: string) => boolean;
    checkPathParam: typeof checkPathParam;
    isPathParamPattern: typeof isPathParamPattern;
};
export default RmValidator;
