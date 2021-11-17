export function setCookie (cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/; SameSite=None; Secure'
}

export function getCookie (cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ''
}

export function sessionStorageEnabled () {
  try {
    window.sessionStorage.length
    return true
  } catch (error) {
    return false
  }
}

export function setSessionStorageItem (item, value) {
  if (sessionStorageEnabled()) {
    try { 
      window.sessionStorage.setItem(item, value)
      return true
    } catch (error) {
      return false
    }
  }
}

export function getSessionStorageItem (item) {
  if (sessionStorageEnabled()) {
    try { 
      return window.sessionStorage.getItem(item) 
    } catch (error) {
      return undefined
    }
  } else {
    return undefined
  }
}

export function hasOwnProperty (obj, prop) {
  return obj && Object.prototype.hasOwnProperty.call(obj, prop)
}
