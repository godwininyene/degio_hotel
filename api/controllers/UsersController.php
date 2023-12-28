<?php

    namespace api\controllers;
    
    use services\DB;

    class UsersController{

        public $conn = null;
      
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

        //Create a user
        public function createUser(){
            try{
                $this->getHeaders();
                $data = [];
                $firstname = $_POST['firstname'];
                $lastname = $_POST['lastname'];
                $email = $_POST['email'];	
                $phone = $_POST['phone'];
                $gender = $_POST['gender'];
                $password = $_POST['password'];
                $query = "INSERT INTO users(firstname, lastname, email, phone, gender,password) ";
                $query.="VALUES('$firstname', '$lastname', '$email','$phone', '$gender', '$password');";
                $create_user_query = mysqli_query($this->conn, $query);
                if($create_user_query){
                    header('HTTP/1.1 200');
                    $data['status'] ='success';
                    $data['message']= 'Account created successfully';
                }else{
                    header('HTTP/1.1 500');
                    $data['status'] ='fail';
                    $data['message'] = 'Could not create account. Please try again!';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);
                 
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        //Update User
        public function updateUser(){
            try{
                $this->getHeaders();
                $data = [];
                $firstname = $_POST['firstname'];
                $lastname = $_POST['lastname'];
                $email = $_POST['email'];	
                $phone = $_POST['phone'];
                $city = $_POST['city'];
                $address = $_POST['address'];
                $user_id = $_POST['user_id'];
                $query = "UPDATE users SET firstname = '$firstname',lastname = '$lastname', email = '$email',";
                $query.="phone = '$phone', city = '$city', address = '$address' WHERE id = '$user_id'";
                $update_user_query = mysqli_query($this->conn, $query);
                $sql = "SELECT * FROM users WHERE id = '$user_id'";
                $result = mysqli_query($this->conn, $sql);
                if($update_user_query){
                    header('HTTP/1.1 200');
                    $data['status'] ='success';
                    $row = mysqli_fetch_assoc($result);
                    $data['user'] = $row;
                    $data['message']= 'Account updated successfully';
                }else{
                    header('HTTP/1.1 500');
                    $data['status'] ='fail';
                    $data['message'] = 'Could not update account. Please try again!';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);
                 
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }  
        }

        //Update Password
        public function updatePassword(){
            try{
                $this->getHeaders();
                $data = [];
                $current_password = $_POST['current_password'];
                $new_password = $_POST['new_password'];
                $user_id = $_POST['user_id'];
                $sql = "SELECT * FROM users WHERE password = '$current_password'" ;
                $result = mysqli_query($this->conn, $sql);
                if(mysqli_num_rows($result) >0){
                    $query = "UPDATE users SET password = '$new_password' WHERE id = '$user_id' ";
                    $update_password_query = mysqli_query($this->conn, $query);
                    if($update_password_query){
                        header('HTTP/1.1 200');
                        $data['status'] ='success';
                        $data['message']= 'Password updated successfully';
                    }
                }else{
                    header('HTTP/1.1 402');
                    $data['status'] ='fail';
                    $data['message'] = 'Current password is invalid!';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);
                 
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }  
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
                    $data['message'] = 'Invalid login credentials';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);
                $this->conn->close();
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }


         //Get users
         public function getUsers(){
            try{
                $this->getHeaders();
                $data = [];
                $query = "SELECT * FROM users WHERE role = 'customer' ORDER BY id DESC";
                $fetch_users_query = mysqli_query($this->conn, $query);
                
                if($fetch_users_query){
                    while($row = mysqli_fetch_assoc($fetch_users_query)){
                        $data['users'][] = $row;
                    
                    }
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