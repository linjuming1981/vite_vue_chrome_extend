import C from "../constants/constants.js";
import {getCurPageInfo} from '@/utils/util.js'

export default class ApiHeader{
  constructor(){
    this.list = []
    this.pageUrl = ''
    this.skey = C.HEADER_STORE_KEY
    this.pageInfo = null
    this.initList()
  }

  async getCurPageInfo(){
    if(!this.pageInfo){
      this.pageInfo = await getCurPageInfo()
    }
    return this.pageInfo
  }

  initList(){
    console.log('initList');
    chrome.storage.local.get(this.skey, res => {
      this.list = res[this.skey] || []
      console.log('this.list', this.list);
    })
  }

  listen(){
    const listener = async res => {
      let apiUrl = res.url.replace(/\?.*$/, '')
      if(/\.[^\.\/]*$/.test(apiUrl)){
        return
      }

      let pageInfo = await this.getCurPageInfo()
      let list = this.list.filter(n => n.url !== url)
      list.unshift({
        apiUrl,
        apiHeaders: res.requestHeaders,
        pageHost: pageInfo.host,
        pagePath: pageInfo.path
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