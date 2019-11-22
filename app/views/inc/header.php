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
        <!--<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>-->
        <!--<link rel="stylesheet" type="text/css" href="<?php echo RUTA_URL?>/css/DataTables/datatables.min.css"/>-->
        <!--<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css"/>-->
        <link rel="stylesheet" type="text/css" href="<?php echo RUTA_URL?>/css/DataTables/dataTables.bootstrap4.min.css"/>
        <!--<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>-->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/responsive.bootstrap4.min.css"/>
        <!--<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css"/>-->
        <!-- Bootstrap core CSS -->
        <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">-->
        <link rel="stylesheet" href="<?php echo RUTA_URL?>/css/bootstrap.min.css">
        <!-- Material Design Bootstrap -->
        <!--<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">-->
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
    <body>
        <div>
        <!--<div>-->
            <div class="wrapper">
            <!-- Sidebar Holder -->
                <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>HOSPITAL</h3>
                    </div>
                    <ul class="list-unstyled components">
                        <p>SISTEMA DE TURNOS</p>
                        <li class="active">
                            <a href="<?php echo RUTA_URL?>/pages/start"><i class="fas fa-home "></i> Inicio</a>
                        </li>
                        <li>
                            <a href="<?php echo RUTA_URL?>/pages/paciente"><i class="fas fa-user"></i> Pacientes</a>
                        </li>
                        <li>
                            <a href="<?php echo RUTA_URL?>/pages/doctor"><i class="fas fa-user-md"></i> Doctores</a>
                        </li>
                        <li>
                            <a href="<?php echo RUTA_URL?>/pages/cita"><i class="fas fa-table"></i> Citas</a>
                        </li>
                        <li>
                            <a href="<?php echo RUTA_URL?>/pages/turno"><i class="fas fa-check"></i> Turnos</a>
                        </li>
                        <li>
                            <a href="<?php echo RUTA_URL?>/pages/tablero"><i class="fas fa-columns"></i> Tablero</a>
                        </li>
                    </ul>
                </nav>

        <!-- Page Content Holder -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link " href="<?php echo RUTA_URL?>/pages/paciente">Pacientes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="<?php echo RUTA_URL?>/pages/doctor">Doctores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="<?php echo RUTA_URL?>/pages/cita">Citas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="<?php echo RUTA_URL?>/pages/turno">Turnos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="<?php echo RUTA_URL?>/pages/tablero">Tablero</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
<?php require_once RUTA_APP . '/views/modals/modalDelete.php'; ?>
<?php require_once RUTA_APP . '/views/modals/modalImagen.php'; ?>
<?php require_once RUTA_APP . '/views/modals/modalCamera.php'; ?>
<?php require_once RUTA_APP . '/views/inc/success.php'; ?>
<?php require_once RUTA_APP . '/views/inc/error.php'; ?>

    
