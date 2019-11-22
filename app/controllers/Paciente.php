<?php 
    class Paciente extends Controller
    {
        public function __construct() {
            $this->pacienteModelo = $this->model('PacienteModel');
            //$this->empleadoModelo = $this->model('EmpleadoModel');
        }

        public function paciente(){
            //Solicitamos la funcion para obtener datos de la tabla
            $pacientes = $this->pacienteModelo->getPacientes();
            //Creamos una matriz para colocar los datos obtenidos de la tabla Marca
            $datos = [
                'paciente' => $pacientes
            ];

             //Validamos que se realizó una solicitud del metodo Post
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
                //Para realizar una actualización validamos tener los datos a actualizar
                if(isset($_POST['id']) && isset($_POST['nombre'])){
                    //Colocamos los datos obtenidos en una matriz para proceder al Modelo
                    $data = [
                        'id' => trim($_POST['id']),
                        'nombre' => trim($_POST['nombre']),
                        'app' => trim($_POST['app']),
                        'apm' => trim($_POST['apm']),
                    ];

                    //Validamos si la consulta se ejecuta correctamente 
                    if($this->pacienteModelo->updatePaciente($data)){
                        $this->vista('pages/paciente', $datos);
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
                    if($this->pacienteModelo->deletePaciente($data)){
                        $this->vista('pages/paciente', $datos);
                    }else{
                        die('Algo salio mal');
                    }
                }else{
                    //Colocamos los datos obtenidos en una matriz para proceder al Modelo
                    $data = [
                        'nombre' => trim($_POST['nombre']),
                        'app' => trim($_POST['app']),
                        'apm' => trim($_POST['apm'])
                    ];
                    //Validamos si la consulta se ejecuta correctamente 
                    if($this->pacienteModelo->setPaciente($data)){
                        $this->vista('pages/paciente', $datos);
                    }else{
                        die('Algo salio mal');
                    }
                }
            }else{
                $this->vista('pages/paciente', $datos);
            }
        }

    }
?>