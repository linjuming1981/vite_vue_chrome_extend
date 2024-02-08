import C from '@/constants/constants.js'

export default {
  getPageHeaders({host}){
    return new Promise(resolve => {
      chrome.storage.local.get(C.HEADER_STORE_KEY, res => {
        let list = res[C.HEADER_STORE_KEY]
        if(host){
          list = list.filter(n => {
            return n.pageHost === host
          })
        }
        resolve(list)
      })
    })
  }
}