chrome.browserAction.onClicked.addListener( () => {
  chrome.tabs.create( { url: "html/options.html" } );
} );
