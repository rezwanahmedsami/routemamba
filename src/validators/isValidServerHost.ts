import { PersistStorage } from '../Global';
import { type RouteServerHost } from '../types';
import isValidUrl from './isValidUrl';

const isValidServerHost = (server_host: RouteServerHost): boolean => {
  return (
    server_host.includes(PersistStorage.NetworkConfig.localIp) ||
    server_host.includes(PersistStorage.NetworkConfig.localhost) ||
    server_host.includes(PersistStorage.NetworkConfig.localFilePath) ||
    server_host.includes(PersistStorage.NetworkConfig.tauriHost) ||
    isValidUrl(server_host)
  );
};

export default isValidServerHost;
