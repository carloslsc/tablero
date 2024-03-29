<?php 
    class Turno extends Controller{

        //Llamamos a los modelos y se les asigna una variable
        public function __construct(){
            $this->citaModelo = $this->model('CitaModel');
        }
        
        //////////////////////////////INDEX//////////////////////////////////////////
        function turno(){
            $citas = $this->citaModelo->getCitasHoy();
            $citaConfirm = $this->citaModelo->getCitasHoyConfirm();
            $turno = $this->citaModelo->getCitaTurno();

            $datos = [
                'cita' => $citas,
                'citaConfirm' => $citaConfirm
            ];

      
            $data = [
                    'data' => $turno,
                ];
        
            $jsonencoded = json_encode($data, JSON_UNESCAPED_UNICODE);
    
            $fh = fopen("../public/json/Turno.json", 'w');
            fwrite($fh, $jsonencoded);
            fclose($fh);
            
            //Validamos que se realizó una solicitud del metodo Post
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                if($_POST['accion'] == 'confirmar'){
                    
                    $data = [
                        'id' => $_POST['turno'],
                    ];

                    if($this->citaModelo->confirmCita($data)){
                        
                        $citashoy = $this->citaModelo->getCitaHoy();
                    
                        for($i=0;$i<count($citashoy);$i++)
                        {
                            $data = [
                                'id' => $citashoy[$i]->id_cita,
                                'turno' => ($i+1)
                            ];

                            if(!$this->citaModelo->updateConfirmCita($data)){
                                break;
                            }
                        }
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'eliminar'){
                    $data = [
                        'id' => $_POST['turno'],
                    ];

                    if($this->citaModelo->notConfirmCita($data)){
                        $this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'solicitud'){

                    if($solicitud = $this->citaModelo->getCitaTurno()){
                        echo json_encode($solicitud);
                        //$this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'solicitudinicial'){

                    if($solicitud = $this->citaModelo->solicitudTurno()){
                        echo json_encode($solicitud);
                        //$this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'reiniciar'){

                    if($this->citaModelo->restart()){
                        $this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'comenzar'){

                    if($this->citaModelo->startTurno()){
                        $this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'siguiente'){

                    $sig = $this->citaModelo->getTurno(); 

                    $data = [
                        'turno' => $sig->turno
                    ];

                    if($this->citaModelo->nextTurno($data)){
                        $this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }
                else if($_POST['accion'] == 'atras'){

                    $sig = $this->citaModelo->getTurno(); 

                    $data = [
                        'turno' => $sig->turno
                    ];

                    if($this->citaModelo->beforeTurno($data)){
                        $this->vista('pages/turno', $datos);
                    }else{
                        print_r("Algo Salio Mal");
                    }
                }

            }else{
                $this->vista('pages/turno', $datos);
            }
        }
    }
?>