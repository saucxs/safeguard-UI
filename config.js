/**
 * 全局配置
 */

import xhr from 'bfd/xhr'
import message from 'bfd/message'
import auth from 'public/auth'
import { browserHistory } from 'react-router'

// AJAX 全局配置
if (__DEV__) {
  // xhr.baseUrl = 'http://10.11.6.170:8080/api/'
    xhr.baseUrl = '/data/'
} else {
  xhr.baseUrl = '/api/'
    // xhr.baseUrl='test.json'
}

xhr.success = (res, option) => {
  if (typeof res !== 'object') {
    message.danger(option.url + ': response data should be JSON')
    return
  }
  switch (res.code) {
    case 200:
      option.success && option.success(res.data)
      break
    case 401:
      auth.destroy()
      browserHistory.push('/login')
      break
    default:
      message.danger(res.message || 'unknown error')
  }
}
