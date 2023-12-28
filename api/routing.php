<?php

  // error_reporting(E_ALL);
  // ini_set('display_errors', '1');
  require "services/DB.php";
  use services\DB;

  require "controllers/UsersController.php";
  require "controllers/ReservationsController.php";
  require "controllers/DataController.php";
  use api\controllers\UsersController;
  use api\controllers\ReservationssController;
  use api\controllers\DataController;

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
    '/hotel/api/loginUser' =>['UsersController@loginUser'],
    '/hotel/api/getUsers' =>['UsersController@getUsers'],
    '/hotel/api/createUser' =>['UsersController@createUser'],
    '/hotel/api/updateUser' =>['UsersController@updateUser'],
    '/hotel/api/updatePassword' =>['UsersController@updatePassword'],
    '/hotel/api/getReservations' =>['ReservationsController@getReservations'],
    '/hotel/api/createReservation' =>['ReservationsController@createReservation'],
    '/hotel/api/updateReservation' =>['ReservationsController@updateReservation'],
    '/hotel/api/deleteReservation' =>['ReservationsController@deleteReservation'],
    '/hotel/api/getRooms' =>['DataController@getRooms'],
    '/hotel/api/getStatistics' =>['DataController@getStatistics'],
  ];

  //Check if route available
  $availableRoutes = array_keys($urls);
 
  if(!in_array($current_link, $availableRoutes)){
    header('http/1.1 404 Not Found');
    exit();
  }

  Api::routing($current_link, $urls);
?>