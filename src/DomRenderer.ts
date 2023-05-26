import { type RouteContainer, type RouteDomContent } from './types';
import { HtmlSelector } from './Global';
/**
 * Node Script renderer @functions
 */
const nodeScriptIs = (node: HTMLElement): boolean => {
  return node.tagName == 'SCRIPT';
};

const nodeScriptClone = (node: HTMLElement): HTMLScriptElement => {
  const script = document.createElement('script');
  script.text = node.innerHTML;

  let i = -1;
  const attrs = node.attributes;
  let attr;

  while (++i < attrs.length) {
    script.setAttribute((attr = attrs[i]).name, attr.value);
  }
  return script;
};

const nodeScriptReplace = (node: HTMLElement): HTMLElement => {
  if (nodeScriptIs(node)) {
    node.parentNode?.replaceChild(nodeScriptClone(node), node);
  } else {
    let i = -1;
    const children = node.childNodes;
    while (++i < children.length) {
      nodeScriptReplace(children[i] as HTMLElement);
    }
  }
  return node;
};

export const loadScript = (container: RouteContainer): void => {
  const nodes = document.querySelectorAll(container);
  if (nodes != null && nodes != undefined) {
    nodes.forEach((n) => {
      nodeScriptReplace(n as HTMLElement);
    });
  }
};

/**
 * This @function is for render dom content direct in body
 */
export const __render_DOM_root = (content: RouteDomContent): boolean => {
  const body = document.querySelector('body') as HTMLElement;
  if (body == undefined) {
    throw new Error("Can't render DOM Root!!. DOM Root body tag not found.");
  }

  if (body == null) {
    throw new Error("Can't render DOM Root!!. DOM Root body tag not found.");
  }
  body.innerHTML = content;
  loadScript('body');
  return true;
};

/**
 * @function is for render DOM in specific container >>
 */
export const __render_DOM = (
  container: RouteContainer,
  content: RouteDomContent
): boolean => {
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
};

export const __render_state_value = (
  container: RouteContainer,
  content: RouteDomContent
): boolean => {
  const doms: NodeListOf<Element> = document.querySelectorAll(container);

  doms.forEach((dom) => {
    if (dom == undefined) {
      throw new Error(
        `Can't render state value!!. ${container} Element not found.`
      );
    }

    if (dom == null) {
      throw new Error(
        `Can't render state value!!. ${container} Element not found.`
      );
    }
    dom.innerHTML = content;
  });
  loadScript(container);
  return true;
};
/**
 * @function for render dom head tag
 */
export const __render_DOM_head = (content: RouteDomContent): boolean => {
  const headDom = document.querySelector('head') as HTMLHeadElement;

  if (headDom == undefined) {
    throw new Error("Can't render DOM Root!!. DOM Root Head tag not found.");
  }

  if (headDom == null) {
    throw new Error("Can't render DOM Root!!. DOM Root Head tag not found.");
  }

  headDom.innerHTML = content;
  return true;
};

// generate body root element
export const generate_body_root_element = (): void => {
  const Root = document.querySelector(`${HtmlSelector.Root}`) as HTMLElement;
  if (Root == undefined || Root == null) {
    throw new Error(
      `Can't render DOM Root!!. DOM Root ${HtmlSelector.Root} tag not found.`
    );
  }

  const body_root = document.querySelector(
    `${HtmlSelector.Root} ${HtmlSelector.Body}`
  ) as HTMLElement;
  if (body_root == undefined || body_root == null) {
    // create element
    const body_root = document.createElement(`${HtmlSelector.Body}`);
    // append to Root
    Root.appendChild(body_root);
  }
};

// generate header root element
export const generate_header_root_element = (): void => {
  const Root = document.querySelector(`${HtmlSelector.Root}`) as HTMLElement;
  if (Root == undefined || Root == null) {
    throw new Error(
      `Can't render DOM Root!!. DOM Root ${HtmlSelector.Root} tag not found.`
    );
  }

  const header_root = document.querySelector(
    `${HtmlSelector.Root} ${HtmlSelector.Header}`
  ) as HTMLElement;
  if (header_root == undefined || header_root == null) {
    // create element
    const header_root = document.createElement(`${HtmlSelector.Header}`);
    // append to Root
    Root.appendChild(header_root);
  }
};

// generate footer root element
export const generate_footer_root_element = (): void => {
  const Root = document.querySelector(`${HtmlSelector.Root}`) as HTMLElement;
  if (Root == undefined || Root == null) {
    throw new Error(
      `Can't render DOM Root!!. DOM Root ${HtmlSelector.Root} tag not found.`
    );
  }

  const footer_root = document.querySelector(
    `${HtmlSelector.Root} ${HtmlSelector.Footer}`
  ) as HTMLElement;
  if (footer_root == undefined || footer_root == null) {
    // create element
    const footer_root = document.createElement(`${HtmlSelector.Footer}`);
    // append to Root
    Root.appendChild(footer_root);
  }
};

export const generate_required_all_root_elements = (): void => {
  generate_header_root_element();
  generate_body_root_element();
  generate_footer_root_element();
};
