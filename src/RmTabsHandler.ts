import { Route, TabRegister } from "./types";
import * as RoutesInitializer from "./RoutesInitializer";
/**
 * 
 * @param RegisterdTabs 
 */
export const initTabs = (RegisterdTabs: TabRegister): void =>{
    RegisterdTabs.forEach(regTab => {
        if (regTab.tabSwitcher == undefined || regTab.tabSwitcher == "") {
            throw new Error("`tabSwitcher` field can't be undefined or empty in Tabs register.");
        }
        if (regTab.initialTab == undefined || regTab.initialTab == "") {
            throw new Error("`initialTab` field can't be undefined or empty in Tabs register.");
        }
        if (regTab.tabs == undefined) {
            throw new Error("`tabs` field can't be undefined in Tabs register.");
        }

        let tabSwitcher = document.querySelectorAll(regTab.tabSwitcher);

        tabSwitcher.forEach(switcher => {
            // check tabRoute matched with initial tab or not
            if (switcher.getAttribute("tabRoute") == regTab.initialTab) {
                
                if (document.querySelector(`.${regTab.activeSwitcherClass}`) != null && document.querySelector(`.${regTab.activeSwitcherClass}`) != undefined) {
                    document.querySelector(`.${regTab.activeSwitcherClass}`)?.classList.remove(regTab.activeSwitcherClass);
                }
                /**
                 * @param tabRoute if matched
                 * then add @param activeSwitcherClass
                 * 
                 * @param activeSwitcherClass adding into switcher
                 */
                switcher.classList.add(regTab.activeSwitcherClass);
            }

            /**
             * @addEventListener to each switcher class
             * @click event listener will be add
             */
            switcher.addEventListener("click", ()=>{
                /**
                 * get @tabRoute on every @click event
                 */
                let tabRoute = switcher.getAttribute("tabRoute");
                if (tabRoute != undefined) {
                    if (document.querySelector(`.${regTab.activeSwitcherClass}`) != null && document.querySelector(`.${regTab.activeSwitcherClass}`) != undefined) {
 
                        document.querySelector(`.${regTab.activeSwitcherClass}`)?.classList.remove(regTab.activeSwitcherClass);
                    }
                    switcher.classList.add(regTab.activeSwitcherClass);
                    /**
                     * activating @tabComponent
                     */
                    let tabComponent = document.getElementById(tabRoute);
                    if (tabComponent != null && tabComponent != undefined) {
                        if (regTab.activeTabClass != undefined && regTab.activeTabClass != null && regTab.activeTabClass != "") {
                            document.querySelector(`.${regTab.activeTabClass}`)?.classList.remove(regTab.activeTabClass);
                            tabComponent.classList.add(regTab.activeTabClass);
                        }else{
                            document.querySelector<HTMLElement>('.rm-tab-active')?.style.setProperty("display","", "");
                            document.querySelector('.rm-tab-active')?.classList.remove('rm-tab-active');
                            tabComponent.style.setProperty("display","block", "important");
                            tabComponent.classList.add('rm-tab-active');
                        }
                    }else{
                        throw new Error("`"+tabRoute+"` tabRoute container can't be undefined.");
                    }
                }else{
                    throw new Error("`tabRoute` Attribute can't be undefined in tab switcher.");
                }
            });

        });

        /**
         * getting each @tabs
         */
        regTab.tabs.forEach(Tab => {
            if (Tab.tabRoute == regTab.initialTab) {
                let tabComponent = document.getElementById(Tab.tabRoute);
                if (tabComponent != null && tabComponent != undefined) {
                    if (regTab.activeTabClass != undefined && regTab.activeTabClass != null && regTab.activeTabClass != "") {
                        tabComponent.classList.add(regTab.activeTabClass);
                    }else{
                        tabComponent.style.setProperty("display","block", "important");
                        tabComponent.classList.add('rm-tab-active');

                    }
                }else{
                    throw new Error("`"+Tab.tabRoute+"` tabRoute container can't be undefined.");
                }
            }
            let Route: Route = {
                method: "GET",
                meta_loader: false,
                content_url: Tab.content_url,
                container: `#${Tab.tabRoute}`,
                preloader: Tab.preloader,
                error_content: Tab.error_content,
                data: {},
                http_url_change: false,
                http_url: "",
            }
            if (Tab.data != undefined || Tab.data != null) {
                Route.data = Tab.data;
             }
             /**
              * @rendering Tab content on first load
              */
            RoutesInitializer.route(Route);
        });

    });
}