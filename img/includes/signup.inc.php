<?php
  include_once 'dbh.inc.php';

  $first = mysqli_real_escape_string($conn, $_POST['first']);
  $email = mysqli_real_escape_string($conn, $_POST['email']);
  $pwd = mysqli_real_escape_string($conn, $_POST['pwd']);
  


  $sql = "INSERT INTO users (user_first, user_email, user_pwd) VALUES ('$first', '$email', '$pwd');";
   mysqli_query($conn, $sql);

  header("Location: ../index.php?signup=success");