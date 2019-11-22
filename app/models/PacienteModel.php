<?php
    class PacienteModel{
        private $db;

        public function __construct(){
            $this->db = new Base;
        }

        //Funcion para obtener los datos de tabla
        public function getPacientes(){
            $this->db->query("SELECT * FROM `paciente`;");
            
            return $this->db->registers();
        }
    
        //Funcion para obtener los datos de tabla
        public function setPaciente($data){
            $this->db->query("INSERT INTO `paciente`(`id_paciente`, `nombre_paciente`, `app_paciente`, `apm_paciente`) 
            VALUES (NULL,:nombre,:app,:apm);");
            
            //vincuar valores
            $this->db->bind(':nombre', $data['nombre']);
            $this->db->bind(':app', $data['app']);
            $this->db->bind(':apm', $data['apm']);
            
            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        //Funcion para obtener los datos de tabla
        public function updatePaciente($data){
            $this->db->query("UPDATE `paciente` SET `nombre_paciente`=:nombre, `app_paciente`=:app, 
            `apm_paciente`=:apm WHERE `id_paciente`=:id;");
            
            //vincuar valores
            $this->db->bind(':id', $data['id']);
            $this->db->bind(':nombre', $data['nombre']);
            $this->db->bind(':app', $data['app']);
            $this->db->bind(':apm', $data['apm']);
            
            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }


        //Funcion para eliminar los datos seleccionados de la tabla
        public function deletePaciente($data){
            $this->db->query("DELETE FROM `paciente` WHERE `id_paciente`=:id;");
            //return $this->db->registers();

            //vincuar valores
            $this->db->bind(':id', $data['id']);

            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

    }
?>