<?php
	header('content-type:text/html;charset=utf-8');
	$data = mysql_connect('localhost','root','941106');	
	//选数据库
	mysql_select_db('zouxiu');
	//设置字符集
	mysql_query('SET NAMES UTF8');
	//选表
	//获取记录集
	$query='select * from picture limit 20';
	$result=mysql_query($query);
	
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result);
	}
	
	echo json_encode($arr);
?>