<?php
    //Para redireccionar la página
    function redireccionar($page){
        header('localhost' . RUTA_URL . $page);
    }
?>