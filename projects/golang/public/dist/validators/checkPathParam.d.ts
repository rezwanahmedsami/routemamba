type PathParam = {
    [key: string]: string;
};
declare function checkPathParam(url: string, pattern: string): PathParam | null;
export default checkPathParam;
