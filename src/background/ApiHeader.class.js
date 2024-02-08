import C from "../constants/constants.js";

export default class ApiHeader{
  constructor(){
    this.list = []
    this.skey = C.HEADER_STORE_KEY
    this.initList()
  }

  initList(){
    console.log('initList');
    chrome.storage.local.get(this.skey, res => {
      this.list = res[this.skey] || []
      console.log('this.list', this.list);
    })
  }

  listen(){
    const listener = res => {
      // console.log('监听网址', res);
      let url = res.url.replace(/\?.*$/, '')
      if(/\.[^\.\/]*$/.test(url)){
        return
      }
      let list = this.list.filter(n => n.url !== url)
      list.unshift({
        url,
        headers: res.requestHeaders
      })
      list = list.slice(0, 20)
      console.log('set list', list);
      this.list = list
      chrome.storage.local.set({[this.skey]: list})
    }
    
    const Before = chrome.webRequest.onBeforeSendHeaders
    if(!Before.hasListener(listener)){
      Before.addListener(listener, 
        {urls: ['<all_urls>']},
        ['requestHeaders', 'extraHeaders']
      )
    }
  }

  bindTabChange(){
    chrome.tabs.onActivated.addListener(activeInfo => {
      console.log('tab change to', activeInfo);
    })
  }
}