
<?php 
	$names = array(
		array('name'=>'上神','Chinese'=>140,'english'=>120,'Math'=>110,'other'=>222),
		array('name'=>'热巴','Chinese'=>130,'english'=>130,'Math'=>100,'other'=>232),
		array('name'=>'上仙','Chinese'=>100,'english'=>100,'Math'=>90,'other'=>200),
		array('name'=>'我','Chinese'=>142,'english'=>123,'Math'=>140,'other'=>262),
		array('name'=>'小仙','Chinese'=>100,'english'=>90,'Math'=>90,'other'=>202),
		array('name'=>'人类','Chinese'=>80,'english'=>50,'Math'=>30,'other'=>142),
		array('name'=>'鬼','Chinese'=>30,'english'=>20,'Math'=>10,'other'=>102)
		);
	$value0 = $_POST['username0'];
	$value1 = $_POST['username1'];
	$value2 = $_POST['username2'];
	echo $value0;
	echo $value1;
	echo $value2;
	if ($value0==$value1&&$value1==$value2&&$value1==="all") {
		for ($i=0; $i < count($names); $i++) {
?> 
		<ul>
			<li><?php  echo "name:".$names[$i]['name'] ?></li>
			<li><?php  echo "Chinese:".$names[$i]['Chinese'] ?></li>
			<li><?php  echo "english:".$names[$i]['english'] ?></li>
			<li><?php  echo "Math:".$names[$i]['Math'] ?></li>
			<li><?php  echo "other:".$names[$i]['other'] ?></li>
		</ul>
		<?php } 
	}else{ ?>
		<ul>
			<li><?php  echo "name:".$names[$value0]['name'] ?></li>
			<li><?php  echo "Chinese:".$names[$value0]['Chinese'] ?></li>
			<li><?php  echo "english:".$names[$value0]['english'] ?></li>
			<li><?php  echo "Math:".$names[$value0]['Math'] ?></li>
			<li><?php  echo "other:".$names[$value0]['other'] ?></li>
		</ul>
		<ul>
			<li><?php  echo "name:".$names[$value1]['name'] ?></li>
			<li><?php  echo "Chinese:".$names[$value1]['Chinese'] ?></li>
			<li><?php  echo "english:".$names[$value1]['english'] ?></li>
			<li><?php  echo "Math:".$names[$value1]['Math'] ?></li>
			<li><?php  echo "other:".$names[$value1]['other'] ?></li>
		</ul>
		<ul>
			<li><?php  echo "name:".$names[$value2]['name'] ?></li>
			<li><?php  echo "Chinese:".$names[$value2]['Chinese'] ?></li>
			<li><?php  echo "english:".$names[$value2]['english'] ?></li>
			<li><?php  echo "Math:".$names[$value2]['Math'] ?></li>
			<li><?php  echo "other:".$names[$value2]['other'] ?></li>
		</ul>
<?php
	}
?>