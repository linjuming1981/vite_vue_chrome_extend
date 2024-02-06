import ApiHeader from "./ApiHeader.class.js";

console.log('1111', chrome.webRequest.onBeforeSendHeaders);
const apiHeader = new ApiHeader()
apiHeader.listen()
console.log('-----');