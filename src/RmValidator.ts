/** there all validators @functions exporting for validate string, objects, arrays etc from one place  */

import isValidUrl from "./validators/isValidUrl"
import isEmptyObject from "./validators/isEmptyObject"
import parseQueryString from "./validators/parseQueryString"
import parseObjectToQueryString from "./validators/parseObjectToQueryString"

const RmValidator = {
    isValidUrl,
    isEmptyObject,
    parseQueryString,
    parseObjectToQueryString
}

export default RmValidator