safari.application.addEventListener("message", function(event) {
      console.log('fdghjkl');
  var pageRequest;
  if (event.name === 'getPages') {
    var urls = event.message;
    urls.forEach(function(url) {
      pageRequest = new XMLHttpRequest();
      pageRequest.open("GET", url);
      pageRequest.send();
      pageRequest.onreadystatechange = function() {
        console.log('ajaxed', url);
        if (pageRequest.readyState === 4 && pageRequest.status === 200) {
          safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("pageReturned", [pageRequest.responseText, url]);
        }
      };
    });
  }
});
