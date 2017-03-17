export const apiDomain = 'https://192.168.110.135/pme/portal/'
export const loginUrl = apiDomain + 'login/'
export const deviceListUrl = apiDomain + 'getDevices/'
export const deviceUrl = apiDomain + 'getDevice/'
export const speedDialsUrl = apiDomain + 'getSpeedDials/'
export const pinPasswordUrl = apiDomain + 'updatePinPassword/'
export const extensionsUrl = apiDomain + 'getExtensionsByUser/'
export const callForwardUrl = apiDomain + 'updateCallForward/'
export const vpeUrl = apiDomain + 'getVisualPhoneEditor/'

export const getHeader = function () {
  const authData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': authData.auth,
    'Service-Group': authData.sgid
  }
  return headers
}
