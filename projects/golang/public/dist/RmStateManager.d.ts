/**
 * @namespace localState is to handles all local states.
 */
export declare namespace localState {
    /**
     * @useState is to handle locally reactive and non-reactive state.
     * useState(@param defaultValue, @param selector);
     * @param selector should be className | idName | null.
     * @param defaultValue can be anything.
     * when @param selector is not null, state is reactive at that time, it's mean on state change, value will update automatic.
     */
    const useState: (defaultValue?: any, selectors?: string | string[] | null) => any[];
}
