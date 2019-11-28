<?php
    class CitaModel{
        private $db;

        public function __construct(){
            $this->db = new Base;
        }

        //Funcion para obtener los datos de tabla
        public function getCitas(){
            $this->db->query("SELECT * FROM `cita` AS c INNER JOIN `doctor` AS d INNER JOIN `paciente` AS p 
            ON c.`paciente_cita`=p.`id_paciente` AND c.`doctor_cita`=d.`id_doctor`;");
            
            return $this->db->registers();
        }

        public function getCitasHoy(){
            $this->db->query("SELECT * FROM `cita` AS c INNER JOIN `doctor` AS d INNER JOIN `paciente` AS p 
            ON c.`paciente_cita`=p.`id_paciente` AND c.`doctor_cita`=d.`id_doctor` AND `fecha_cita`=:fecha AND c.`pasado_lista_cita`=0 ORDER BY c.`hora_cita`;");
            
            $this->db->bind(':fecha', date("Y-m-d"));

            return $this->db->registers();
        }

        public function getCitaHoy(){
            $this->db->query("SELECT * FROM `cita` AS c INNER JOIN `cita_hoy` AS ch ON c.`id_cita`=ch.`id_cita_cita_hoy` ORDER BY c.`hora_cita` ASC;");
            
            return $this->db->registers();
        }

        public function getCitaTurno(){
            $this->db->query("SELECT * FROM `cita` AS c INNER JOIN `cita_hoy` AS ch INNER JOIN `turno_vigente` AS t INNER JOIN `paciente` AS p ON c.`paciente_cita`=p.`id_paciente` AND t.`turno`=ch.`turno_cita_hoy` AND c.`fecha_cita`=:fecha AND c.`id_cita`=ch.`id_cita_cita_hoy` ORDER BY c.`hora_cita`;");
            
            $this->db->bind(':fecha', date("Y-m-d"));

            return $this->db->registers();
        }

        public function solicitudTurno(){
            $this->db->query("SELECT * FROM `turno_vigente`;");
            
            return $this->db->register();
        }

        public function getCitasHoyConfirm(){
            $this->db->query("SELECT * FROM `cita` AS c INNER JOIN `cita_hoy` AS ch INNER JOIN `doctor` AS d INNER JOIN `paciente` AS p 
            ON c.`paciente_cita`=p.`id_paciente` AND c.`doctor_cita`=d.`id_doctor` AND `fecha_cita`=:fecha AND c.`id_cita`=ch.`id_cita_cita_hoy` ORDER BY c.`hora_cita`;");
            
            $this->db->bind(':fecha', date("Y-m-d"));

            return $this->db->registers();
        }
    
        //Funcion para obtener los datos de tabla
        public function setCita($data){
            $this->db->query("INSERT INTO `cita`(`id_cita`, `fecha_cita`, `hora_cita`, `asunto_cita`, `paciente_cita`, `doctor_cita`) 
            VALUES (NULL,:fecha,:hora,:asunto,:paciente,:doctor);");
            
            //vincuar valores
            $this->db->bind(':fecha', $data['fecha']);
            $this->db->bind(':hora', $data['hora']);
            $this->db->bind(':asunto', $data['asunto']);
            $this->db->bind(':paciente', $data['paciente']);
            $this->db->bind(':doctor', $data['doctor']);
            
            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        //Funcion para obtener los datos de tabla
        public function updateCita($data){
            $this->db->query("UPDATE `cita` SET `fecha_cita`=:fecha, `hora_cita`=:hora, `asunto_cita`=:asunto, `paciente_cita`=:paciente, `doctor_cita`=:doctor 
            WHERE `id_cita`=:id;");
            
            //vincuar valores
            $this->db->bind(':id', $data['id']);
            $this->db->bind(':fecha', $data['fecha']);
            $this->db->bind(':hora', $data['hora']);
            //$this->db->bind(':turno', $data['turno']);
            $this->db->bind(':asunto', $data['asunto']);
            $this->db->bind(':paciente', $data['paciente']);
            $this->db->bind(':doctor', $data['doctor']);
            
            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        //Funcion para obtener los datos de tabla
        public function confirmCita($data){
            $this->db->query("UPDATE `cita` SET `pasado_lista_cita`=:confirm
            WHERE `id_cita`=:id;");
            
            //vincuar valores
            $this->db->bind(':id', $data['id']);
            $this->db->bind(':confirm', 1);
            
            //Ejecutar
            if($this->db->execute()){

                $this->db->query("INSERT INTO `cita_hoy`(`id_cita_cita_hoy`) 
                VALUES (:id);");

                $this->db->bind(':id', $data['id']);
                
                if($this->db->execute()){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }

        //Funcion para obtener los datos de tabla
        public function updateConfirmCita($data){
            $this->db->query("UPDATE `cita_hoy` SET `turno_cita_hoy`=:turno
            WHERE `id_cita_cita_hoy`=:id;");
            
            //vincuar valores
            $this->db->bind(':id', $data['id']);
            $this->db->bind(':turno', $data['turno']);
            
            //Ejecutar
            if($this->db->execute()){
                return true;    
            }else{
                return false;
            }
        }


        public function notConfirmCita($data){
            $this->db->query("UPDATE `cita` SET `pasado_lista_cita`=:confirm
            WHERE `id_cita`=:id;");
            
            //vincuar valores
            $this->db->bind(':id', $data['id']);
            $this->db->bind(':confirm', 0);
            
            //Ejecutar
            if($this->db->execute()){
                $this->db->query("DELETE FROM `cita_hoy` WHERE `id_cita_cita_hoy`=:id;");
                
                //vincuar valores
                $this->db->bind(':id', $data['id']);

                //Ejecutar
                if($this->db->execute()){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }

        public function restart(){
            $this->db->query("CALL limpiar_cita_hoy();");
            
            //Ejecutar
            if($this->db->execute()){
                $this->db->query("CALL autoincrement_cita_hoy();");
                
                //Ejecutar
                if($this->db->execute()){
                    $this->db->query("CALL actualizar_cita();");
                
                    //Ejecutar
                    if($this->db->execute()){
                        $this->db->query("CALL actualizar_turno();");
                
                        //Ejecutar
                        if($this->db->execute()){
                            return true;
                        }else{
                            return false;
                        }
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }

        public function start(){
            $this->db->query("SELECT * FROM cita AS c INNER JOIN cita_hoy AS ch INNER JOIN turno_vigente AS t INNER JOIN paciente AS p
            ON c.`id_cita`=ch.`id_cita_cita_hoy` AND ch.`turno_cita_hoy`=t.`turno` AND c.`paciente_cita`=p.`id_paciente`;");
            
            return $this->db->registers();
        }

        public function startTurno(){
            $this->db->query("UPDATE turno_vigente SET turno = 1;");
                
            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        public function getTurno(){
            $this->db->query("SELECT * FROM `turno_vigente`;");
            

            return $this->db->register();
        }

        public function nextTurno($data){
            $this->db->query("UPDATE turno_vigente SET turno=:turno;");
                    
            $this->db->bind(':turno', ($data['turno']+1));

            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        public function beforeTurno($data){
            $this->db->query("UPDATE turno_vigente SET turno=:turno;");
                    
            $this->db->bind(':turno', ($data['turno']-1));

            //Ejecutar
            if($this->db->execute()){
                return true;
            }else{
                return false;
            }
        }

        //Funcion para eliminar los datos seleccionados de la tabla
        public function deleteCita($data){
            $this->db->query("DELETE FROM `cita` WHERE `id_cita`=:id;");
            //return $this->db->registers();

            //vincuar valores
            $this->db->bind(':id', $data['id']);

            //Ejecutar
            if($this->db->execute()){
                $this->db->query("DELETE FROM `cita_hoy` WHERE `id_cita_cita_hoy`=:id;");

                //vincuar valores
                $this->db->bind(':id', $data['id']);
                if($this->db->execute()){
                    return true;
                }else{
                    return false;
                }    
            }else{
                return false;
            }
        }

    }
?>