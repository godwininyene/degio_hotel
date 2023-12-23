<?php

    namespace api\controllers;
    
    use services\DB;

    class UsersController{

        public $conn = null;
      
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

      

        //Login a user
        public function loginUser(){
            try{
                $this->getHeaders();
                $email = $_POST['email'];
                $password = $_POST['password'];
                $data = [];

                $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password' ";
                $fetch_user_query = mysqli_query($this->conn, $query);

                if(!$fetch_user_query){
                    header('HTTP/1.1 500');
                    die("Failed to fetch record.");
                    $data['message'] = 'Invalid user login credentials';
                }
            
                if (mysqli_num_rows($this->conn->query($query)) > 0) {
                    header('HTTP/1.1 200');
                    $row = mysqli_fetch_assoc($fetch_user_query);
                    $data['user'] = $row;
                    $data['status'] ='success';
                    $data['message']= 'Login successful';
                } else {
                    header('HTTP/1.1 422');
                    $data['message'] = 'Invalid user login credentials';
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