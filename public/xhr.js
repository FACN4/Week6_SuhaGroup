function xhrCall(url, callback) {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
      var response = JSON.parse(myRequest.responseText);
       callback(response);
    }
  };
  myRequest.open("GET", url);
  myRequest.send();
}
