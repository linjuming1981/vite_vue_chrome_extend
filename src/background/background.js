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

chrome.action.onClicked.addListener((tab) => {
  let url = chrome.runtime.getURL("index.html");

  chrome.windows.create({
    url: url,
    type: "popup",
    height: 600,
    width: 800,
  });
});