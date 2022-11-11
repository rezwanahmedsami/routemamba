
import { RoutesStorage } from "./Global";
import { RegisterdRoutesPages} from "./types";

export const register_http_routes = (Routes: RegisterdRoutesPages): void => {
    // temporary code
    let routes_keys = Object.keys(Routes);
    let routes_values = Object.values(Routes);

    for (let i = 0; i < routes_keys.length; i++) {
        
        
        RoutesStorage.RoutesPages.push(routes_values[i]);
        
    }
}