<?php

  // error_reporting(E_ALL);
  // ini_set('display_errors', '1');
  require "services/DB.php";
  use services\DB;

  require "controllers/PostsController.php"; 
  use api\controllers\PostsController;

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
    '/reactPhp/api/posts' =>['PostsController@getPostFromDatabase'],
    '/reactPhp/api/searchResult' =>['PostsController@getSearchResults'],
    '/reactPhp/api/getCurrentTopic' =>['PostsController@getCurrentTopic'],
  ];

  //Check if route available
  $availableRoutes = array_keys($urls);
 

  if(!in_array($current_link, $availableRoutes)){
    header('http/1.1 404 Not Found');
    exit();
  }


  Api::routing($current_link, $urls);
?>