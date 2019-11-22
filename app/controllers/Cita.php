<?php 
    class Cita extends Controller
    {
        public function __construct() {
            $this->citaModelo = $this->model('CitaModel');
            $this->pacienteModelo = $this->model('PacienteModel');
            $this->doctorModelo = $this->model('DoctorModel');
        }

        public function cita(){
            //Solicitamos la funcion para obtener datos de la tabla
            $pacientes = $this->pacienteModelo->getPacientes();
            $citas = $this->citaModelo->getCitas();
            $doctores = $this->doctorModelo->getDoctores();
            //Creamos una matriz para colocar los datos obtenidos de la tabla Marca
            $datos = [
                'paciente' => $pacientes,
                'doctor' => $doctores
            ];

            $data = [
                'data' => $citas,
            ];
    
            $jsonencoded = json_encode($data, JSON_UNESCAPED_UNICODE);

            $fh = fopen("../public/json/Citas.json", 'w');
            fwrite($fh, $jsonencoded);
            fclose($fh);

             //Validamos que se realizó una solicitud del metodo Post
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                //Para realizar una actualización validamos tener los datos a actualizar
                if(isset($_POST['id']) && isset($_POST['fecha'])){
                    //Colocamos los datos obtenidos en una matriz para proceder al Modelo
                    $data = [
                        'id' => trim($_POST['id']),
                        'fecha' => trim($_POST['fecha']),
                        'hora' => trim($_POST['hora']),
                        //'turno' => trim($_POST['turno']),
                        'asunto' => trim($_POST['asunto']),
                        'paciente' => trim($_POST['paciente']),
                        'doctor' => trim($_POST['doctor'])
                    ];

                    //Validamos si la consulta se ejecuta correctamente 
                    if($this->citaModelo->updateCita($data)){
                        $this->vista('pages/cita', $datos);
                    }else{
                        die('Algo salio mal');
                    }        
                //Para realizar una eliminación validamos el id
                }else if(isset($_POST['id'])){
                    //Colocamos los datos obtenidos en una matriz para proceder al Modelo
                    $data = [
                        'id' => trim($_POST['id'])
                    ];
                    //Validamos si la consulta se ejecuta correctamente 
                    if($this->citaModelo->deleteCita($data)){
                        $this->vista('pages/cita', $datos);
                    }else{
                        die('Algo salio mal');
                    }
                }else{
                    //Colocamos los datos obtenidos en una matriz para proceder al Modelo
                    $data = [
                        'fecha' => trim($_POST['fecha']),
                        'hora' => trim($_POST['hora']),
                        'asunto' => trim($_POST['asunto']),
                        'paciente' => trim($_POST['paciente']),
                        'doctor' => trim($_POST['doctor'])
                    ];
                    //Validamos si la consulta se ejecuta correctamente 
                    if($this->citaModelo->setCita($data)){
                        $this->vista('pages/cita', $datos);
                    }else{
                        die('Algo salio mal');
                    }
                }
            }else{
                $this->vista('pages/cita', $datos);
            }
        }

    }
?>