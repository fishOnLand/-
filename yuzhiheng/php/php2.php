<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','941106');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}	
	mysql_select_db('zouxiu');
	mysql_query('SET NAMES UTF8');
	
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$name=@$_POST['name'];
	}else{
		exit('非法登录');
	};
	
	$query = "select * from registor where name = '$name' ";//获取记录集
	$result = mysql_query($query);//执行语句
	if(mysql_fetch_array($result)){//输出记录
		echo true;//表示数据库里有这个名字
	}else{
		echo false;
	}
	if(isset($_POST['submit'])&& $_POST['submit']=='注册'){
		$name=$_POST['username'];//username:表单的名称
		$pass=md5($_POST['password']);
		
		$query="insert registor values(NULL,'$name','$pass')";
		mysql_query($query);
		header('location:../login.html');
	}
?>