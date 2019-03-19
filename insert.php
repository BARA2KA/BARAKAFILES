<?
$username=$_POST["username"]
$password=$_POST["password"]
$Gender=$_POST["Gender"]
$Email=$_POST["Email"]
$phonecode=$_POST["phonecode"]
$phone=$_POST["phone"]

if (!empty($usename ) || !empty($password) || (!empty($Gender ) || !empty($Email)
 || (!empty($phonecode ) || !empty($phone)
 #code.......
 $_host="localhost";
 $dbUsername="root"
 $dbpasword="";
 $dbname="youtube";

 //create a connection.
 $conn =  new mysqli ($host, $dbusername, $dbpassword, $dbname);

 if($mysql_connect_error ()) {
     die('connect Error('.mysqli_connect_error()).')'.mysqli_connect_error());
 }
 else { 
     $SELECT= "SELECT email FROM register Where email=? limit 1";
     $INSERT="INSERT into a register (username, password, gender, email, phonecode, phone) values(?,?,?,?,?,?)";


     //prepare statement
     $stmt=$conn->prepare (SELECT);
     $stmt->bind_param ('s' $email);
     $stmt->execute();
     $stmt->bind_result($Email)
     $stmt->store result();
     $rnum->$stmt->num_rows;

     if ($rnum==0)  {
         $stmt->close();

         
     }
 }
}else
      {
          echo  "all fields are required"
          die();
      }
?>