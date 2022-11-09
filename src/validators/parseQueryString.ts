const parseQueryString = (query: string): object => {
    let vars: Array<string> = query.split("&");
    let result: any = {};

    for (let i: number = 0; i < vars.length; i++) {
        
        let pair: Array<string> = vars[i].split("=");
        let key: string = decodeURIComponent(pair[0]);
        let value: string = decodeURIComponent(pair[1]);

        if (typeof result[key] == "undefined") {
            result[key] = decodeURIComponent(value);
        }else if(typeof result[key] === "string"){
            let arr: any[] = [result[key], decodeURIComponent(value)];
            result[key] = arr;
        }else{
            result[key].push(decodeURIComponent(value));
        }
    }

    return result;
}

export default parseQueryString;