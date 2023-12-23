<?php

  // error_reporting(E_ALL);
  // ini_set('display_errors', '1');
  require "services/DB.php";
  use services\DB;

  require "controllers/PostsController.php"; 
  require "controllers/UsersController.php";
  require "controllers/ReservationsController.php";
  require "controllers/CustomersController.php";
  use api\controllers\PostsController;
  use api\controllers\UsersController;
  use api\controllers\ReservationssController;
  use api\controllers\CustomersController;

  require "Api.php";
  use api\Api;


  //Getting current URL
  $current_link = $_SERVER['REQUEST_URI'];



  //Handling link query 
  if(str_contains($current_link, '?')){
    $current_link = explode('?', $current_link)[0];
  }

  //Routes
  $urls =[
    '/hotel/api/users' =>['UsersController@loginUser'],
    '/hotel/api/customers/createCustomer' =>['CustomersController@createCustomer'],
    '/hotel/api/reservations' =>['ReservationsController@getReservations'],
  ];

  //Check if route available
  $availableRoutes = array_keys($urls);
 

  if(!in_array($current_link, $availableRoutes)){
    header('http/1.1 404 Not Found');
    exit();
  }


  Api::routing($current_link, $urls);
?>