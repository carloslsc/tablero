<?php 
    class Start extends Controller{

        //Llamamos a los modelos y se les asigna una variable
        public function __construct(){
            //$this->indexModelo = $this->model('IndexModel');
        }
        
        //////////////////////////////INDEX//////////////////////////////////////////
        function start(){
            /*$articulos = $this->indexModelo->getIndex();

            $datos = [
                'articulos' => $articulos
            ];*/

        $this->vista('pages/start'/*, $datos*/);
        }
    }
?>