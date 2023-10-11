import {
  OnDemandTabView,
  OnDemandTabViewRegister,
  OnDemandTabViewRegisterdData,
  RegisterdTabViewContent,
  Route,
  type TabViewId,
} from './types';
import {
  HtmlSelector,
  Info,
  OnDemandTabViewStorage,
  RouteComponentTypes,
} from './Global';
import * as RoutesInitializer from './RoutesInitializer';
import * as DomRenderer from './DomRenderer';

const registerOnDemandTabView = (
  OnDemandTabViews: OnDemandTabViewRegisterdData
): OnDemandTabViewRegister | Error => {
  if (OnDemandTabViews == undefined || OnDemandTabViews == null) {
    throw new Error(
      `OnDemandTabViews is not defined, You must need to register OnDemandTabViews to call registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
    );
  }
  if (!(OnDemandTabViews instanceof Array)) {
    throw new Error(
      `OnDemandTabViews must be an array, You must need to register OnDemandTabViews as Array-Object in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
    );
  }
  if (OnDemandTabViews.length < 1) {
    throw new Error(
      `Can't register an empty array, You must need to register OnDemandTabViews as Array-Object in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
    );
  }

  // validate the OnDemandTabViews
  for (let i = 0; i < OnDemandTabViews.length; i++) {
    if (
      OnDemandTabViews[i].TabViewId == undefined ||
      OnDemandTabViews[i].TabViewId == null
    ) {
      throw new Error(
        `TabViewId is not defined, You must need to register TabViewId in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }
    if (
      OnDemandTabViews[i].TabContentPath == undefined ||
      OnDemandTabViews[i].TabContentPath == null
    ) {
      throw new Error(
        `TabContentPath is not defined, You must need to register TabContentPath in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }
    if (
      OnDemandTabViews[i].HttpUrlChange == undefined ||
      OnDemandTabViews[i].HttpUrlChange == null
    ) {
      throw new Error(
        `HttpUrlChange is not defined, You must need to register HttpUrlChange in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }

    // validate the TabViewId is string or not
    if (typeof OnDemandTabViews[i].TabViewId !== 'string') {
      throw new Error(
        `TabViewId must be a string, You must need to register TabViewId as string in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }
    // validate the TabViewId is empty or not
    if (OnDemandTabViews[i].TabViewId == '') {
      throw new Error(
        `TabViewId is empty, You must need to register TabViewId in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }

    // validate the TabContentPath is string or not
    if (typeof OnDemandTabViews[i].TabContentPath !== 'string') {
      throw new Error(
        `TabContentPath must be a string, You must need to register TabContentPath as string in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }
    // validate the TabContentPath is empty or not
    if (OnDemandTabViews[i].TabContentPath == '') {
      throw new Error(
        `TabContentPath is empty, You must need to register TabContentPath in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }

    // validate the HttpUrlChange is boolean or not
    if (typeof OnDemandTabViews[i].HttpUrlChange !== 'boolean') {
      throw new Error(
        `HttpUrlChange must be a boolean, You must need to register HttpUrlChange as boolean in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
      );
    }

    // register the TabView
    OnDemandTabViewStorage.RegisteredOnDemandTabViews.push(OnDemandTabViews[i]);
  }
  let current_http_url: string = window.location.href;
  if (current_http_url.includes('#')) {
    let split_http_url = current_http_url.split(`#`);
    let TabViewId = split_http_url[split_http_url.length - 1];
    render(TabViewId);
  } else {
    render();
  }
  UrlStateChecker();
  return {
    loadTabView,
    reloadTabView,
  };
};

const render = (
  TabViewId?: string,
  HttpUrlChange: boolean = true
): void | Error => {
  if (OnDemandTabViewStorage.RegisteredOnDemandTabViews.length > 0) {
    // render first tabview
    let TabView: OnDemandTabView | null =
      OnDemandTabViewStorage.RegisteredOnDemandTabViews[0];
    if (TabViewId != undefined && TabViewId != null && TabViewId != '') {
      // get tabview
      TabView = findRegisteredTabView(TabViewId);
      if (TabView == null) {
        throw new Error(
          `Can't render TabView, TabView '${TabViewId}' is not registered. You must need to register TabViewId in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
        );
      }
    }

    if (HttpUrlChange) {
      HttpUrlChange = TabView.HttpUrlChange;
    }

    let http_url = buildHttpUrlWithTabViewId(TabView.TabViewId);

    let TabViewData = TabView.TabViewData || {};
    let Preloader = TabView.Preloader || '';
    let Error_content = TabView.Error_content || '';
    const Route: Route = {
      method: 'GET',
      meta_loader: false,
      content_url: TabView.TabContentPath,
      component_type: RouteComponentTypes.ON_DEMAND_TABVIEW,
      data: TabViewData,
      preloader: Preloader,
      error_content: Error_content,
      http_url_change: HttpUrlChange,
      http_url: http_url,
    };
    RoutesInitializer.route(Route);
  } else {
    throw new Error(
      `Can't render OnDemand TabViews,No TabViews Found. You must need to register OnDemandTabViews as Array-Object in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
    );
  }
};
const buildHttpUrlWithTabViewId = (TabViewId: TabViewId): string => {
  let hash_id = `#${TabViewId}`;
  let http_url = window.location.href;
  let split_http_url = http_url.split(`#`);
  http_url = split_http_url[0] + hash_id;
  return http_url;
};
const renderFromLoadedTabView = (
  TabViewContent: RegisterdTabViewContent,
  HttpUrlChange: boolean = true
): void | Error => {
  DomRenderer.__render_DOM(
    `${HtmlSelector.OnDemandTabView}`,
    TabViewContent.TabViewContent
  );
  if (!HttpUrlChange) {
    return;
  }
  let http_url = buildHttpUrlWithTabViewId(TabViewContent.TabViewId);
  window.history.pushState({}, '', http_url);
};
const loadTabView: OnDemandTabViewRegister['loadTabView'] = (
  TabViewId: TabViewId,
  HttpUrlChange: boolean = true
) => {
  OnDemandTabViewStorage.states.RequestedTabViewid = TabViewId;
  let TabView: OnDemandTabView | null = findRegisteredTabView(TabViewId);
  if (TabView == null) {
    throw new Error(
      `Can't load TabView, TabView '${TabViewId}' is not registered. You must need to register TabViewId in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
    );
  }

  let TabViewContent: RegisterdTabViewContent | null =
    findRegisteredTabViewContent(TabViewId);
  // console.log('Registerd tabview id', OnDemandTabViewStorage.states.RequestedTabViewid);
  // console.log('TabViewContent', TabViewContent);
  if (TabViewContent == null) {
    render(TabViewId, HttpUrlChange);
    return;
  } else {
    renderFromLoadedTabView(TabViewContent, HttpUrlChange);
  }
};

const reloadTabView: OnDemandTabViewRegister['reloadTabView'] = (
  TabViewId: TabViewId
) => {
  OnDemandTabViewStorage.states.RequestedTabViewid = TabViewId;
  let TabView: OnDemandTabView | null = findRegisteredTabView(TabViewId);
  if (TabView == null) {
    throw new Error(
      `Can't load TabView, TabView '${TabViewId}' is not registered. You must need to register TabViewId in registerOnDemandTabView(). Check documentation for more info: ${Info.documentation}}`
    );
  }
  render(TabViewId, false);
};

const findRegisteredTabView = (
  TabViewId: TabViewId
): OnDemandTabView | null => {
  let TabView: OnDemandTabView | null = null;
  for (
    let i = 0;
    i < OnDemandTabViewStorage.RegisteredOnDemandTabViews.length;
    i++
  ) {
    if (
      OnDemandTabViewStorage.RegisteredOnDemandTabViews[i].TabViewId ==
      TabViewId
    ) {
      TabView = OnDemandTabViewStorage.RegisteredOnDemandTabViews[i];
      break;
    }
  }
  return TabView;
};

const findRegisteredTabViewContent = (
  TabViewId: TabViewId
): RegisterdTabViewContent | null => {
  let RegisterdTabViewContent: RegisterdTabViewContent | null = null;
  for (
    let i = 0;
    i < OnDemandTabViewStorage.RegisterdTabViewsContents.length;
    i++
  ) {
    if (
      OnDemandTabViewStorage.RegisterdTabViewsContents[i].TabViewId == TabViewId
    ) {
      RegisterdTabViewContent =
        OnDemandTabViewStorage.RegisterdTabViewsContents[i];
      break;
    }
  }
  return RegisterdTabViewContent;
};

const setOnDemandTabViewContent = (
  TabViewId: TabViewId,
  TabViewContent: string
): void => {
  for (
    let i = 0;
    i < OnDemandTabViewStorage.RegisterdTabViewsContents.length;
    i++
  ) {
    if (
      OnDemandTabViewStorage.RegisterdTabViewsContents[i].TabViewId == TabViewId
    ) {
      OnDemandTabViewStorage.RegisterdTabViewsContents[i].TabViewContent =
        TabViewContent;
      break;
    } else {
      OnDemandTabViewStorage.RegisterdTabViewsContents.push({
        TabViewId: TabViewId,
        TabViewContent: TabViewContent,
      });
      break;
    }
  }
};

const UrlStateChecker = (): void => {
  window.onpopstate = (e) => {
    let current_http_url: string = window.location.href;
    if (current_http_url.includes('#')) {
      let split_http_url = current_http_url.split(`#`);
      let TabViewId = split_http_url[split_http_url.length - 1];
      // console.log('TabViewId', TabViewId);
      loadTabView(TabViewId, false);
    }
  };
};

export { registerOnDemandTabView, setOnDemandTabViewContent };
