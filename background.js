chrome.tabs.onUpdated.addListener(function(tabID, info, tab) {
    if (info.status == "complete" && ~tab.url.indexOf("die-staemme") && ~tab.url.indexOf("try=confirm")) {
        chrome.tabs.executeScript(tabID, {file: "setupPage.js"});
        // first script to get data
    }
});
