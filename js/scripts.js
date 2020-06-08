$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    let item1 = $('input#item1').val();
    let item2 = $('input#item2').val();
    let item3 = $('input#item3').val();

    console.log(item1);
    console.log(item2);
    console.log(item3);

    let groceries = [item1, item2, item3];

    groceries.forEach(function(grocery) {
      $('.output').append('<ul>' + grocery + '</ul>');
      console.log(grocery);
    }) 






  });
});