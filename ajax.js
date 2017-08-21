document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.getElementById("root-request");
  var pingPong = document.getElementById("ping-pong");

  rootButton.addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: {},
      dataType: "text"
    });
  });

  pingPong.addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/ping",
      method: "GET",
      dataType: "text"
    }).done (function (responseData) {
      console.log(responseData);
      var newElement = document.createElement('p');
      newElement.innerText = responseData;
      document.getElementById("step3456").append(newElement);
    }).fail (function() {
      var newElement = document.createElement('p')
      newElement.innerText = "Whoops!  Something went wrong.";
      document.getElementById("step3456").append(newElement);
    }).always(function() {
      console.log("Request finished");
    });
  });

});
