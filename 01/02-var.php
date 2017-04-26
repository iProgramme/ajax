<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>喻博文</title>
	<style>
		div{
			width: 800px;
			margin: 0 auto;
			padding: 10px 0;
		}
	</style>
</head>
<body>
<div style="background: blue;color:#fff">这是html自己写的div</div>
<?php 
	$name = "张三";
	$age = 18;
	$sex = "女";


	echo '$name';
	echo "$name"; // 双引号里面是个变量名，则输出变量的值
	echo "<br>";

	$arr = array(0,1,2,3,4,5,6,7,8,9);

	echo $arr[3];
	echo "<br>";
	// echo $arr;
	echo "<br>";
	echo count($arr); // 获取数组的长度
	echo "<br>";
	echo "<br><div style='background:red;color:#fff'>这是一个div标签</div>";
	echo "<br>";
	
?>


	<div style="background: blue;color:#fff">这是html自己写的div</div>



<?php 
	// 关联数组
	$arra = array(
		'name' => '张三',
		'age'  => 188,
		'理解'  => 188.1,
		'na1'  => '李四',
		'网速'=>'很好啊看得见'
		 );
	// echo $arra; // 只能用来输出简单数据类型
	print_r($arra);
	echo "<br>";
	var_dump($arra);
	echo "<br>";
	echo "<br>";
	echo "遍历对象<br>";
	// 遍历
	foreach ($arra as $key => $value) {
		echo $key.'++++'.$value;
	}


?>



	<div style="background: blue;color:#fff">这是html自己写的div</div>



<?php
header('content-type:text/html;charset:utf-8'); // 设置编码
// 拼接字符串
$a = '我叫';
$b = '矿泉水';
echo $a.','.$b;  // 用 . 连接字符串
echo "<br>";
var_dump($arra);  // 正面，所有的php代码块，为一个局，变量在下面的php中可以直接用




?>
<script>
	//alert(111) // 同一文件里面js会比PHP先执行
	//
</script>
</body>
</html>
