<?php
if(isset($_POST['fname'])){
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $age=$_POST['age'];


    $conn=mysqli_connect("localhost", "root", "", "demo", "8111");
    // $sql = "INSERT INTO `js`(`fname`, `lname`) VALUES ('$fname', '$lname')";
    $sql = "INSERT INTO `js`(`fname`, `lname`, `age`) VALUES ('$fname', '$lname', '$age')";

    $result = mysqli_query($conn, $sql);

    if($result==true){
        echo "<h3>Inserted.....!</h3>";
    }

}
?>