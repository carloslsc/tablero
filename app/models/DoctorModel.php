<?php
    class DoctorModel{
        private $db;

        public function __construct(){
            $this->db = new Base;
        }

        //Funcion para obtener los datos de tabla
        public function getDoctores(){
            $this->db->query("SELECT * FROM `doctor`;");
            
            return $this->db->registers();
        }
    
        //Funcion para obtener los datos de tabla
        public function setDoctor($data){
            $this->db->query("INSERT INTO `doctor`(`id_doctor`, `nombre_doctor`, `app_doctor`, `apm_doctor`,`especialidad_doctor`) 
            VALUES (NULL,:nombre,:app,:apm,:especialidad);");
            
            //vincuar valores
            $this->db->bind(':nombre', $data['nombre']);
            $this->db->bind(':app', $data['app']);
            $this->db->bind(':apm', $data['apm']);
            $this->db->bind(':especialidad', $data['especialidad']);
            
            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        //Funcion para obtener los datos de tabla
        public function updateDoctor($data){
            $this->db->query("UPDATE `doctor` SET `nombre_doctor`=:nombre, `app_doctor`=:app, 
            `apm_doctor`=:apm, especialidad_doctor=:especialidad WHERE `id_doctor`=:id;");
            
            //vincuar valores
            $this->db->bind(':id', $data['id']);
            $this->db->bind(':nombre', $data['nombre']);
            $this->db->bind(':app', $data['app']);
            $this->db->bind(':apm', $data['apm']);
            $this->db->bind(':especialidad', $data['especialidad']);

            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }


        //Funcion para eliminar los datos seleccionados de la tabla
        public function deleteDoctor($data){
            $this->db->query("DELETE FROM `doctor` WHERE `id_doctor`=:id;");
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