import {
  OnDemandTabView,
  OnDemandTabViewRegister,
  OnDemandTabViewRegisterdData,
  type TabViewId,
} from './types';
const registerOnDemandTabView = (
  RegisterdData: OnDemandTabViewRegisterdData
): OnDemandTabViewRegister => {
  // onDemandTabViewHandler.registerOnDemandTabViewHandler();
  console.log(RegisterdData);
  return {
    loadTabView,
    reloadTabView,
  };
};

const loadTabView: OnDemandTabViewRegister['loadTabView'] = (
  TabViewId: TabViewId
) => {
  console.log('loadTabView', TabViewId);
};

const reloadTabView: OnDemandTabViewRegister['reloadTabView'] = (
  TabViewId: TabViewId
) => {
  console.log('ReloadTabView', TabViewId);
};

export { registerOnDemandTabView };
