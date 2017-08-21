document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.getElementById("root-request");

  rootButton.addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: {},
      dataType: "text"
    });
  });

});
