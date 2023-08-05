import { type RouteContainer, type RouteDomContent } from './types';
export declare const loadScript: (container: RouteContainer) => void;
/**
 * This @function is for render dom content direct in body
 */
export declare const __render_DOM_root: (content: RouteDomContent) => boolean;
/**
 * @function is for render DOM in specific container >>
 */
export declare const __render_DOM: (container: RouteContainer, content: RouteDomContent) => boolean;
export declare const __render_state_value: (container: RouteContainer, content: RouteDomContent) => boolean;
/**
 * @function for render dom head tag
 */
export declare const __render_DOM_head: (content: RouteDomContent) => boolean;
export declare const generate_body_root_element: () => void;
export declare const generate_header_root_element: () => void;
export declare const generate_footer_root_element: () => void;
export declare const generate_required_all_root_elements: () => void;
