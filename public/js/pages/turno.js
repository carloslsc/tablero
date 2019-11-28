//###########################Clientes###########################//
$(document).ready(function () {  
    $('#dtTurnoExample').DataTable();  
    $('#dtTurnoHoyExample').DataTable();

    $('#dtTurnoVigenteExample').DataTable( {
      "ajax": "../public/json/Turno.json",
      "columns": [
          {
            "render": function (data, type, JsonResultRow, meta) {
              return '<div id="fecha'+JsonResultRow.turno+'">'+JsonResultRow.turno+'</div>';
            }
          },
          {
            "render": function (data, type, JsonResultRow, meta) {
                return '<div id="paciente'+JsonResultRow.turno+'">'+JsonResultRow.nombre_paciente+' '+JsonResultRow.app_paciente+' '+JsonResultRow.apm_paciente+'</div>';
            }
          }
      ]
  });

    SolicitudInicial();
});



var Turno;

function SolicitudInicial() {
  var accion = "solicitudinicial";

    $.ajax({
      type: "POST",
      url: "",
      data: {'accion':accion},
      success: function(data){
        var datos = JSON.parse(data);
        if(datos.turno == 0){
          $("#SiguienteBoton").prop('disabled', true);
          $("#AtrasBoton").prop('disabled', true);
        }else if(datos.turno >= 2){
          $("#SiguienteBoton").prop('disabled', false);
          $("#AtrasBoton").prop('disabled', false);
          $("#ComenzarBoton").prop('disabled', true);
        }else{
          $("#AtrasBoton").prop('disabled', true);
          $("#SiguienteBoton").prop('disabled', false);
          $("#ComenzarBoton").prop('disabled', true);
        }
        Turno = datos.turno;
      }
    })
}
 

function Solicitud() {
  var accion = "solicitud";

  var Filas = $("#dtTurnoVigenteExample tr").length;

    $.ajax({
      type: "POST",
      url: "",
      data: {'accion':accion},
      success: function(data){
        var datos = JSON.parse(data);
        Turno = datos[0].turno;
        var Nombre = datos[0].nombre_paciente;
        var App = datos[0].app_paciente;
        var Apm = datos[0].apm_paciente;
        if(datos[0].turno == 0){
          $("#SiguienteBoton").prop('disabled', true);
          $("#AtrasBoton").prop('disabled', true);
        }else if(datos[0].turno >= 2){
          $("#SiguienteBoton").prop('disabled', false);
          $("#AtrasBoton").prop('disabled', false);
          $("#ComenzarBoton").prop('disabled', true);
        }else{
          $("#AtrasBoton").prop('disabled', true);
          $("#SiguienteBoton").prop('disabled', false);
          $("#ComenzarBoton").prop('disabled', true);
        }
        console.log(Filas);
        //Turno = datos[0].turno;
        $('#dtTurnoVigenteExample').DataTable().clear().draw();
        $('#dtTurnoVigenteExample').DataTable().destroy();
        $('#dtTurnoVigenteExample').DataTable().row.add( [
          '<div id="fecha'+Turno+'">'+Turno+'</div>',
          Nombre+' '+App+' '+Apm
        ]).draw( false );
      }
    })
}

    function ConfirmCita(id) {
        var fecha = $('tr td #ConfirmCitaModal').parents('tr').find('#fecha'+id).text();
        var hora = $('tr td #ConfirmCitaModal').parents('tr').find('#hora'+id).text();
        var asunto = $('tr td #ConfirmCitaModal').parents('tr').find('#asunto'+id).text();
        var paciente = $('tr td #ConfirmCitaModal').parents('tr').find('#paciente'+id).text();
        var doctor = $('tr td #ConfirmCitaModal').parents('tr').find('#doctor'+id).text();
        $('#dtTurnoExample').DataTable().row( $('tr td #ConfirmCitaModal').parents('tr') ).remove().draw();
        var accion = "confirmar";
        $.ajax({
          type: "POST",
          url: "",
          data: {'turno':id,'accion':accion},
          success: function(data){
            console.log(data);
            $('#dtTurnoHoyExample').DataTable().row.add( [
              '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">'+
                '<div class="btn-group mr-2 white-text" role="group" aria-label="First group">'+
                  '<a id="DeleteCitaModal" data-toggle="modal" onclick="DeleteCita('+id+')" data-target="#ConfirmModal" class="btn-sm red darken-1"><i class="fas fa-trash" aria-hidden="true"></i></a>'+
                '</div>'+
              '</div>',
              '<div id="fecha'+id+'">'+fecha+'</div>',
              '<div id="hora'+id+'">'+hora+'</div>',
              '<div id="asunto'+id+'">'+asunto+'</div>',
              '<div id="paciente'+id+'">'+paciente+'</div>',
              '<div id="doctor'+id+'">'+doctor+'</div>',
            ]).draw( false );
          }
        })
    }

    function DeleteCita(id) {
      var fecha = $('tr td #DeleteCitaModal').parents('tr').find('#fecha'+id).text();
      var hora = $('tr td #DeleteCitaModal').parents('tr').find('#hora'+id).text();
      var turno = $('tr td #DeleteCitaModal').parents('tr').find('#turno'+id).text();
      var asunto = $('tr td #DeleteCitaModal').parents('tr').find('#asunto'+id).text();
      var paciente = $('tr td #DeleteCitaModal').parents('tr').find('#paciente'+id).text();
      var doctor = $('tr td #DeleteCitaModal').parents('tr').find('#doctor'+id).text();
      $('#dtTurnoHoyExample').DataTable().row( $('tr td #DeleteCitaModal').parents('tr') ).remove().draw();
      var accion = "eliminar";
      $.ajax({
        type: "POST",
        url: "",
        data: {'turno':id,'accion':accion},
        success: function(data){
          location.reload();
        }
      })
    }

    function Reiniciar() {
      var accion = "reiniciar";
        $.ajax({
          type: "POST",
          url: "",
          data: {'accion':accion},
          success: function(data){
            location.reload();
          }
        })    
    }

    function Comenzar() {
      var accion = "comenzar";
      $.ajax({
        type: "POST",
        url: "",
        data: {'accion':accion},
        success: function(data){
          //location.reload();
          Solicitud();
        }
      })
    }

    function Siguiente() {
      var accion = "siguiente";
      $.ajax({
        type: "POST",
        url: "",
        data: {'accion':accion},
        success: function(data){
          //location.reload();
          Solicitud();
        }
      })
    }

    function Atras() {
      var accion = "atras";
      $.ajax({
        type: "POST",
        url: "",
        data: {'accion':accion},
        success: function(data){
          //location.reload();
          Solicitud();
        }
      })
    }



  ////////////////////////////////////////////////////////////INSERTAR
  
  //Funcion para la inserccion en la base de datos
  $( "#InsertCita" ).submit(function( event ) {
      //colocamos los parametros del submit en una variable
      var parametros = $(this).serialize();
      //realizamos una consulta en ajax
      $.ajax({
          type: "POST",
          url: "",
          data: parametros,
          success: function(data){
            //Escondemos el Modal de eliminacion de datos
            $("#InsertModal").modal('hide');
            //Validamos si la consulta es exitosa
            if(data.substring(0,4) == "<!DO"){
              //Abrimos la alerta de exito
              $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
            //Validamos si la consulta es erronea  
            }else if(data.substring(0,4) == "<br "){
              //Abrimos la alerta de error
              alert(data);
              $("#addModalError").modal('show');
            }
            //recargamos la pagina al seleccionar el boton de exito
            $("#successInsert").click(function(){
              location.reload();
            });
          }
      })
      event.preventDefault();
    });
    
    //Obtenemos los valores de la tabla y los insertamos en los input del modal de actualizacion
    function UpdateCita(id){
      var fecha = $('tr td #UpdateCitaModal').parents('tr').find('#fecha'+id).text();
      var turno = $('tr td #UpdateCitaModal').parents('tr').find('#turno'+id).text();
      var asunto = $('tr td #UpdateCitaModal').parents('tr').find('#asunto'+id).text();
      var paciente = $('tr td #UpdateCitaModal').parents('tr').find('#paciente'+id).text();
      var doctor = $('tr td #UpdateCitaModal').parents('tr').find('#doctor'+id).text();
      $('#formId').val(id);
      $('#formFecha').val(fecha);
      $('#formTurno').val(turno);
      $('#formAsunto').val(asunto);
      buscarPaciente(paciente);
      buscarDoctor(doctor);
      event.preventDefault();
    };

    //Mandamos la solicitud de actualizacion a traves de ajax al archivo php
      $("#UpdateCita").submit(function( event ) {
      //Obtenemos los datos establecidos en el modal
      var id = (document.getElementById("formId").value);
      var fecha= (document.getElementById("formFecha").value);
      var turno = (document.getElementById("formTurno").value);
      var asunto = (document.getElementById("formAsunto").value);
      var paciente = (document.getElementById("formPaciente").value);
      var doctor = (document.getElementById("formDoctor").value);
      $.ajax({
          type: "POST",
          url: "",
          data: {'id':id,'fecha':fecha,'turno':turno,'asunto':asunto,'paciente':paciente,'doctor':doctor},
          success: function(data){
            //Escondemos el Modal de eliminacion de datos
            $("#UpdateModal").modal('hide');
            //Validamos si la consulta es exitosa 
            if(data.substring(0,4) == "<!DO"){
              //Abrimos la alerta de exito
              $("#updateModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
            //Validamos si la consulta es erronea  
            }else if(data.substring(0,4) == "<br "){
              //Abrimos la alerta de error
              $("#updateModalError").modal('show');
            }
            //recargamos la pagina al seleccionar el boton de exito
            $("#successUpdate").click(function(){
              location.reload();
            });
          }
      });
      event.preventDefault();
    });
    /*
    //Mandamos la solicitud de ELIMINADO al archivo PHP
    function DeleteCita(id){
      $("#delete").click(function(event){
        $.ajax({
          type: "POST",
          url: "",
          data: {'id':id},
          success: function(data){
            //Escondemos el Modal de eliminacion de datos
            $("#modalConfirmDelete").modal('hide'); 
            //Validamos si la consulta es exitosa
            if(data.substring(0,4) == "<!DO"){
              //Abrimos la alerta de exito
              $("#deleteModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
            //Validamos si la consulta es erronea
            }else if(data.substring(0,4) == "<br "){
              //Abrimos la alerta de error
              $("#deleteModalError").modal('show');
            }
            //recargamos la pagina al seleccionar el boton de exito
            $("#successDel").click(function(){
              location.reload();
            });
          }
      });
        event.preventDefault();
      });
      event.preventDefault();
    }*/