
$(document).ready(function () {

  $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  
   $("#submit").click(function (e) { 
    e.preventDefault();
  console.log("miauuuu!");


    var nombre= $("#userName").val();
    var asunto= $("#userSubject").val();
    var mensaje= $("#userMessage").val();

  console.log({nombre, asunto, mensaje});

   $("#user-name").text(nombre);
   $("#user-subject").text(asunto);
   $("#user-message").text(mensaje);

  $("#confirm-submit").click(function (e) { 
    e.preventDefault();
    console.log("miauuuu")
    
    $("#contacto")[0].reset();
    $(".modal").modal("toggle");

  });
    
  });
    
  });




  
