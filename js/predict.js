( function( window ) {
// TO START THE FLASK SERVER, RUN "python /var/www/html/py/flask/flask-test.py"
$('#predict-sales').click(function(){
 $.ajax({
      type:'GET',
      url:"localhost:[8080]/flask/"+$('#critic_score').val(), // ADD MORE VARIABLES SEPERATED BY "/"
    async:true,
    cache: false,
    timeout:30000,
      success: function(data) {
        swal({
          title: "You can expect to sell about",
          text: str(data) + "units of the game",
          type: "success",
          confirmButtonText: "WOW, let me do another!"
          });
      },
      error: function(request, status, error) {
        console.log(request, status, error);
        alert("Error: " + error + status + request)
      }
   });
});
  
} )( window );