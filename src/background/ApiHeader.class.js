export default class ApiHeader{
  colloctApiHeader(apiPath){

  }

  listen(){
    const listener = res => {
      console.log('监听网址', res.url);
    }
    
    const Before = chrome.webRequest.onBeforeSendHeaders
    if(!Before.hasListener(listener)){
      Before.addListener(listener, 
        {urls: ['<all_urls>']},
        ['requestHeaders', 'extraHeaders']
      )
    }
  }
}