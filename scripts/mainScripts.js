
function myFunction() {
    document.getElementById("demo").style.color = "red";
    //document.getElementById("txtOne").value = "Chicken Pot Pie"
    alert(document.getElementById("txtOne").value);
}

$( document ).click(function() {
  $( "#toggle" ).toggle( "highlight" );
});

/*$(document).click(function () {
      $("#toggle").effect("highlight", {}, 3000);
});
*/

$( "#clickme" ).click(function() {
  $( "#book" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});
