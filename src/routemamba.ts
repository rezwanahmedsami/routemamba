import { __render_DOM } from "./DomRenderer";
// import { RoutesStorage } from "./Global";
import RmValidator from "./RmValidator";

let scripContent = "<script>console.log('loaded from load script')";

const testingValidator = () => {
    return RmValidator.isValidUrl("https://www.google.com");
}

export {
    __render_DOM,
    scripContent,
    testingValidator
}