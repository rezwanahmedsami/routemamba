import { type NavigateRoute, type NavigateData, type NavigateOptions } from './types';
export declare const navigate: (route_to: NavigateRoute, data?: NavigateData, options?: NavigateOptions, callback?: Function | null) => void;
export declare const pop_route: () => void;
export declare const push_route: () => void;
