//############################GLOBALES############################//
$(document).ready(function () {

  $('#sidebar').toggleClass('active');
  $("#sidebarCollapse").toggleClass('active');

  
  var dataTableBasica = $('#dtBasicExample').DataTable({
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todo"]],
    dom: 'Bfrtip',
    'columnDefs': [{ 
      'targets': -1, 
      'orderable': false
    }],
    buttons: [
      {
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
          columns: ':not(:first-child)'
        }
      }
    ]
  });
  $('.dataTables_length').addClass('bs-select');


  //Datatables multiples
  tablaAgregadaVenta = $('#VentaArticuloAdded').DataTable({
    "searching": false,
    "ordering": false,
    "lengthChange": false,
    "columnDefs": [
      {"width": "5%", "targets": 0},
      {"width": "5%", "targets": 1},
      {"width": "50%", "targets": 2},
      {"width": "5%", "targets": 3},
      {"width": "5%", "targets": 4},
      {"width": "15%", "targets": 5},
      {"width": "15%", "targets": 6}
  ]        
  });
  
  tablaAgregadaDevolucion = $('#DevolucionArticuloAdded').DataTable({
    "searching": false,
    "ordering": false,
    "lengthChange": false,
    "columnDefs": [
      {"width": "5%", "targets": 0},
      {"width": "5%", "targets": 1},
      {"width": "50%", "targets": 2},
      {"width": "5%", "targets": 3},
      {"width": "5%", "targets": 4},
      {"width": "5%", "targets": 5},
  ]        
  });

  tablaAgregadaApartado = $('#ApartadoArticuloAdded').DataTable({
    "searching": false,
    "ordering": false,
    "lengthChange": false,
    "columnDefs": [
      {"width": "5%", "targets": 0},
      {"width": "5%", "targets": 1},
      {"width": "50%", "targets": 2},
      {"width": "5%", "targets": 3},
      {"width": "5%", "targets": 4},
      {"width": "15%", "targets": 5},
      {"width": "15%", "targets": 6}
  ]        
  });

  tablaAgregadaReparacion = $('#ReparacionArticuloAdded').DataTable({
    "searching": false,
    "ordering": false,
    "lengthChange": false,
    "columnDefs": [
      {"width": "10%", "targets": 0},
      {"width": "10%", "targets": 1},
      {"width": "30%", "targets": 2},
      {"width": "5%", "targets": 3},
      {"width": "25%", "targets": 4},
      {"width": "20%", "targets": 5}
  ]        
  });
/*
  $.fn.dataTableExt.afnFiltering.push(
    function(oSettings, aData, iDataIndex) {
      if (typeof aData._date == 'undefined') {
        aData._date = new Date(aData[1]).getTime();
      }
  
      if (minDateFilter && !isNaN(minDateFilter)) {
        if (aData._date < minDateFilter) {
          return false;
        }
      }
  
      if (maxDateFilter && !isNaN(maxDateFilter)) {
        if (aData._date > maxDateFilter) {
          return false;
        }
      }
  
      return true;
    }
  );*/

  tablaAgregadaCompra = $('#CompraArticuloAdded').DataTable();

  //Datatables multiples
  tablaAgregadaArticulo = $('#ArticuloArticuloAdded').DataTable({
    "searching": false,
    "ordering": false,
    'info': false,
  });

  tablaAgregadaArticuloAbono = $('#ArticuloReparacionAdded').DataTable({
    "searching": false,
    "ordering": false,
    'info': false,
  });

  //Datatables multiples
  tablaAgregadaAbono = $('#AbonoArticuloAdded').DataTable({
    "searching": false,
    "ordering": false,
    'info': false
  });




  //Select
  //$('.select').selectpicker();
  
  //Datepicker
  /*$('.fechadatepicker').datepicker({
    format: 'dd/mm/yyyy'
  });*/
  
});

  //SideBar
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });

var tablaAgregadaCompra;
var tablaAgregarCompra;

//############################MARCA############################//
//Funcion para la inserccion en la base de datos
/*$( "#InsertMarca" ).submit(function( event ) {
  //colocamos los parametros del submit en una variable
  var parametros = $(this).serialize();
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "",
      data: parametros,
      success: function(data){
        //Escondemos el Modal de insercion de datos
        $("#InsertModal").modal('hide');
        //Validamos si la consulta es exitosa
        if(data.substring(0,4) == "<!DO"){
          //Abrimos la alerta de exito
          $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
        //Validamos si la consulta es erronea
        }else if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
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
function UpdateMarca(id){
  event.preventDefault();
  var desc = $('tr td #UpdateMarcaModal').parents('tr').find('#desc'+id).text();
  $('#formDesc').val(desc);
  $('#formId').val(id);
};

  //Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateMarca").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc},
      success: function(data){
        //Escondemos el Modal de actualizacion de datos
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
function DeleteMarca(id){
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
        $("#successDel").click(function(){
          location.reload();
        });
      }
  });
    event.preventDefault();
  });
  event.preventDefault();
}




//############################GRUPO############################//
//Funcion para la inserccion en la base de datos
$( "#InsertGrupo" ).submit(function( event ) {
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
function UpdateGrupo(id){
  event.preventDefault();
  var desc = $('tr td #UpdateGrupoModal').parents('tr').find('#desc'+id).text();
  $('#formDesc').val(desc);
  $('#formId').val(id);
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateGrupo").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc},
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
function DeleteGrupo(id){
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


//###########################SUBGRUPO###########################//
//Funcion para la inserccion en la base de datos
$( "#InsertSubgrupo" ).submit(function( event ) {
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
function UpdateSubgrupo(id, grupo){

  
  var desc = $('tr td #UpdateSubgrupoModal').parents('tr').find('#desc'+id).text();
  //var grupo = $('tr td #UpdateSubgrupoModal').parents('tr').find('#grupo'+id).text();
  //Volvemos la variable grupo valor entero
  //grupo = parseInt(grupo);
  $('#formDesc').val(desc);
  //Seleccionamos el valor segun la variable
  //$("#formGrupo option[value='"+grupo+"']").attr("selected", true);
  $('#formGrupo').val(grupo);
  $('#formId').val(id);
  event.preventDefault();
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateSubgrupo").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  var grupo = (document.getElementById("formGrupo").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc,'grupo':grupo},
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
function DeleteSubgrupo(id){
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


//###########################ARTICULO###########################//
//Funcion para la inserccion en la base de datos
$( "#InsertArticulo" ).submit(function( event ) {
  event.preventDefault();
  //colocamos los parametros del submit en una variable
  var formData = new FormData(this);
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "articulo",
      data: formData,
      processData: false,
      contentType: false,
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
          $("#addModalError").modal('show');
        }
        //recargamos la pagina al seleccionar el boton de exito
        $("#successInsert").click(function(){
          location.reload();
        });
        $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
      }
  })
});

//Obtenemos los valores de la tabla y los insertamos en los input del modal de actualizacion
function UpdateArticulo(id, grupo, subgrupo, marca, tipo_unidad, imagen){
  event.preventDefault(); 
  var nombre = $('tr td #UpdateArticuloModal').parents('tr').find('#nombre'+id).text();
  var ns = $('tr td #UpdateArticuloModal').parents('tr').find('#ns'+id).text();
  var descripcion = $('tr td #UpdateArticuloModal').parents('tr').find('#descripcion'+id).text();
  var modelo = $('tr td #UpdateArticuloModal').parents('tr').find('#modelo'+id).text();
  var precioventa = $('tr td #UpdateArticuloModal').parents('tr').find('#precioventa'+id).text();
  var descuento = $('tr td #UpdateArticuloModal').parents('tr').find('#descuento'+id).text();
  //Seleccionamos el valor segun la variable
  $('#formId').val(id);
  $('#formNom').val(nombre);
  $('#formNS').val(ns);
  $('#formDesc').val(descripcion);
  $('#formModel').val(modelo);
  $('#formPrecio').val(precioventa);
  $('#formGrupo').val(grupo);
  $('#formSubgrupo').val(subgrupo);
  $('#formMarca').val(marca);
  $('#formDescuento').val(descuento);
  $('#formTipoUnidad').val(tipo_unidad);
  $('#formImagen').val(imagen);
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateArticulo").submit(function( event ) {
  event.preventDefault();
  //colocamos los parametros del submit en una variable
  var formData = new FormData(this);
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "",
      data: formData,
      processData: false,
      contentType: false,
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
});

//Mandamos la solicitud de ELIMINADO al archivo PHP
function DeleteArticulo(id){
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


//###########################PROVEEDOR###########################//
//Funcion para la inserccion en la base de datos
/*$( "#InsertProveedor" ).submit(function( event ) {
  //colocamos los parametros del submit en una variable
  var parametros = $(this).serialize();
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "",
      data: parametros,
      success: function(data){
        console.log(data);
        //Escondemos el Modal de eliminacion de datos
        $("#InsertModal").modal('hide');
        //Validamos si la consulta es exitosa
        if(data.substring(0,4) == "<!DO"){
          //Abrimos la alerta de exito
          $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
        //Validamos si la consulta es erronea  
        }else if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
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
function UpdateProveedor(id,municipio,estado){
  var desc = $('tr td #UpdateProveedorModal').parents('tr').find('#desc'+id).text();
  var cp = $('tr td #UpdateProveedorModal').parents('tr').find('#cp'+id).text();
  var tel = $('tr td #UpdateProveedorModal').parents('tr').find('#telefono'+id).text();
  var cel = $('tr td #UpdateProveedorModal').parents('tr').find('#celular'+id).text();
  var rfc = $('tr td #UpdateProveedorModal').parents('tr').find('#rfc'+id).text();
  var email = $('tr td #UpdateProveedorModal').parents('tr').find('#email'+id).text();
  var credito = $('tr td #UpdateProveedorModal').parents('tr').find('#credito'+id).text();
  var descuento = $('tr td #UpdateProveedorModal').parents('tr').find('#descuento'+id).text();
  var direccion = $('tr td #UpdateProveedorModal').parents('tr').find('#direccion'+id).text();
  $('#formDesc').val(desc);
  $('#formMunicipio').val(municipio);
  $('#formCP').val(cp);
  $('#formEstado').val(estado);
  $('#formTelefono').val(tel);
  $('#formCelular').val(cel);
  $('#formRFC').val(rfc);
  $('#formEmail').val(email);
  $('#formCredito').val(credito);
  $('#formDescuento').val(descuento);
  $('#formDireccion').val(direccion);
  $('#formId').val(id);
  event.preventDefault();
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateProveedor").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  var municipio = (document.getElementById("formMunicipio").value);
  var cp= (document.getElementById("formCP").value);
  var estado= (document.getElementById("formEstado").value);
  var telefono = (document.getElementById("formTelefono").value);
  var celular = (document.getElementById("formCelular").value);
  var rfc = (document.getElementById("formRFC").value);
  var email = (document.getElementById("formEmail").value);
  var credito = (document.getElementById("formCredito").value);
  var descuento = (document.getElementById("formDescuento").value);
  var direccion = (document.getElementById("formDireccion").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc,'municipio':municipio,'cp':cp,'estado':estado,'telefono':telefono,
      'celular':celular,'rfc':rfc,'email':email,'credito':credito,'descuento':descuento,'direccion':direccion},
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
function DeleteProveedor(id){
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

//############################TIPO UNIDAD############################//
//Funcion para la inserccion en la base de datos
$( "#InsertTipoUnidad" ).submit(function( event ) {
  //colocamos los parametros del submit en una variable
  var parametros = $(this).serialize();
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "",
      data: parametros,
      success: function(data){
        //Escondemos el Modal de insercion de datos
        $("#InsertModal").modal('hide');
        //Validamos si la consulta es exitosa
        if(data.substring(0,4) == "<!DO"){
          //Abrimos la alerta de exito
          $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
        //Validamos si la consulta es erronea
        }else if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
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
function UpdateTipoUnidad(id){
  event.preventDefault();
  var nombre = $('tr td #UpdateTipoUnidadModal').parents('tr').find('#nombre'+id).text();
  $('#formNombre').val(nombre);
  $('#formId').val(id);
};

  //Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateTipoUnidad").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var nombre = (document.getElementById("formNombre").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'nombre':nombre},
      success: function(data){
        //Escondemos el Modal de actualizacion de datos
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
function DeleteTipoUnidad(id){
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
        $("#successDel").click(function(){
          location.reload();
        });
      }
  });
    event.preventDefault();
  });
  event.preventDefault();
}

//############################ALMACEN############################//
//Funcion para la inserccion en la base de datos
$( "#InsertAlmacen" ).submit(function( event ) {
  //colocamos los parametros del submit en una variable
  var parametros = $(this).serialize();
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "",
      data: parametros,
      success: function(data){
        //Escondemos el Modal de insercion de datos
        $("#InsertModal").modal('hide');
        //Validamos si la consulta es exitosa
        if(data.substring(0,4) == "<!DO"){
          //Abrimos la alerta de exito
          $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
        //Validamos si la consulta es erronea
        }else if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
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
function UpdateAlmacen(id){
  event.preventDefault();
  var desc = $('tr td #UpdateAlmacenModal').parents('tr').find('#desc'+id).text();
  var direccion = $('tr td #UpdateAlmacenModal').parents('tr').find('#direccion'+id).text();
  var telefono = $('tr td #UpdateAlmacenModal').parents('tr').find('#telefono'+id).text();
  $('#formDesc').val(desc);
  $('#formDireccion').val(direccion);
  $('#formTelefono').val(telefono);
  $('#formId').val(id);
};

  //Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateAlmacen").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  var direccion = (document.getElementById("formDireccion").value);
  var telefono = (document.getElementById("formTelefono").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc,'direccion':direccion,'telefono':telefono},
      success: function(data){
        //Escondemos el Modal de actualizacion de datos
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
function DeleteAlmacen(id){
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
        $("#successDel").click(function(){
          location.reload();
        });
      }
  });
    event.preventDefault();
  });
  event.preventDefault();
}

//############################TIPO PAGO############################//
//Funcion para la inserccion en la base de datos
$( "#InsertTipoPago" ).submit(function( event ) {
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
function UpdateTipoPago(id){
  event.preventDefault();
  var desc = $('tr td #UpdateTipoPagoModal').parents('tr').find('#desc'+id).text();
  $('#formDesc').val(desc);
  $('#formId').val(id);
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateTipoPago").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc},
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
function DeleteTipoPago(id){
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

//############################ESTADO############################//
//Funcion para la inserccion en la base de datos
$( "#InsertEstado" ).submit(function( event ) {
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
function UpdateEstado(id){
  event.preventDefault();
  var desc = $('tr td #UpdateEstadoModal').parents('tr').find('#desc'+id).text();
  $('#formDesc').val(desc);
  $('#formId').val(id);
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateEstado").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc},
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
function DeleteEstado(id){
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

//###########################MUNICIPIO###########################//
//Funcion para la inserccion en la base de datos
$( "#InsertMunicipio" ).submit(function( event ) {
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
function UpdateMunicipio(id, estado){
  //alert(id+"id "+"e"+estado);
  var desc = $('tr td #UpdateMunicipioModal').parents('tr').find('#desc'+id).text();
  //Volvemos la variable grupo valor entero
  $('#formDesc').val(desc);
  //Seleccionamos el valor segun la variable
  $('#formEstado').val(estado);
  $('#formId').val(id);
  event.preventDefault();
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateMunicipio").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  var estado = (document.getElementById("formEstado").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc,'estado':estado},
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
function DeleteMunicipio(id){
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


//###########################INVENTARIO###########################//
//Funcion para la inserccion en la base de datos
$( "#InsertInventario" ).submit(function( event ) {
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
function UpdateInventario(id, articulo,almacen){
  var cantidad = $('tr td #UpdateInventarioModal').parents('tr').find('#cantidad'+id).text();
  cantidad=parseInt(cantidad);

  //Volvemos la variable grupo valor entero
  $('#formArticulo').val(articulo);
  $('#formCantidad').val(cantidad);
  $('#formAlmacen').val(almacen);
  $('#formId').val(id);
  event.preventDefault();
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateInventario").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var articulo = (document.getElementById("formArticulo").value);
  var cantidad = (document.getElementById("formCantidad").value);
  var almacen = (document.getElementById("formAlmacen").value);

  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'articulo':articulo,'cantidad':cantidad,'almacen':almacen},
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
function DeleteInventario(id){
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

function ReporteInventario(id){
  window.location ="exInventario.php?id="+id;
  event.preventDefault();
};


//###########################Clientes###########################//
//Funcion para la inserccion en la base de datos
/*
$( "#InsertCliente" ).submit(function( event ) {
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
function UpdateCliente(id,municipio,estado){
  var desc = $('tr td #UpdateClienteModal').parents('tr').find('#desc'+id).text();
  var cp = $('tr td #UpdateClienteModal').parents('tr').find('#cp'+id).text();
  var tel = $('tr td #UpdateClienteModal').parents('tr').find('#telefono'+id).text();
  var cel = $('tr td #UpdateClienteModal').parents('tr').find('#celular'+id).text();
  var rfc = $('tr td #UpdateClienteModal').parents('tr').find('#rfc'+id).text();
  var email = $('tr td #UpdateClienteModal').parents('tr').find('#email'+id).text();
  var credito = $('tr td #UpdateClienteModal').parents('tr').find('#credito'+id).text();
  var descuento = $('tr td #UpdateClienteModal').parents('tr').find('#descuento'+id).text();
  var direccion = $('tr td #UpdateClienteModal').parents('tr').find('#direccion'+id).text();
  $('#formDesc').val(desc);
  $('#formMunicipio').val(municipio);
  $('#formCP').val(cp);
  $('#formEstado').val(estado);
  $('#formTelefono').val(tel);
  $('#formCelular').val(cel);
  $('#formRFC').val(rfc);
  $('#formEmail').val(email);
  $('#formCredito').val(credito);
  $('#formDescuento').val(descuento);
  $('#formDireccion').val(direccion);
  $('#formId').val(id);
  event.preventDefault();
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateCliente").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  var municipio = (document.getElementById("formMunicipio").value);
  var cp= (document.getElementById("formCP").value);
  var estado= (document.getElementById("formEstado").value);
  var telefono = (document.getElementById("formTelefono").value);
  var celular = (document.getElementById("formCelular").value);
  var rfc = (document.getElementById("formRFC").value);
  var email = (document.getElementById("formEmail").value);
  var credito = (document.getElementById("formCredito").value);
  var descuento = (document.getElementById("formDescuento").value);
  var direccion = (document.getElementById("formDireccion").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc,'municipio':municipio,'cp':cp,'estado':estado,'telefono':telefono,
      'celular':celular,'rfc':rfc,'email':email,'credito':credito,'descuento':descuento,'direccion':direccion},
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
function DeleteCliente(id){
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

//###########################Empleado###########################//
//Funcion para la inserccion en la base de datos
$( "#InsertEmpleado" ).submit(function( event ) {
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
function UpdateEmpleado(id,municipio,estado){
  var desc = $('tr td #UpdateEmpleadoModal').parents('tr').find('#desc'+id).text();
  var cp = $('tr td #UpdateEmpleadoModal').parents('tr').find('#cp'+id).text();
  var tel = $('tr td #UpdateEmpleadoModal').parents('tr').find('#telefono'+id).text();
  var cel = $('tr td #UpdateEmpleadoModal').parents('tr').find('#celular'+id).text();
  var rfc = $('tr td #UpdateEmpleadoModal').parents('tr').find('#rfc'+id).text();
  var email = $('tr td #UpdateEmpleadoModal').parents('tr').find('#email'+id).text();
  var credito = $('tr td #UpdateEmpleadoModal').parents('tr').find('#credito'+id).text();
  var descuento = $('tr td #UpdateEmpleadoModal').parents('tr').find('#descuento'+id).text();
  var direccion = $('tr td #UpdateEmpleadoModal').parents('tr').find('#direccion'+id).text();
  $('#formDesc').val(desc);
  $('#formMunicipio').val(municipio);
  $('#formCP').val(cp);
  $('#formEstado').val(estado);
  $('#formTelefono').val(tel);
  $('#formCelular').val(cel);
  $('#formRFC').val(rfc);
  $('#formEmail').val(email);
  $('#formCredito').val(credito);
  $('#formDescuento').val(descuento);
  $('#formDireccion').val(direccion);
  $('#formId').val(id);
  event.preventDefault();
};

//Mandamos la solicitud de actualizacion a traves de ajax al archivo php
  $("#UpdateEmpleado").submit(function( event ) {
  //Obtenemos los datos establecidos en el modal
  var id = (document.getElementById("formId").value);
  var desc = (document.getElementById("formDesc").value);
  var municipio = (document.getElementById("formMunicipio").value);
  var cp= (document.getElementById("formCP").value);
  var estado= (document.getElementById("formEstado").value);
  var telefono = (document.getElementById("formTelefono").value);
  var celular = (document.getElementById("formCelular").value);
  var rfc = (document.getElementById("formRFC").value);
  var email = (document.getElementById("formEmail").value);
  var credito = (document.getElementById("formCredito").value);
  var descuento = (document.getElementById("formDescuento").value);
  var direccion = (document.getElementById("formDireccion").value);
  $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'desc':desc,'municipio':municipio,'cp':cp,'estado':estado,'telefono':telefono,
      'celular':celular,'rfc':rfc,'email':email,'credito':credito,'descuento':descuento,'direccion':direccion},
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
function DeleteEmpleado(id){
  $("#delete").click(function(event){
    
  var email = $('tr td #DeleteEmpleadoModal').parents('tr').find('#email'+id).text();
  console.log(id+email);
    $.ajax({
      type: "POST",
      url: "",
      data: {'id':id,'email':email},
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


//############################LOGIN############################//
$( "#Login" ).submit(function( event ) {
  //colocamos los parametros del submit en una variable
  var parametros = $(this).serialize();
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "",
      data: parametros,
      success: function(data){
        //Validamos si la consulta es erronea
        if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
          console.log(data);
          $("#loginModalError").modal('show');
        }
        else{
          //Redireccionamos a la pagina principal
          location.href = "start";
        }
      }
  })
  event.preventDefault();
});


//############################COMPRA############################//
function articuloCompraCategoria(){
  //Obtenermos el id de la categoria
  var categoria = document.getElementById("grupoCompra").value;
  //Realizamos la solicitud
  $.ajax({
    type: "POST",
    url: "",
    data: {'categoria':categoria},
    success: function(data){
      //Vaciamos el select y agregamos el valor por default
      $('#articuloCompra').empty().append('<option value="0" disabled selected>Elegir articulo</option>')
      //Convertimos la información recibida en formato json
      data = JSON.parse(data);
      //y agregamos los nuevos aritculos segun lo recibido
      for (i in data.articulo) {
          $('#articuloCompra').append('<option value="'+data.articulo[i].id_articulo+'">'+data.articulo[i].ns_articulo+'   '+data.articulo[i].nombre_articulo+'</option>').show();
      }
      //Actualizamos el select para visualizar los datos
      $('#articuloCompra').selectpicker('refresh');
    }
  })
}

function inventarioCompraAlmacen(){
  var almacen = document.getElementById("almacenCompra").value;
  var articulo = document.getElementById("articuloCompra").value;
  $.ajax({
    type: "POST",
    url: "",
    data: {'almacen':almacen,'articulo':articulo},
    success: function(data){
      data = JSON.parse(data);
      if(data.inventario != false){
        var inventario = data.inventario.cantidad_articulo;
        var idinventario = data.inventario.id_inventario;
        $('#CantidadCompraAlmacen').val(inventario);
        $('#IdCantidadCompraAlmacen').val(idinventario);
      }
      else{
        $('#IdCantidadCompraAlmacen').val("");
        $('#CantidadCompraAlmacen').val("0");
      }
    }
  })
}

function articuloChange(){
  inventarioCompraAlmacen();
}

function CancelarArticuloCompra(){
  $('#grupoCompra').val("0");
  $('#grupoCompra').selectpicker('refresh');
  $('#articuloCompra').val("0");
  $('#articuloCompra').selectpicker('refresh');
  $('#PrecioCompra').val("");
  $('#CantidadCompra').val("");
  $('#almacenCompra').val("0");
  $('#almacenCompra').selectpicker('refresh');
  $('#CantidadCompraAlmacen').val("");
}

function AgregarArticuloCompra(){
  var articulo = document.getElementById("articuloCompra").value;
  var categoriaselect = document.getElementById('grupoCompra');
  var categoria = categoriaselect.options[categoriaselect.selectedIndex].innerText;
  var cantidad = document.getElementById("CantidadCompra").value;
  var preciocompra = document.getElementById("PrecioCompra").value;
  var idalmacen = document.getElementById("almacenCompra").value;
  console.log(idalmacen);
  var almacenselect = document.getElementById('almacenCompra');
  var idinventario = document.getElementById('IdCantidadCompraAlmacen').value;
  var almacen = almacenselect.options[almacenselect.selectedIndex].innerText;
  var total = document.getElementById('formTotal').value;
  cantidad = parseInt(cantidad);
    if(total == " ")
    total = 0;
  total = parseFloat(total);
    if(articulo != "0" &&  categoria != "Elegir categoria" && preciocompra != "" && cantidad != "" && almacen != "Elegir almacen"){
    preciocompra = parseFloat(preciocompra);
    var precioFinal = preciocompra * cantidad;
    total += precioFinal;
    $("#formTotal").val(total.toFixed(2));
    var ns;
    var nombre;
    var marca;
    var precio_venta;
    $.ajax({
      type: "POST",
      url: "compra",
      data: {'articulo':articulo},
      success: function(data){
        data = JSON.parse(data);
        ns = data.articulo.ns_articulo;
        nombre = data.articulo.nombre_articulo;
        marca = data.articulo.nombre_marca;
        precio_venta = data.articulo.precio_venta;
        tablaAgregadaCompra.row.add( [
          '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">'+
            '<a id="DeleteArticuloCompraModal'+articulo+'" onclick="DeleteArticuloCompra('+articulo+')" class="btn-sm red darken-1"><i class="fas fa-minus" aria-hidden="true"></i></a>'+
          '</div>',
          '<input type="hidden" style="border: 0px; background-color: transparent;" readonly id="articuloCompra" name="articuloCompra[]" value="'+articulo+'">'+
          ns,
          nombre,
          '<input type="hidden" style="border: 0px; background-color: transparent;" readonly id="IdInventarioCompraTabla" name="IdInventarioCompraTabla[]" value="'+idinventario+'">'+
          '<input type="text" style="border: 0px; background-color: transparent;" readonly id="CantidadCompraTabla" name="CantidadCompraTabla[]" value="'+cantidad+'">',
          '<input type="text" style="border: 0px; background-color: transparent;" readonly id="PrecioCompraTabla" name="PrecioCompraTabla[]" value="'+preciocompra+'">',
          precio_venta,
          categoria,
          marca,
          '<input type="hidden" style="border: 0px; background-color: transparent;" readonly id="IdAlmacenCompraTabla" name="IdAlmacenCompraTabla[]" value="'+idalmacen+'">'+
          '<input type="text" style="border: 0px; background-color: transparent;" readonly id="AlmacenCompraTabla" name="AlmacenCompraTabla[]" value="'+almacen+'">'
        ]).draw( false );
      }
    })
    
    $('#grupoCompra').val("0");
    $('#grupoCompra').selectpicker('refresh');
    $('#articuloCompra').val("0");
    $('#articuloCompra').selectpicker('refresh');
    $('#PrecioCompra').val("");
    $('#CantidadCompra').val("");
    $('#almacenCompra').val("0");
    $('#almacenCompra').selectpicker('refresh');
    $('#CantidadCompraAlmacen').val("");
  }
  else{
    $("#ArticuloNeedData").modal('show');
  }
}

function DeleteArticuloCompra(id){
  tablaAgregadaCompra.row($('tr td #DeleteArticuloCompraModal'+id+'').parents('tr')).remove().draw();
}

$( "#InsertCompra" ).submit(function( event ) {
  event.preventDefault();
  //colocamos los parametros del submit en una variable
  var formData = new FormData(this);
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "compra",
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
        console.log(data);
        //Escondemos el Modal de eliminacion de datos
        $("#InsertModal").modal('hide');
        //Validamos si la consulta es exitosa
        if(data.substring(0,4) == "<!DO"){
          //Abrimos la alerta de exito
          $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
        //Validamos si la consulta es erronea  
        }else if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
          $("#addModalError").modal('show');
        }
        //recargamos la pagina al seleccionar el boton de exito
        $("#successInsert").click(function(){
          location.reload();
        });
        $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
      }
  })
});


//############################VENTA############################//
function articuloVentaCategoria(){
  var categoria = document.getElementById("grupoVenta").value;
  $.ajax({
    type: "POST",
    url: "",
    data: {'categoria':categoria},
    success: function(data){
      $('#articuloVenta').empty().append('<option value="0" disabled selected>Elegir articulo</option>')
      data = JSON.parse(data);
      for (i in data.articulo) {
          $('#articuloVenta').append('<option value="'+data.articulo[i].id_articulo+'">'+data.articulo[i].ns_articulo+'   '+data.articulo[i].nombre_articulo+'</option>').show();
      }
      $('#articuloVenta').selectpicker('refresh');
    }
  })
}

function inventarioVentaAlmacen(){
  var almacen = document.getElementById("almacenVenta").value;
  var articulo = document.getElementById("articuloVenta").value;
  $.ajax({
    type: "POST",
    url: "",
    data: {'almacen':almacen,'articulo':articulo},
    success: function(data){
      data = JSON.parse(data);
      if(data.inventario != false){
        var inventario = data.inventario.cantidad_articulo;
        var idinventario = data.inventario.id_inventario;
        $('#CantidadVentaAlmacen').val(inventario);
        $('#IdCantidadVentaAlmacen').val(idinventario);
      }
      else{
        $('#IdCantidadVentaAlmacen').val("");
        $('#CantidadVentaAlmacen').val("0");
      }
    }
  })
}

function articuloChange(){
  inventarioVentaAlmacen();
}

function CancelarArticuloVenta(){
  $('#grupoVenta').val("0");
  $('#grupoVenta').selectpicker('refresh');
  $('#articuloVenta').val("0");
  $('#articuloVenta').selectpicker('refresh');
  $('#PrecioVenta').val("");
  $('#CantidadVenta').val("");
  $('#almacenVenta').val("0");
  $('#almacenVenta').selectpicker('refresh');
  $('#CantidadVentaAlmacen').val("");
}

function AgregarArticuloVenta(){
  var articulo = document.getElementById("articuloVenta").value;
  var categoriaselect = document.getElementById('grupoVenta');
  var categoria = categoriaselect.options[categoriaselect.selectedIndex].innerText;
  var cantidad = document.getElementById("CantidadVenta").value;
  var precioventa = document.getElementById("PrecioVenta").value;
  var idalmacen = document.getElementById("almacenVenta").value
  var almacenselect = document.getElementById('almacenVenta');
  var idinventario = document.getElementById('IdCantidadVentaAlmacen').value;
  var almacen = almacenselect.options[almacenselect.selectedIndex].innerText;
  var total = document.getElementById('formTotal').value;
  cantidad = parseInt(cantidad);
    if(total == " ")
    total = 0;
  total = parseFloat(total);
    if(articulo != "0" &&  categoria != "Elegir categoria" && precioventa != "" && cantidad != "" && almacen != "Elegir almacen"){
    precioventa = parseFloat(precioventa);
    var precioFinal = precioventa * cantidad;
    total += precioFinal;
    $("#formTotal").val(total.toFixed(2));
    var ns;
    var nombre;
    var marca;
    var precio_venta;
    $.ajax({
      type: "POST",
      url: "venta",
      data: {'articulo':articulo},
      success: function(data){
        data = JSON.parse(data);
        ns = data.articulo.ns_articulo;
        nombre = data.articulo.nombre_articulo;
        marca = data.articulo.nombre_marca;
        precio_venta = data.articulo.precio_venta;
        tablaAgregadaVenta.row.add( [
          '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">'+
            '<a id="DeleteArticuloVentaModal'+articulo+'" onclick="DeleteArticuloVenta('+articulo+')" class="btn-sm red darken-1"><i class="fas fa-minus" aria-hidden="true"></i></a>'+
          '</div>',
          '<input type="hidden" style="border: 0px; background-color: transparent;" readonly id="articuloVenta" name="articuloVenta[]" value="'+articulo+'">'+
          ns,
          nombre,
          '<input type="hidden" style="border: 0px; background-color: transparent;" readonly id="IdInventarioVentaTabla" name="IdInventarioVentaTabla[]" value="'+idinventario+'">'+
          '<input type="text" style="border: 0px; background-color: transparent;" readonly id="CantidadVentaTabla" name="CantidadVentaTabla[]" value="'+cantidad+'">',
          '<input type="text" style="border: 0px; background-color: transparent;" readonly id="PrecioVentaTabla" name="PrecioVentaTabla[]" value="'+precioventa+'">',
          precio_venta,
          categoria,
          marca,
          '<input type="hidden" style="border: 0px; background-color: transparent;" readonly id="IdAlmacenVentaTabla" name="IdAlmacenVentaTabla[]" value="'+idalmacen+'">'+
          '<input type="text" style="border: 0px; background-color: transparent;" readonly id="AlmacenVentaTabla" name="AlmacenVentaTabla[]" value="'+almacen+'">'
        ]).draw( false );
      }
    })
    
    $('#grupoVenta').val("0");
    $('#grupoVenta').selectpicker('refresh');
    $('#articuloVenta').val("0");
    $('#articuloVenta').selectpicker('refresh');
    $('#PrecioVenta').val("");
    $('#CantidadVenta').val("");
    $('#almacenVenta').val("0");
    $('#almacenVenta').selectpicker('refresh');
    $('#CantidadVentaAlmacen').val("");
  }
  else{
    $("#ArticuloNeedData").modal('show');
  }
}

function DeleteArticuloVenta(id){
  tablaAgregadaVenta.row($('tr td #DeleteArticuloVentaModal'+id+'').parents('tr')).remove().draw();
}

$( "#InsertVenta" ).submit(function( event ) {
  event.preventDefault();
  //colocamos los parametros del submit en una variable
  var formData = new FormData(this);
  //realizamos una consulta en ajax
  $.ajax({
      type: "POST",
      url: "venta",
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
        console.log(data);
        
        //Escondemos el Modal de eliminacion de datos
        $("#InsertModal").modal('hide');
        //Validamos si la consulta es exitosa
        if(data.substring(0,4) == "<!DO"){
          //Abrimos la alerta de exito
          $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
        //Validamos si la consulta es erronea  
        }else if(data.substring(0,4) == "<br "){
          //Abrimos la alerta de error
          $("#addModalError").modal('show');
        }
        //recargamos la pagina al seleccionar el boton de exito
        $("#successInsert").click(function(){
          location.reload();
        });
        $("#addModalSuccess").modal({backdrop: 'static', keyboard: false},'show');
      }
  })
});


//############################REPORTE COMPRA############################//


function BuscarReporteCompra(){
  var fechainicio = document.getElementById('fechaInicioCompra').value;
  var fechafinal = document.getElementById('fechaTopeCompra').value;
  $.ajax({
    type: "POST",
    url: "",
    data: {'fechainicio' : fechainicio, 'fechafinal' : fechafinal},
    processData: false,
    contentType: false,
    success: function(data){
      console.log(data);
      //data = JSON.parse(data);
      dataTableBasica.clear();
    }
  })
}*/
