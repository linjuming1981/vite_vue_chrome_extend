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

// 调试点击图标，无效
chrome.action.onClicked.addListener((tab) => {
  let url = chrome.runtime.getURL("index.html");
  console.log(33333)
  chrome.windows.create({
    url: url,
    type: "popup",
    height: 600,
    width: 800,
  });
});