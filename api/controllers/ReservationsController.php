<?php

    namespace api\controllers;
    
    use services\DB;

    class ReservationsController{
        public $conn = null;
        public function __construct(){
            //Create Connection
            $this->conn = (new DB())->database();
        }

        //Create Reservation
        public function createReservation(){
            try{
                $this->getHeaders();
                $data = [];
                $reserved_by = $_POST['reserved_by'];
                $room_type = $_POST['room_type'];
                $room_no = $_POST['room_no'];
                $check_in = $_POST['check_in'];	
                $check_out = $_POST['check_out'];
                $no_guest = $_POST['no_guest'];
                $no_children = $_POST['no_children'];
                $comment = $_POST['comment'];
                $no_days = date_diff(date_create( $_POST['check_out']), date_create( $_POST['check_in']))->days;
                $total_bill = 0;
                if($room_type == 'Classic Room'){
                    $total_bill = 5000 * $no_days;
                }else if($room_type == 'Superior Room'){
                    $total_bill = 10000 * $no_days;
                }else if($room_type == 'Business Room'){
                    $total_bill = 20000 * $no_days;
                }else if($room_type == 'Executive Room'){
                    $total_bill = 40000 * $no_days;
                }
                $query = "INSERT INTO reservations(reserved_by,room_type, room_no, check_in, check_out, no_guest, no_children, total_bill, no_days, comment) ";
                $query.="VALUES($reserved_by,'$room_type', '$room_no', '$check_in' ,'$check_out', '$no_guest', '$no_children', $total_bill, $no_days, '$comment')";
                $create_reservation_query = mysqli_query($this->conn, $query);
                if($create_reservation_query){
                    $sql1 = "UPDATE rooms_type SET rooms_left = rooms_left -1 WHERE room_type = '$room_type'";
                    mysqli_query($this->conn, $sql1);
                    $sql2 = "UPDATE rooms SET status = 'booked' WHERE room_num = '$room_no'";
                    mysqli_query($this->conn, $sql2);
                    header('HTTP/1.1 201');
                    $data['status'] ='success';
                    $data['message']= 'Reservation placed successfully';
                }else{
                    header('HTTP/1.1 500');
                    $data['status'] ='fail';
                    $data['message'] = 'Could not place reservation. Please try again!';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);
                 
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        //Get All Reservations
        public function getReservations(){
            $this->getHeaders();
            $data = [];
            $customer_id = $_GET['customer_id'] ?? null;
            $role = $_GET['role'] ?? null;
            if($role== 'admin'){
                $query = "SELECT * FROM users INNER JOIN reservations  ON reservations.reserved_by = users.id ORDER BY reservations.id DESC";
            }else{
                $query =  "SELECT * FROM reservations WHERE reserved_by = '{$customer_id}' ORDER BY id DESC";
            }
            $fetch_reservations_query = mysqli_query($this->conn, $query);
            if($fetch_reservations_query){
                while($row = mysqli_fetch_assoc($fetch_reservations_query)){
                    $data['reservations'][] = $row;
                }
            }else{
                echo "Error" . $query . "<br/>" . mysqli_error($this->conn);
            }
            //    echo "<pre>";
           echo json_encode($data,JSON_PRETTY_PRINT);
        }

        //Update Reservation
        public function updateReservation(){
            try{
                $this->getHeaders();
                $status = $_GET['status'];
                $id = $_GET['id'];
                $room_no= $_GET['room_no'] ?? null;
                $query = "UPDATE reservations SET status = '$status' WHERE id = '$id'";
                $update_reservation_query = mysqli_query($this->conn, $query);
                if($status == 'check-out'){
                    $sql = "UPDATE rooms SET status = 'unbook' WHERE room_num = '$room_no'";
                    mysqli_query($this->conn, $sql);
                }else if($status == 'check-in'){
                    $sql = "UPDATE rooms SET status = 'booked' WHERE room_num = '$room_no'";
                    mysqli_query($this->conn, $sql);
                }
                if( $update_reservation_query){
                    header('HTTP/1.1 200');
                    $data['status'] ='success';
                    $data['message']= 'Reservation ' . $status .  ' successfully';
                }else{
                    header('HTTP/1.1 500');
                    $data['status'] ='fail';
                    $data['message'] = 'Could not '. $status.  ' reservation. Please try again!';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);

            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }

        //Delete Reservation
        public function deleteReservation(){
            try{
                $this->getHeaders();
                $id = $_GET['id'];
                $room_no= $_GET['room_no'] ?? null;
                $query = "DELETE FROM reservations  WHERE id = '$id'";
                $delete_reservation_query = mysqli_query($this->conn, $query);
                if( $delete_reservation_query){
                    $sql = "UPDATE rooms SET status = 'unbook' WHERE room_num = '$room_no'";
                    mysqli_query($this->conn, $sql);
                    header('HTTP/1.1 200');
                    $data['status'] ='success';
                    $data['message']= 'Reservation deleted successfully';
                }else{
                    header('HTTP/1.1 500');
                    $data['status'] ='fail';
                    $data['message'] = 'Could not delete reservation. Please try again!';
                }
                echo json_encode($data, JSON_PRETTY_PRINT);
            }catch(\Exception $e){
                var_dump($e->getMessage());
            }
        }
        //Require Headers s
        public function getHeaders(){
            // Allow from any origin
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: *");
            header("Access-Control-Allow-Headers: *");
        }
    }
?>