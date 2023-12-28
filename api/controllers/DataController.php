<?php

    namespace api\controllers;
    use services\DB;

    class DataController{

        public $conn = null;
      
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

        //Get All Data
        public function getStatistics(){
            try{
                $this->getHeaders();
                $data = [];
                $data['rooms_left']['classic_rooms'] = $this->getTableColumnsCount('Classic Room');
                $data['rooms_left']['superior_rooms'] = $this->getTableColumnsCount('Superior Room');
                $data['rooms_left']['business_rooms'] = $this->getTableColumnsCount('Business Room');
                $data['rooms_left']['executive_rooms'] = $this->getTableColumnsCount('Executive Room');
                $data['customers'] = $this->getTotalUsers();
                $data['booked_reservations'] = $this->getTotalReservations();
                $data['pending_reservations'] = $this->getTotalPendingReservations();
            // echo "<pre>";
            echo json_encode($data, JSON_PRETTY_PRINT);
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        public function getTableColumnsCount($room_type){
            $query = "SELECT * FROM rooms  WHERE status = 'unbook' AND  room_type =  '$room_type' ";
            $result = mysqli_query($this->conn, $query);
            $count = mysqli_num_rows($result);
            return $count;
        }
        
        public function getTotalUsers(){
            $sql= "SELECT * FROM users WHERE role = 'customer'";
            $result = mysqli_query($this->conn, $sql);
            $count = mysqli_num_rows($result);
            return $count;
        }
        public function getTotalReservations(){
            $sql = "SELECT * FROM rooms where status = 'booked'";
            $result = mysqli_query($this->conn, $sql);
            $count = mysqli_num_rows($result);
            return $count;
        }

        public function getTotalPendingReservations(){
            $sql = "SELECT * FROM reservations where status = 'pending'";
            $result = mysqli_query($this->conn, $sql);
            $count = mysqli_num_rows($result);
            return $count;
        }

        public function getRooms(){
            try{
                $this->getHeaders();
                $room_type = $_GET['type'];
                $data = array();
                $query = "SELECT * FROM rooms WHERE room_type = '$room_type' AND status = 'unbook' ";
                $fetch_rooms_query = mysqli_query($this->conn,  $query);
                if($fetch_rooms_query){
                    while($row = mysqli_fetch_assoc($fetch_rooms_query)){
                        $data['rooms'][] = $row;
                    
                    }
                }else{
                    echo "Error" . $query . "<br/>" . mysqli_error($this->conn);
                }

                echo json_encode($data, JSON_PRETTY_PRINT);        
                $this->conn->close();
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        //Require Headers 
        public function getHeaders(){
            // Allow from any origin
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: *");
            header("Access-Control-Allow-Headers: *");
        }
       
    }


?>