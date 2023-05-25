import { HtmlSelector, RouteComponentTypes, RoutesStorage } from "./Global"
import { RouteComponentType } from "./types";
import { __render_DOM } from "./DomRenderer";
export const PageRenderController = () => {
    let header_content = RoutesStorage.RouteContentsState.HeaderContent;
    let footer_content = RoutesStorage.RouteContentsState.FooterContent;
    let body_content = RoutesStorage.RouteContentsState.BodyContent;
    if (header_content != null && footer_content != null && body_content != null) {
        if (RoutesStorage.RouteContentsState.ShouldHeaderload) {
            __render_DOM(HtmlSelector.Header, header_content);
        }
        __render_DOM(HtmlSelector.Body, body_content);
        
        if (RoutesStorage.RouteContentsState.ShouldFooterload) {
            __render_DOM(HtmlSelector.Footer, footer_content);
        }
    }
}

export const store_content = (component_type: RouteComponentType, content: string) => {
    switch (component_type) {
        case RouteComponentTypes.HEADER:
            RoutesStorage.RouteContentsState.HeaderContent = content;
            break;
        case RouteComponentTypes.BODY:
            RoutesStorage.RouteContentsState.BodyContent = content;
            break;
        case RouteComponentTypes.FOOTER:
            RoutesStorage.RouteContentsState.FooterContent = content;
        default:
            break;
    }
    PageRenderController();
}
