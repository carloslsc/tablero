<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>
            <?php echo NOMBRESITIO; ?>
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/fontawesome/css/all.css">
        <!-- DataTables-->
        <link rel="stylesheet" type="text/css" href="<?php echo RUTA_URL?>/css/DataTables/dataTables.bootstrap4.min.css"/>
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/responsive.bootstrap4.min.css"/>
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/bootstrap.min.css">
        <!-- Material Design Bootstrap -->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/mdb.min.css">
        <!--Botones  de exportacion para las datatables-->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/buttons.dataTables.min.css" >
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/bootstrap-select.min.css">
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/gijgo/css/gijgo.css"/>
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/gijgo/css/gijgo.min.css"/>
        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/estilossidebar.css">
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/estiloscards.css">
        <!--Estilos-->
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo RUTA_URL?>/css/estilos.css">
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/dataTable/css/datatables.css">
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/dataTable/css/datatables.min.css">
        <!--JQuery-->
        <script type="text/javascript" src="<?php echo RUTA_URL?>/js/jquery-3.3.1.min.js"></script>
    </head>
    <body class="bg-primary" style=" overflow-y: hidden; overflow-x: hidden;">
        <!--url('<?php echo RUTA_URL ?>/imagenes/img/WallpaperRojo.jpg')-->
        <!--<div>-->
            <div>
            <?php require_once RUTA_APP . '/views/inc/error.php'; ?>
            <?php require_once RUTA_APP . '/views/modals/modalDelete.php'; ?>
            <?php require_once RUTA_APP . '/views/modals/modalImagen.php'; ?>
            <?php require_once RUTA_APP . '/views/modals/modalCamera.php'; ?>
            <?php require_once RUTA_APP . '/views/inc/success.php'; ?>