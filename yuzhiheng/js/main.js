//指定网页程序的主模块,意思是整个网页的入口代码,所有代码都从这儿开始运行

//require 调用模块，接收二个参数。
//第1个参数是一个数组，表示所依赖的模块  
//第2个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。

/*require(['module1','module2'],function(m1,m2){//回调函数的参数代码模块本身
	alert(m1.name+','+m1.age);//调用模块一的属性
	m2.fn();//调用模块二的方法
});*/


require(['config','js'],function(){//config：加载配置文件
	require(['jquery'],function(){
		
	});
});


