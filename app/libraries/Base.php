<?php
    //Clase para conectarse a la BD y Consultas PDO
    class Base{
        private $host = DB_HOST;
        private $user = DB_USER;
        private $pass = DB_PASS;
        private $db = DB_DB;

        private $dbh;
        private $stmt;
        private $error;

        public function __construct(){
            //configurar la conexion
            $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db;
            $options = array(
                PDO::ATTR_PERSISTENT => true,
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            );

            try {
                //code...
                $this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
                $this->dbh->exec('set names utf8');
            } catch (PDOException $e) {
                //throw $th;
                $this->error = $e->getMessage();
                echo $this->error;
            }
        }

        //Preparamos la consulta
        public function query($sql){
            $this->stmt = $this->dbh->prepare($sql);
        }

        //Vinculamos la consulta con bind
        public function bind($parameter, $value, $type = null){
            if (is_null($type)) {
                # code...
                switch (true) {
                    case is_int($value):
                        $type = PDO::PARAM_INT;
                        break;
                    case is_bool($value):
                        $type = PDO::PARAM_BOOL;
                        break;
                    case is_null($value):
                        $type = PDO::PARAM_NULL;
                        break;
                    default:
                        $type = PDO::PARAM_STR;
                        break;
                }
            }
            $this->stmt->bindValue($parameter, $value, $type);
        }

        //Ejecuta la consulta
        public function execute(){
            return $this->stmt->execute();
        }

        //Returnar el ultimo ID insertado
        public function lastID(){
            return $this->dbh->lastInsertId();
        }

        //Obtener los registros
        public function registers(){
            $this->execute();
            return $this->stmt->fetchAll(PDO::FETCH_OBJ);
        }

        //Obtener un registro
        public function register(){
            $this->execute();
            return $this->stmt->fetch(PDO::FETCH_OBJ);
        }

        //Obtener cantidad de filas con el método rowCount
        public function rowCount(){
            return $this->stmt->rowCount();
        }
    }
?>
