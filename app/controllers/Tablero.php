<?php 
    class Tablero extends Controller{

        //Llamamos a los modelos y se les asigna una variable
        public function __construct(){
            $this->citaModelo = $this->model('CitaModel');
        }
        
        //////////////////////////////INDEX//////////////////////////////////////////
        function tablero(){
            //$articulos = $this->indexModelo->getIndex();

            /*$datos = [
                'articulos' => $articulos
            ];*/
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                if($_POST['accion'] == 'comenzar'){

                    $turno = $this->citaModelo->start();
                    
                    $datos = [
                        'turno' => $turno
                    ];

                    echo json_encode($turno);
                }
            }
            else{
                $this->vista('pages/tablero');
            }
        }
    }
?>