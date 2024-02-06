import ApiHeader from "./ApiHeader.class.js";

const apiHeader = new ApiHeader()
apiHeader.listen()

// 跟前端交互
const listener = (request, sender, sendResponse) => {
  if(request.action === 'getCurPageHeaders'){
    console.log('backgournd 111');
    sendResponse({data: 'dddddddd'})
  }
}
chrome.runtime.onMessage.addListener(listener)