import { RegisterdRoutesFooters, RegisterdRoutesHeaders, RegisterdRoutesPages } from "./types";

/**
 * there all golbal array, object and variable initialized
 */
export namespace  RoutesStorage {
    export var RoutesPages:             RegisterdRoutesPages = [];
    export var RoutesHeaders:           RegisterdRoutesHeaders<Array<string>> = [];
    export var RoutesFooters:           RegisterdRoutesFooters<Array<string>> = [];
}