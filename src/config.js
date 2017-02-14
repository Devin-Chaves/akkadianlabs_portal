export const apiDomain = 'https://192.168.110.135/pme/portal/'
export const loginUrl = apiDomain + 'login/8'
export const deviceListUrl = apiDomain + 'getDevices'
export const pinPasswordUrl = apiDomain + 'updatePinPassword'
export const getHeader = function () {
  const headers = {
    'Accept': 'application/json'
    // 'sid': window.localStorage.getItem('authUser')
    // TODO Replace auth string with token_ID
    // 'Authorization': 'Basic ' + 'bHJvZHJpZ3VlenRlc3Q6cGFzc3dvcmQxMjM='
  }
  return headers
}
