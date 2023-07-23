import { HtmlSelector, RouteComponentTypes, RoutesStorage } from './Global';
import { type RouteComponentType } from './types';
import { __render_DOM } from './DomRenderer';

export const PageRenderController = () => {
  const header_content = RoutesStorage.RouteContentsState.HeaderContent;
  const footer_content = RoutesStorage.RouteContentsState.FooterContent;
  const body_content = RoutesStorage.RouteContentsState.BodyContent;

  if (
    RoutesStorage.RouteContentsState.ShouldHeaderload &&
    RoutesStorage.RouteContentsState.ShouldFooterload &&
    header_content != null &&
    footer_content != null &&
    body_content != null
  ) {
    if (
      RoutesStorage.RouteContentsState.ShouldHeaderload &&
      !RoutesStorage.RouteContentsState.renderStatus.header
    ) {
      __render_DOM(HtmlSelector.Header, header_content);
      RoutesStorage.RouteContentsState.renderStatus.header = true;
    }

    if (!RoutesStorage.RouteContentsState.renderStatus.body) {
      __render_DOM(HtmlSelector.Body, body_content);
      RoutesStorage.RouteContentsState.renderStatus.body = true;
    }

    if (
      RoutesStorage.RouteContentsState.ShouldFooterload &&
      !RoutesStorage.RouteContentsState.renderStatus.footer
    ) {
      __render_DOM(HtmlSelector.Footer, footer_content);
      RoutesStorage.RouteContentsState.renderStatus.footer = true;
    }

    if (
      RoutesStorage.RouteContentsState.HeaderContent != null &&
      RoutesStorage.RouteContentsState.BodyContent != null &&
      RoutesStorage.RouteContentsState.FooterContent != null
    ) {
      RoutesStorage.RouteContentsState.HeaderContent = null;
      RoutesStorage.RouteContentsState.BodyContent = null;
      RoutesStorage.RouteContentsState.FooterContent = null;
    }

    if (
      RoutesStorage.RouteContentsState.navigationCallback != null &&
      RoutesStorage.RouteContentsState.navigationCallback != undefined
    ) {
      RoutesStorage.RouteContentsState.navigationCallback();
    }
  } else if (
    !RoutesStorage.RouteContentsState.ShouldHeaderload &&
    RoutesStorage.RouteContentsState.ShouldFooterload &&
    header_content == null &&
    footer_content != null &&
    body_content != null
  ) {
    if (!RoutesStorage.RouteContentsState.renderStatus.body) {
      __render_DOM(HtmlSelector.Body, body_content);
      RoutesStorage.RouteContentsState.renderStatus.body = true;
    }

    if (!RoutesStorage.RouteContentsState.renderStatus.footer) {
      __render_DOM(HtmlSelector.Footer, footer_content);
      RoutesStorage.RouteContentsState.renderStatus.footer = true;
    }

    if (
      RoutesStorage.RouteContentsState.navigationCallback != null &&
      RoutesStorage.RouteContentsState.navigationCallback != undefined
    ) {
      RoutesStorage.RouteContentsState.navigationCallback();
    }

    if (
      RoutesStorage.RouteContentsState.FooterContent != null &&
      RoutesStorage.RouteContentsState.BodyContent != null
    ) {
      RoutesStorage.RouteContentsState.FooterContent = null;
      RoutesStorage.RouteContentsState.BodyContent = null;
    }
  } else if (
    RoutesStorage.RouteContentsState.ShouldHeaderload &&
    !RoutesStorage.RouteContentsState.ShouldFooterload &&
    header_content != null &&
    footer_content == null &&
    body_content != null
  ) {
    if (!RoutesStorage.RouteContentsState.renderStatus.header) {
      __render_DOM(HtmlSelector.Header, header_content);
      RoutesStorage.RouteContentsState.renderStatus.header = true;
    }

    if (!RoutesStorage.RouteContentsState.renderStatus.body) {
      __render_DOM(HtmlSelector.Body, body_content);
      RoutesStorage.RouteContentsState.renderStatus.body = true;
    }

    if (
      RoutesStorage.RouteContentsState.navigationCallback != null &&
      RoutesStorage.RouteContentsState.navigationCallback != undefined
    ) {
      RoutesStorage.RouteContentsState.navigationCallback();
    }
    if (
      RoutesStorage.RouteContentsState.HeaderContent != null &&
      RoutesStorage.RouteContentsState.BodyContent != null
    ) {
      RoutesStorage.RouteContentsState.HeaderContent = null;
      RoutesStorage.RouteContentsState.BodyContent = null;
    }
  } else if (
    !RoutesStorage.RouteContentsState.ShouldHeaderload &&
    !RoutesStorage.RouteContentsState.ShouldFooterload &&
    header_content == null &&
    footer_content == null &&
    body_content != null
  ) {
    if (!RoutesStorage.RouteContentsState.renderStatus.body) {
      __render_DOM(HtmlSelector.Body, body_content);
      RoutesStorage.RouteContentsState.renderStatus.body = true;
    }

    if (
      RoutesStorage.RouteContentsState.navigationCallback != null &&
      RoutesStorage.RouteContentsState.navigationCallback != undefined
    ) {
      RoutesStorage.RouteContentsState.navigationCallback();
    }
    if (RoutesStorage.RouteContentsState.BodyContent != null) {
      RoutesStorage.RouteContentsState.BodyContent = null;
    }
  }

  /**
   * check all @rendered successfully or not, if @rendered successfully
   * then reset the @status again
   */
  const shouldResetFlags =
    RoutesStorage.RouteContentsState.ShouldHeaderload &&
    RoutesStorage.RouteContentsState.renderStatus.header &&
    RoutesStorage.RouteContentsState.renderStatus.body &&
    RoutesStorage.RouteContentsState.ShouldFooterload &&
    RoutesStorage.RouteContentsState.renderStatus.footer;

  const shouldResetFlagsAlt1 =
    !RoutesStorage.RouteContentsState.ShouldHeaderload &&
    !RoutesStorage.RouteContentsState.renderStatus.header &&
    !RoutesStorage.RouteContentsState.ShouldFooterload &&
    !RoutesStorage.RouteContentsState.renderStatus.footer &&
    RoutesStorage.RouteContentsState.renderStatus.body;

  const shouldResetFlagsAlt2 =
    RoutesStorage.RouteContentsState.ShouldHeaderload &&
    RoutesStorage.RouteContentsState.renderStatus.header &&
    !RoutesStorage.RouteContentsState.ShouldFooterload &&
    !RoutesStorage.RouteContentsState.renderStatus.footer &&
    RoutesStorage.RouteContentsState.renderStatus.body;

  const shouldResetFlagsAlt3 =
    !RoutesStorage.RouteContentsState.ShouldHeaderload &&
    !RoutesStorage.RouteContentsState.renderStatus.header &&
    RoutesStorage.RouteContentsState.ShouldFooterload &&
    RoutesStorage.RouteContentsState.renderStatus.footer &&
    RoutesStorage.RouteContentsState.renderStatus.body;

  if (
    shouldResetFlags ||
    shouldResetFlagsAlt1 ||
    shouldResetFlagsAlt2 ||
    shouldResetFlagsAlt3
  ) {
    RoutesStorage.RouteContentsState.renderStatus.header = false;
    RoutesStorage.RouteContentsState.renderStatus.body = false;
    RoutesStorage.RouteContentsState.renderStatus.footer = false;
  }
};

export const store_content = (
  component_type: RouteComponentType,
  content: string
) => {
  switch (component_type) {
    case RouteComponentTypes.HEADER:
      RoutesStorage.RouteContentsState.HeaderContent = content;
      break;
    case RouteComponentTypes.BODY:
      RoutesStorage.RouteContentsState.BodyContent = content;
      break;
    case RouteComponentTypes.FOOTER:
      RoutesStorage.RouteContentsState.FooterContent = content;
      break;
    default:
      break;
  }
  PageRenderController();
};
