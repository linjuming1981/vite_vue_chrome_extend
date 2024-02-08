export const getCurPageInfo = (key) => {
  return new Promise((resolve) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      let url = tabs[0].url
      let match = url.match(/https?:\/\/([^/]+)\/([^\?]+)/)
      let [, host, path] = match
      let info = {
        host, 
        path,
        title: tabs[0].title
      }
      console.log('getCurPageInfo', res);
      if(!key){
        return resolve(info)
      }
      return resolve(info[key])
    });
  })
}