var turno = 0;
$(document).ready(function () {  
  document.getElementById("turno").innerHTML = turno;
  setInterval(siguiente, 5000);
})

function siguiente() {
  var turno;
  var nombre;
  var accion = "comenzar"
  $.ajax({
    type: "POST",
    url: "",
    data: {'accion':accion},
    success: function(data){
      console.log(data.length);
      if(data.length == 2){
        turno = 0;
        paciente = "Espere un momento";
        document.getElementById("turno").innerHTML = turno;
        document.getElementById("paciente").innerHTML = paciente;
      }else{
        var datos = JSON.parse(data);
        turno = datos[0].turno;
        paciente = datos[0].nombre_paciente+" "+datos[0].app_paciente+" "+datos[0].apm_paciente;
        document.getElementById("turno").innerHTML = turno;
        document.getElementById("paciente").innerHTML = paciente;
      }
    }
  })  
}