"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routemamba = void 0;
const optionsTest = {
    method: "POST",
    meta_loader: true,
    content_url: "/sdsd/sds.js",
    container: "#root",
    preloader: "afadsf",
    data: {},
    error_content: "sdf",
    http_url_change: false,
    http_url: ""
};
class Routemamba {
    name() {
        console.log(optionsTest);
    }
}
exports.routemamba = new Routemamba();
