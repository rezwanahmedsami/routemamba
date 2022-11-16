const parseObjectToQueryString = (obj: object): string => {
    let data: string = '';
        if (obj != null) {
            let parsed_keys: any[] = Object.keys(obj);
            let parsed_values: any[] = Object.values(obj);

            for (let i = 0; i < parsed_keys.length; i++) {
                data += parsed_keys[i] + '=' + parsed_values[i];

                if ((parsed_keys.length - 1) != i) {
                    data += '&';
                }
            }
        }
        return data;
}

export default parseObjectToQueryString;