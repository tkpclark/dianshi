<?php
return array(
	//'配置项'=>'配置值'
	
	//关闭、开启字段缓存
	//'DB_FIELDS_CACHE'=>false,

	//设置访问模块
	'MODULE_ALLOW_LIST'=>array('Home','Admin'),
	//设置默认的起始模块
	'DEFAULT_MODUL'=>'Home',
	//开启路由
	'URL_ROUTER_ON'   => true,
	'URL_ROUTE_RULES'=>array(
		'a/:Id'=>'Index/Activation',
	),
	//数据库配置信息
	'DB_TYPE'   => 'mysql', // 数据库类型
	'DB_HOST'   => '123.57.34.252',// 服务器地址
	'DB_NAME'   => 'recruitment',// 数据库名
	'DB_USER'   => 'app', // 用户名
	'DB_PWD'    => 'dudu78#90', // 密码
	'DB_PORT'   => 3306, // 端口
	//'DB_PREFIX' => 'think_',// 数据库表前缀
	'DB_CHARSET'=> 'utf8',// 字符集
	'SHOW_PAGE_TRACE'=>true,//页面trace，调试数据库工具


	//邮箱配置
	'MAIL_ADDRESS'=>'xuguishung_1@163.com', // 邮箱地址

	'FROM_NAME'   => 'xu', //发件人名称 

	'MAIL_SMTP'=>'smtp.163.com', // 邮箱SMTP服务器

	'MAIL_LOGINNAME'=>'xuguishung_1@163.com', // 邮箱登录帐号

	'MAIL_PASSWORD'=>'xuguishuang', // 邮箱密码

);