import * as DomRenderer from "./DomRenderer";
/**
 * @namespace localState is to handles all local states.
 */
export namespace localState{
    /**
     * @useState is to handle locally reactive and non-reactive state.
     * useState(@param defaultValue, @param selector);
     * @param selector should be className | idName | null.
     * @param defaultValue can be anything.
     * when @param selector is not null, state is reactive at that time, it's mean on state change, value will update automatic.
     */
    export const useState = (defaultValue: any = undefined, selectors: string | string[] | null = null): any[] =>{
        let value = defaultValue;
        const getValue = () => value;
        const setValue = (newValue: any) =>{
            value = newValue;
            if (selectors != null) {
                if (Array.isArray(selectors)) {
                    selectors.forEach(selector => {
                        DomRenderer.__render_state_value(selector as string, value);
                    });
                }else{
                    DomRenderer.__render_state_value(selectors as string, value);
                }
            }
        }
        return [getValue, setValue];
    }
}