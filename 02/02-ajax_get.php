<?php echo "成功了"; ?>
<ul>
	<?php 
		$p = $_GET["username"];
		$arr = array('第一条','啊看得见',2,'阿斯利康的就',4,5,'理解',7,'去我陪UI',9);
		for ($i=0; $i < count($arr); $i++) { 
	?>
	<li><?php echo $arr[$i];?></li>
	<?php }?>
<ul>
<?php 
	echo "您输入的信息是".$p; 
	if (in_array($p,$arr)) {
		echo '有相同的了';
	}

?>
