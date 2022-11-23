import { RouteContainer, RouteDomContent } from "./types";

/**
 * Node Script renderer @functions
 */
const nodeScriptIs = (node: HTMLElement): boolean => {
    return node.tagName == "SCRIPT";
}

const nodeScriptClone = (node: HTMLElement): HTMLScriptElement => {
    let script = document.createElement("script") as HTMLScriptElement;
    script.text = node.innerHTML;

    let i = -1, attrs = node.attributes, attr;

    while (++i < attrs.length) {
        script.setAttribute( (attr = attrs[i]).name, attr.value);
    }
    return script;
}

const nodeScriptReplace = (node: HTMLElement): HTMLElement => {
    if(nodeScriptIs(node) == true){
        node.parentNode?.replaceChild(nodeScriptClone(node), node);
    }else{
        var i = -1, children = node.childNodes;
        while (++i < children.length) {
            nodeScriptReplace(children[i] as HTMLElement);
        }
    }
    return node;
}

export const loadScript = (container: RouteContainer): void => {
    let nodes;
    nodes = document.querySelectorAll(container);
    if (nodes != null && nodes != undefined) {
        nodes.forEach(n => {
            nodeScriptReplace(n as HTMLElement);
        })
    }
}



/**
 * This @function is for render dom content direct in body
 */
export  const __render_DOM_root = (content: RouteDomContent): boolean => {
    const body = document.querySelector("body") as HTMLElement;
    if (body == undefined) {
        throw new Error("Can't render DOM Root!!. DOM Root body tag not found.");
    }

    if (body == null) {
        throw new Error("Can't render DOM Root!!. DOM Root body tag not found.");
    }
    body.innerHTML = content;
    loadScript("body");
    return true;
}

/**
 * @function is for render DOM in specific container
 */
export const __render_DOM = (container: RouteContainer, content: RouteDomContent): boolean => {
    const dom = document.querySelector(container) as HTMLElement;

    if (dom == undefined) {
        throw new Error(`Can't render DOM!!. ${container} Element not found.`);
    }

    if (dom == null) {
        throw new Error(`Can't render DOM!!. ${container} Element not found.`);
    }
    dom.innerHTML = content;
    loadScript(container);
    return true;
}

export const __render_state_value = (container: RouteContainer, content: RouteDomContent): boolean => {
    const dom = document.querySelector(container) as HTMLElement;

    if (dom == undefined) {
        throw new Error(`Can't render state value!!. ${container} Element not found.`);
    }

    if (dom == null) {
        throw new Error(`Can't render state value!!. ${container} Element not found.`);
    }
    dom.innerHTML = content;
    loadScript(container);
    return true;
}
/**
 * @function for render dom head tag
 */
export const __render_DOM_head = (content: RouteDomContent): boolean => {
    let headDom = document.querySelector("head") as HTMLHeadElement;

    if (headDom == undefined) {
        throw new Error(`Can't render DOM Root!!. DOM Root Head tag not found.`);
    }

    if (headDom == null) {
        throw new Error(`Can't render DOM Root!!. DOM Root Head tag not found.`);
    }

    headDom.innerHTML = content;
    return true;
} 