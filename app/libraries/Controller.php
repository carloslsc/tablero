<?php   
    //Clase controlador principal
    //Se encarga de poder cargar los modelos y las vistas
    class Controller{
        //cargar modelo
        public function model($model){
            //carga
            require_once '../app/models/' . $model . '.php';
            //Instanciar el modelo
            return new $model();
        }

        //cargar vista
        public function vista($vista, $datos = [], $data = [], $dato = []){
            //verificar si la vista existe
            if (file_exists('../app/views/' . $vista . '.php')) {
                # code...
                require_once '../app/views/' . $vista . '.php';      
            }else{
                //si el archivo no existe
                die('La vista no existe');
            }
        }
    }
?>