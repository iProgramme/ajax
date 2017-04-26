<?php  
	// 简单数组的遍历
	$arr = array(0,1,2,3,4,5,6,7,8,9);
	for ($i=0; $i < count($arr); $i++) { 
		echo $arr[$i]."<br>";
	}

	// 关联数组的遍历，用foreach
	echo "<br>遍历关联数组<br>";
	$arr2 = array('name' => "矿泉水",
		"age"=>18,
		"sex"=>"girls",
		"hobby"=>"妹子",
		"area"=>"广州",
		"love"=>"吃的"
	 );
	foreach ($arr2 as $key => $value) {
		echo $key.">>>>>>".$value."<br>";
	}
?>