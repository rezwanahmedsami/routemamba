import { PersistStorage } from "../Global";
import { RouteServerHost } from "../types";

const isValidServerHost = (server_host: RouteServerHost): boolean => {

    return (server_host.indexOf(PersistStorage.NetworkConfig.localIp) !== -1) ||          (server_host.indexOf(PersistStorage.NetworkConfig.localhost) !== -1) || (server_host.indexOf(PersistStorage.NetworkConfig.localFilePath) !== -1) || (server_host.indexOf(PersistStorage.NetworkConfig.tauriHost) !== -1);
}

export default isValidServerHost;