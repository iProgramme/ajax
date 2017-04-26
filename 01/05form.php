<?php 

$name = $_GET["username"];
$password = $_GET["password"];
echo $name."<br>";
echo $password."<br>";


$arr[$name] = $password;
function panduan($name,$password,$index = 0){

}
foreach ($arr as $key => $value) {
	echo $key."-------".$value;
}

if ($name=="矿泉水"&&$password == "123456") {
	echo "登陆成功";
}else{
	echo "登陆失败";
}



?>