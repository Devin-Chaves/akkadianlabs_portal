export const apiDomain = 'https://192.168.110.135/pme/portal/'
export const loginUrl = apiDomain + 'login/8'
export const deviceListUrl = apiDomain + 'getDevices'

export const pinPasswordUrl = apiDomain + 'updatePinPassword'

export const getHeader = function () {
  const authData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': authData.auth,
    'Service-Group': authData.sgid
  }
  return headers
}
