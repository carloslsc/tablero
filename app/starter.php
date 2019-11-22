<?php
    //Cargar Librerias
    require_once 'config/config.php';
    require_once 'helpers/urlHelper.php';
    
    //AutoLoad PHP
    spl_autoload_register(function($nombreClase){
        require_once 'libraries/' . $nombreClase . '.php';
    });
?>