$(document).ready(function() {
  $("#form").submit(function(event) {

    var listItems = ["food1","food2","food3","food4","food5"];

      listItems.forEach(function(listItem){
        var userInput = $("#" + listItem).val();
        $('#myList').prepend('<li>'+userInput.toUpperCase()+'</li>')
      });


    event.preventDefault();
  });
});
