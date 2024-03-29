/** there all validators @functions exporting for validate string, objects, arrays etc from one place  */

import isValidUrl from './validators/isValidUrl';
import isEmptyObject from './validators/isEmptyObject';
import parseQueryString from './validators/parseQueryString';
import parseObjectToQueryString from './validators/parseObjectToQueryString';
import isValidServerHost from './validators/isValidServerHost';
import checkPathParam from './validators/checkPathParam';
import isPathParamPattern from './validators/isPathParamPattern';

const RmValidator = {
  isValidUrl,
  isEmptyObject,
  parseQueryString,
  parseObjectToQueryString,
  isValidServerHost,
  checkPathParam,
  isPathParamPattern,
};

export default RmValidator;
