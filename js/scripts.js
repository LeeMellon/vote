$( document ).ready(function() {
  // alert("here");

  $("#ageForm").submit(function(event){
    event.preventDefault();
    var age_int = parseInt($("#age").val());
    console.log(age_int);
  });



});
