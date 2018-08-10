xhrCall("/get_places", function(error, response) {
  if (error) {
    throw new Error("could not find search results");
  }
  var cotainer = document.getElementById("review");
  console.log(response);
  var result = response;
  console.log(result.city);
  document.title = result.city;
  if (result.city === "Nazareth") {
    documet.getElementsByClassName("searchSiteBody").style.backgroundImage =
      "url(https://www.google.co.il/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/PikiWiki_Israel_17818_Cities_in_Israel.jpg/246px-PikiWiki_Israel_17818_Cities_in_Israel.jpg&imgrefurl=https://ar.wikipedia.org/wiki/%25D8%25A7%25D9%2584%25D9%2586%25D8%25A7%25D8%25B5%25D8%25B1%25D8%25A9&h=330&w=246&tbnid=QbYddkIagk2dlM:&q=nazareth&tbnh=160&tbnw=119&usg=AFrqEzfmaiFZE-cnvjET1XOlUFjxRo9Pkg&vet=12ahUKEwiR-YeE4d_cAhXPL1AKHR42Ca8Q_B0wDnoECAoQCQ..i&docid=aEqf3rc61XCU3M&itg=1&sa=X&ved=2ahUKEwiR-YeE4d_cAhXPL1AKHR42Ca8Q_B0wDnoECAoQCQ)";
  }
  if (result.city === "Jerusalem") {
    document.searchSiteBody.backgroundImage =
      "url('https://www.google.co.il/search?q=jerusalem&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjGuM-J5d_cAhVGLFAKHTAgBDQQ_AUICygC&biw=1181&bih=614#imgrc=150pH5CVN2dYcM')";
  }
  if (result.city === "Ramallah") {
    document.searchSiteBody.backgroundImage =
      "url('https://www.google.co.il/search?biw=1181&bih=614&tbm=isch&sa=1&ei=FBhsW6_0K4a00gXK2aGYAw&q=ramallah+tourism&oq=ramallah+tourism&gs_l=img.3..0i19k1.379539.382316.0.382823.8.4.0.4.4.0.228.584.0j3j1.4.0....0...1c.1.64.img..0.8.595...0j0i30k1j0i30i19k1j0i8i30i19k1.0.962CuMAeu9o#imgrc=Z32sLd9t02LGXM')";
  }
  if (result.city === "Haifa") {
    document.searchSiteBody.backgroundImage =
      "url('https://www.google.co.il/search?q=haifa+tourism&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj2uMaJ5N_cAhVDPVAKHdGbCjoQ_AUICigB&biw=1181&bih=614#imgrc=AUvrpRQpLU3SiM')";
  }
  if (result.city === "Akko") {
    document.searchSiteBody.backgroundImage =
      "url('https://www.google.co.il/search?q=akko+tourism&source=lnms&tbm=isch&sa=X&ved=0ahUKEwignoDZ5N_cAhXIY1AKHfiRDB4Q_AUICigB&biw=1181&bih=614#imgrc=fCOQCS5pTUuOCM')";
  }
  if (result.city === "Bethlehem") {
    document.searchSiteBody.backgroundImage =
      "url('https://www.google.co.il/search?q=bethlehem+tourism&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiWnKu-5d_cAhUHEVAKHfqCBlwQ_AUICigB&biw=1181&bih=614#imgrc=QzyudCSiCDjA0M')";
  }
  document.getElementById("headTitle").textContent = result.city;
  result.reviews.forEach(function(review) {
    var span = document.createElement("span");
    var div = document.createElement("div");
    div.classList.add("reviewDiv");
    span.textContent =
      review.place_name +
      ": " +
      review.rev_dis +
      "\n" +
      "stars= " +
      review.stars +
      "\n";
    div.appendChild(span);
    cotainer.appendChild(div);
  });
});
