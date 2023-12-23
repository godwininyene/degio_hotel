<?php

    namespace services;
    use mysqli;

    class DB{
        private $server = "localhost";
        private $db_user = "root";
        private $db_pass = "";
        private $db_name = "bluebellhotel";

        // Making Connection
        public function database(){
            $con = new mysqli($this->server, $this->db_user, $this->db_pass, $this->db_name);
            // Checking Connection
            if($con->connect_error){
                die("Connection	 failed". $con->connect_error);
            }
            return $con;
        }
    } 

?>