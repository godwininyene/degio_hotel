<?php

    namespace api\controllers;
    
    use services\DB;

    class CustomersController{

        public $conn = null;
      
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

        public function createCustomer(){
           try{
                $this->getHeaders();
                
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