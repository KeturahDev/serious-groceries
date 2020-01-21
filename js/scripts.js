$(document).ready(function() {
  var groceries = ["item0"];
  var idItem = 1;

  $('#addy').click(function() {
    $('#groupy').append("<div class='form-group'><input type='text' class='food-item' id='item" + idItem + "' placeholder='Enter Grocery'></div>");
    groceries.push("item" + idItem);
    idItem++;
    // console.log('it works!')
  })
  $('#formy').submit(function(event) {
    event.preventDefault();

    var index = 0;
    groceries.forEach(function(grocery){
      grocery = $("#item" + index).val();
      groceries[index] = grocery;
      grocery = grocery.toUpperCase()
      index++;
     $('#listy').append('<li>' + grocery +'</li>');
     $('#formy').hide();
     

    });
     console.log('groceries:', groceries);

    

  })

}) 