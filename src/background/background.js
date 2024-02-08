import ApiHeader from "./ApiHeader.class.js";

const apiHeader = new ApiHeader()
apiHeader.listen()
apiHeader.bindTabChange()

// 跟前端交互
const listener = (request, sender, sendResponse) => {
  if(request.action === 'getCurPageHeaders'){
    console.log('backgournd 111');
    sendResponse({data: 'dddddddd'})
  }
}
chrome.runtime.onMessage.addListener(listener)

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(window) {
  });
});