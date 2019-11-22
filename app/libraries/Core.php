<?php  
    /*
    Mapear la URL ingresada en el Navegador,
    1.- Controllador
    2.- Metodo
    3.- Parametro
    Ejemplo /articulos/actualizar/4
    */
    class Core{
        // $controllerActual = 'pages';
        protected $methodActual = 'index';  
        protected $parameters = [];

        public function __construct(){
            $url = $this->getUrl();
            //var_dump($this->getUrl());
            //var_dump($url[0]);
            //Buscar en controllers si el controlador existe
            if (file_exists('../app/controllers/' .ucwords($url[0]).'.php')) {
                //Si existe se setea como controlador por defecto
                $this->controllerActual = ucwords($url[0]);
                //unset indice
                unset($url[0]);
            }

            if(isset($url[1]))
                $this->methodActual = ucwords($url[1]);

            //requerir el controlados
            require_once '../app/controllers/'. $this->methodActual . '.php';
            //var_dump($this->controllerActual);
            $this->controllerActual = new $this->methodActual;

            if (isset($url[1])) {
                //Verificar la segunda parte de la url que seria el metodo del controlador
                if (method_exists($this->controllerActual, $url[1])) {
                    //Verificamos el método
                    $this->methodActual = $url[1];
                    unset($url[1]);
                }
            }

            //Obtener los parametros
            $this->parameters = $url ? array_values($url) : [];
            date_default_timezone_set('America/Mexico_City');
            //llamar callback con parametros array
            //var_dump([$this->controllerActual, $this->methodActual], $this->parameters);
            call_user_func_array([$this->controllerActual, $this->methodActual], $this->parameters);
        }

        public function getUrl(){
            if (isset($_GET['url'])) {
                $url = rtrim($_GET['url'], '/');
                $url = filter_var($url, FILTER_SANITIZE_URL);
                $url = explode('/', $url);
                return $url;
            }
        }
    }
?>