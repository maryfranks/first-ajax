document.addEventListener("DOMContentLoaded", function() {

  var rootButton = document.getElementById("root-request");
  var pingPong = document.getElementById("ping-pong");
  var countButton = document.getElementById("count");
  var timeButton = document.getElementById("time");
  var carButton = document.getElementById("car");

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
    }).done( function( responseData ) {
      console.log( responseData );
      var newElement = document.createElement('p');
      newElement.innerText = responseData;
      document.getElementById("step3456").append(newElement);
    }).fail( function() {
      var newElement = document.createElement('p')
      newElement.innerText = "Whoops!  Something went wrong.";
      document.getElementById("step3456").append(newElement);
    }).always( function() {
      console.log("Request finished");
    });
  });

  countButton.addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      dataType: "text"
    }).done( function( responseData ){
      var newElement = document.createElement('p');
      newElement.innerText = responseData;
      document.getElementById("step7").append(newElement);
    });
  });

  timeButton.addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "GET",
      data: {timezone: "America/Mexico_City"},
      dataType: "text"
    }).done( function( responseData ) {
      var newElement = document.createElement('p');
      newElement.innerText = responseData;
      document.getElementById("step8").append(newElement);
    });
  });

  carButton.addEventListener("click", function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      dataType: "html"
    }).done( function( responseData ) {
      var newElement = document.createElement('li');
      newElement.innerHTML = responseData;
      document.getElementById("car-list").append(newElement);
    });

  });

});
