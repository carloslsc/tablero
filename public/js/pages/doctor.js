//###########################Clientes###########################//
$(document).ready(function () {  
});
  
  ////////////////////////////////////////////////////////////INSERTAR
  
  //Funcion para la inserccion en la base de datos
  $( "#InsertDoctor" ).submit(function( event ) {
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
    function UpdateDoctor(id){
      var nombre = $('tr td #UpdateDoctorModal').parents('tr').find('#nombre'+id).text();
      var app = $('tr td #UpdateDoctorModal').parents('tr').find('#app'+id).text();
      var apm = $('tr td #UpdateDoctorModal').parents('tr').find('#apm'+id).text();
      var especialidad = $('tr td #UpdateDoctorModal').parents('tr').find('#especialidad'+id).text();
      $('#formId').val(id);
      $('#formNombre').val(nombre);
      $('#formApp').val(app);
      $('#formApm').val(apm);
      $('#formEspecialidad').val(especialidad);
      event.preventDefault();
    };


    //Mandamos la solicitud de actualizacion a traves de ajax al archivo php
      $("#UpdateDoctor").submit(function( event ) {
      //Obtenemos los datos establecidos en el modal
      var id = (document.getElementById("formId").value);
      var nombre= (document.getElementById("formNombre").value);
      var app = (document.getElementById("formApp").value);
      var apm = (document.getElementById("formApm").value);
      var especialidad = (document.getElementById("formEspecialidad").value);
      $.ajax({
          type: "POST",
          url: "",
          data: {'id':id,'nombre':nombre,'app':app,'apm':apm,'especialidad':especialidad},
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
    function DeleteDoctor(id){
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