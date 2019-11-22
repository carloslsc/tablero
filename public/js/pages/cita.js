//###########################Clientes###########################//
$(document).ready(function () {  
    $('#fecha').datepicker({
        showOtherMonths: true,
        format: 'yyyy-mm-dd'
    });

    $('#formFecha').datepicker({
        showOtherMonths: true,
        format: 'yyyy-mm-dd'
      });  

    $('#hora').timepicker({
        showOtherMonths: true
    });

    $('#formHora').timepicker({
      showOtherMonths: true
    });

    $("#paciente").selectpicker();
    $("#doctor").selectpicker();
    $("#formPaciente").selectpicker();
    $("#formDoctor").selectpicker();

    var table = $('#dtCitaExample').DataTable( {
        select: true,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todo"]],
        dom: 'Bfrtip',
        'columnDefs': [{ 
            'targets': -1, 
            'orderable': false
        }],
        "autoFill": true,
        buttons: [{
            extend: 'print',
            text: 'Imprimir',
            orientation: 'landscape',   
            exportOptions: {
              columns: ':not(:first-child)',
            } 
        },
        {
            extend: 'pdfHtml5',
            orientation: 'landscape',
            pageSize: 'LEGAL',
            exportOptions: {
              columns: ':not(:first-child)',
            }
        },
        {
            extend: 'excelHtml5',
            orientation: 'landscape',
            pageSize: 'LEGAL',
            exportOptions: {
              columns: ':not(:first-child)',
            }
        }],
        "ajax": "../public/json/Citas.json",
        "columns": [
            {
              "render": function (data, type, JsonResultRow, meta) {
                  return '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">'+
                  '<div class="btn-group mr-2 white-text" role="group" aria-label="First group">'+
                      '<a id="UpdateCitaModal" data-toggle="modal" onclick="UpdateCita('+JsonResultRow.id_cita+')" data-target="#UpdateModal" class="btn-sm amber darken-1"><i class="fas fa-edit" aria-hidden="true"></i></a>'+
                      '<a id="DeleteCitaModal" onclick="DeleteCita('+JsonResultRow.id_cita+')" class="btn-sm red darken-1" data-toggle="modal" data-target="#modalConfirmDelete"><i class="fas fa-trash" aria-hidden="true"></i></a>'+
                      '</div>'+
                  '</div>';
              }
            },
            {
              "render": function (data, type, JsonResultRow, meta) {
                return '<div id="fecha'+JsonResultRow.id_cita+'">'+JsonResultRow.fecha_cita+'</div>';
              }
            },
            {
              "render": function (data, type, JsonResultRow, meta) {
                return '<div id="hora'+JsonResultRow.id_cita+'">'+JsonResultRow.hora_cita+'</div>';
              }
            },
            /*{
              "render": function (data, type, JsonResultRow, meta) {
                  return '<div id="turno'+JsonResultRow.id_cita+'">'+JsonResultRow.turno_cita+'</div>';
              }
            },*/
            {
              "render": function (data, type, JsonResultRow, meta) {
                  return '<div id="asunto'+JsonResultRow.id_cita+'">'+JsonResultRow.asunto_cita.toUpperCase()+'</div>';
              }
            },
            {
              "render": function (data, type, JsonResultRow, meta) {
                  return '<div id="paciente'+JsonResultRow.id_cita+'">'+JsonResultRow.nombre_paciente.toUpperCase()+' '+JsonResultRow.app_paciente.toUpperCase()+' '+JsonResultRow.apm_paciente.toUpperCase()+'</div>';
              }
            },
            {
              "render": function (data, type, JsonResultRow, meta) {
                  return '<div id="doctor'+JsonResultRow.id_cita+'">'+JsonResultRow.nombre_doctor.toUpperCase()+' '+JsonResultRow.app_doctor.toUpperCase()+' '+JsonResultRow.apm_doctor.toUpperCase()+'</div>';
              }
            }
        ]
    });
});
  
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
      var hora = $('tr td #UpdateCitaModal').parents('tr').find('#hora'+id).text();
      //var turno = $('tr td #UpdateCitaModal').parents('tr').find('#turno'+id).text();
      var asunto = $('tr td #UpdateCitaModal').parents('tr').find('#asunto'+id).text();
      var paciente = $('tr td #UpdateCitaModal').parents('tr').find('#paciente'+id).text();
      var doctor = $('tr td #UpdateCitaModal').parents('tr').find('#doctor'+id).text();
      $('#formId').val(id);
      $('#formFecha').val(fecha);
      $('#formHora').val(hora);
      //$('#formTurno').val(turno);
      $('#formAsunto').val(asunto);
      buscarPaciente(paciente);
      buscarDoctor(doctor);
      event.preventDefault();
    };

    //Buscador de tipo de clientes
    function buscarPaciente(paciente) {
        //Obtener los elementos del select de tipo de cliente
        var select = document.getElementById("formPaciente");
        for(var i=1; i<select.length; i++){
            //comparacion del texto del tipo de cliente con lo dado en la funcion UpdateCliente
            if(select.options[i].text == paciente){
                //actualizar el select con la opcion seleccionada
                select.selectedIndex = i;
                $("#formPaciente").selectpicker('refresh');
            }
        }
    }
      
    //Buscador de tipo de clientes
    function buscarDoctor(doctor) {
        //Obtener los elementos del select de tipo de cliente
        var select = document.getElementById("formDoctor");
        for(var i=1; i<select.length; i++){
            //comparacion del texto del tipo de cliente con lo dado en la funcion UpdateCliente
            if(select.options[i].text == doctor){
                //actualizar el select con la opcion seleccionada
                select.selectedIndex = i;
                $("#formDoctor").selectpicker('refresh');
            }
        }
    }


    //Mandamos la solicitud de actualizacion a traves de ajax al archivo php
      $("#UpdateCita").submit(function( event ) {
      //Obtenemos los datos establecidos en el modal
      var id = (document.getElementById("formId").value);
      var fecha= (document.getElementById("formFecha").value);
      var hora= (document.getElementById("formHora").value);
      //var turno = (document.getElementById("formTurno").value);
      var asunto = (document.getElementById("formAsunto").value);
      var paciente = (document.getElementById("formPaciente").value);
      var doctor = (document.getElementById("formDoctor").value);
      $.ajax({
          type: "POST",
          url: "",
          data: {'id':id,'fecha':fecha,'hora':hora,/*'turno':turno,*/'asunto':asunto,'paciente':paciente,'doctor':doctor},
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
    }