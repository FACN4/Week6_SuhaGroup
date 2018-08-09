xhrCall("/get_places", function(error, response) {
  if (error) {
    throw new Error("could not find search results");
  }
  var cotainer = document.getElementById("review");
  console.log(response);
  var result = response;
  console.log(result.city);
  document.title = result.city;
  document.getElementById("headTitle").textContent = result.city;
  result.reviews.forEach(function(review) {
    var span = document.createElement("span");
    span.textContent = review.rev_dis + "\n" + "stars= " + review.stars;
    cotainer.appendChild(span);
  });
});
