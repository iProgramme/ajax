<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>php新用法</title>
	<style>
		*{
			margin: 0;
			padding: 0;
			list-style: none
		}
		ul{
			width: 800px;
			margin: 100px auto;
			text-align: center;
		}
		/* 本机请求服务器，才能看到本机的情况和服务器的情况 */
		li{
			background-color: red;
			color: #fff;
			padding: 10px 20px;
			text-align: center;
			float: left;
			margin-right: 20px
		}
	</style>
</head>
<?php $arr = array('首页','生鲜','电器','Mac','首页','生鲜','电器','Mac') ?>
<body>
	<ul>
		<?php for ($i=0; $i <count($arr) ; $i++) { ?>
			<li><?php echo $arr[$i];?></li>
		<?php  }?>
	</ul>
</body>
</html>