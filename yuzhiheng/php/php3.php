<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','941106');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}	
	mysql_select_db('zouxiu');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['name'])){
		$name=@$_POST['name'];
		$pass=@md5($_POST['pass']);
	}else{
		exit ('非法操作');
	}
	
	$query = "select * from registor where name = '$name' and password = '$pass'";
	$result = mysql_query($query);
	if(mysql_fetch_array($result)){
		echo true;
	}else{
		echo false;
	}
?>