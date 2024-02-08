import C from '@/constants/constants.js'

export default {
  getPageHeaders(){
    return new Promise(resolve => {
      chrome.storage.local.get(C.HEADER_STORE_KEY, res => {
        resolve(res[C.HEADER_STORE_KEY])
      })
    })
  }
}