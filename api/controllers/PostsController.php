<?php

    namespace api\controllers;
    
    use services\DB;

    class PostsController{

        public $conn = null;
      
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

        //Getting posts from third party api
        public function getPosts(){
            try{
                //Getting data
                $url = "https://jsonplaceholder.typicode.com/posts";
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $url);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_close($ch);

                //Getting images
                $url = "https://jsonplaceholder.typicode.com/photos";
                $chimg = curl_init();
                curl_setopt($chimg, CURLOPT_URL, $url);
                curl_setopt($chimg, CURLOPT_RETURNTRANSFER, true);
                curl_close($chimg);

                $responseData = json_decode(curl_exec($ch), true);
                $responseImages = json_decode(curl_exec($chimg), true);

                $newArray = [];

                //Combining Data
                foreach($responseData as $resData){
                    if(isset($responseImages[$resData['id']])){
                        $resData['image'] = $responseImages[$resData['id']]['url'];
                    }
                    $newArray[] = $resData;
                }

                $this->savePostsToDatabase($newArray);
                exit;

            }catch(\Exception $e){
                var_dump($e->getMessage());
                exit;
            }
        }

        //Save posts in database from api
        public function savePostsToDatabase($posts = null){
            //Insert data in database
            foreach($posts as $post){
                $userId = $post['userId'];
                $title = $post['title'];
                $content = $post['body'];
                $image = $post['image'];

                $sql = "INSERT INTO posts(`user_id`, `title`, `content`, `image`) VALUES('$userId', '$title', '$content', '$image')";
              
                if($this->conn->query($sql)){
                    echo "New Record Created.";
                }else{
                    echo "Error". $sql . "<br/>". $this->conn->error;
                }
            }
          $this->conn->close();
        }

        //Getting paginated posts from database
        public function getPostFromDatabase(){
           
            try{

                header("Access-Control-Allow-Origin: *");
                header("Access-Control-Allow-Methods: *");
                header("Access-Control-Allow-Headers: *");

                
               $perPage = $_GET['limit'] ?? 5;
               $pageNumber = $_GET['offset'] ?? 0;
               $postsArray = [];

               $sql = "SELECT * FROM posts";
              
               $totalPosts = mysqli_num_rows($this->conn->query($sql));

               $sql = "SELECT * FROM posts ORDER BY id LIMIT $perPage OFFSET $pageNumber";

               $response = mysqli_query($this->conn, $sql);

               if($response){
                    while($row = mysqli_fetch_assoc($response)){
                        $postsArray['posts'][] = $row;
                    }
                   
               }else{
                    echo "Error" . $sql . "<br/>" . mysqli_error($this->conn);
               }

               $postsArray['count'] = $totalPosts;
               mysqli_close($this->conn);

               echo json_encode($postsArray,JSON_PRETTY_PRINT);
               return json_encode($postsArray,JSON_PRETTY_PRINT);
               

            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        // Getting search result from database
        public function getSearchResults(){
            try{
                $this->getHeaders();
                $postArray = [];
                $keyword = $_GET['keyword'] ?? null;

                if($keyword){
                    $sql = "SELECT id, title from posts WHERE title LIKE '%$keyword%' LIMIT 5";
                    $response = mysqli_query($this->conn, $sql);
    
                    if($response){
                        while($row = mysqli_fetch_assoc($response)){
                            $postArray['posts'][] = $row;
                        }
                    }
                }

                echo json_encode($postArray, JSON_PRETTY_PRINT);
                

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

        //Getting Single Post
        public function getCurrentTopic(){
           try{
                $this->getHeaders();
                $currentTopic = null;
                $id = $_GET['id'] ?? null;

                $sql = "SELECT * FROM posts WHERE id = '$id'";
                $response = mysqli_query($this->conn, $sql);

               if($response){
                    while($row = mysqli_fetch_array($response)){
                        $currentTopic = $row;
                    }
               }

               echo json_encode($currentTopic, JSON_PRETTY_PRINT);

           }catch(\Exception $e){
                var_dump($e->getMessage());
           }
        }
    }


?>