function xhrCall(url, callback) {
  var myRequest = new XMLHttpRequest();
  myRequest.onreadystatechange = function() {
    if (myRequest.readyState === 4) {
      if (myRequest.status === 200) {
        var response = JSON.parse(myRequest.responseText);
        callback(null, response);
      } else {
        callback("error");
      }
    }
  };
  myRequest.open("GET", url);
  myRequest.send();
}
