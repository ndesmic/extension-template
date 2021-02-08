function openPage(tab) {
   chrome.tabs.create({
     url: "/html/page.html"
   });
}

chrome.action.onClicked.addListener(openPage);