<?php

    namespace api\controllers;
    
    use services\DB;

    class ReservationsController{

        public $conn = null;
      
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

        public function getReservations(){
            $this->getHeaders();
            $postsArray = [];
            // $query = "SELECT * users, * reservations";

            $query =  "SELECT * FROM reservations, users WHERE reservations.reserved_by = users.id";



            

            $fetch_user_query = mysqli_query($this->conn, $query);



            if($fetch_user_query){
                while($row = mysqli_fetch_assoc($fetch_user_query)){
                    $postsArray['posts'][] = $row;
                
                }
               
           }else{
                echo "Error" . $query . "<br/>" . mysqli_error($this->conn);
           }
           
           echo json_encode($postsArray,JSON_PRETTY_PRINT);
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