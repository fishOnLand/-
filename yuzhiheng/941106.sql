-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 10 月 18 日 09:32
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `zouxiu`
--
CREATE DATABASE `zouxiu` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `zouxiu`;

-- --------------------------------------------------------

--
-- 表的结构 `lunbo`
--

CREATE TABLE IF NOT EXISTS `lunbo` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `lunbo`
--

INSERT INTO `lunbo` (`sid`, `url`) VALUES
(1, 'http://images.xiustatic.com/cms/noregular/2017/10/16/home/banner1a.jpg'),
(2, 'http://images.xiustatic.com/cms/noregular/2017/10/16/home/banner2.jpg'),
(3, 'http://images.xiustatic.com/cms/noregular/2017/10/16/home/banner3.jpg'),
(4, 'http://images.xiustatic.com/cms/noregular/2017/10/16/home/banner4.jpg'),
(5, 'http://images.xiustatic.com/cms/noregular/2017/10/16/home/banner5.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `picture`
--

CREATE TABLE IF NOT EXISTS `picture` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=61 ;

--
-- 转存表中的数据 `picture`
--

INSERT INTO `picture` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://image.zoshow.com/upload/goods20170804/3I119273/3I1192730001/g1_402_536.jpg', '女士毛球饰羊毛针织帽 \n	                	 [ 限时9.5折 ]', '1036'),
(2, 'http://image.zoshow.com/upload/goods20151231/3Q012750/3Q0127500001/g1_402_536.jpg', 'DIOR TRIBALE耳钉 \n	                	 [ 限时9.5折 ]', '2974'),
(3, 'http://image.zoshow.com/upload/goods20170816/3O061239/3O0612390001/g1_402_536.jpg', '【明星同款】时尚男女同款金属边框平光镜 \n	                	 [ 限时8.5折 ]', '2253'),
(4, 'http://image.zoshow.com/upload/goods20170731/3I118960/3I1189600001/g1_402_536.jpg', '女士斜纹印花真丝方巾Woman''s Milky Way 90x90cm \n	                	 [ 限时9.5折 ]', '3439'),
(5, 'http://image.zoshow.com/upload/goods20151213/3I092973/3I0929730001/g1_402_536.jpg', '男士真皮拼接全指手套 \n	                	 [ 限时6折 ]', '852'),
(6, 'http://image.zoshow.com/upload/goods20170719/3I118459/3I1184590001/g1_402_536.jpg', '男士牛皮纹理腰带 \n	                	 [ 限时8折 ]', '832'),
(7, 'http://image.zoshow.com/upload/goods20170922/62055269/620552690001/g1_402_536.jpg', '腮红遮瑕高光三色盘#Beige medium# \n	                	 [ 限时8折 ]', '544'),
(8, 'http://image.zoshow.com/upload/goods20170811/62053941/620539410001/g1_402_536.jpg', '超模肌密光灿防晒CC霜 SPF35 \n	                	 [ 限时8折 ]', '312'),
(9, 'http://image.zoshow.com/upload/goods20160111/10420015/104200150001/g1_402_536.jpg', '男士长袖T恤 \n	                	 [ 限时9折 ]', '441'),
(10, 'http://image.zoshow.com/upload/goods20170718/10582712/105827120001/g1_402_536.jpg', '男士夹克 \n	                	 [ 限时9折 ]', '3042'),
(11, 'http://image.zoshow.com/upload/goods20170417/10561438/105614380001/g1_402_536.jpg', '男士House Reggae字符印花纯棉牛仔外套 \n	                	 [ 限时5.5折 ]', '2519'),
(12, 'http://image.zoshow.com/upload/goods20150824/10377919/103779190001/g1_402_536.jpg', '男士长袖卡通纯棉T恤 \n	                	 [ 限时9折 ]', '873'),
(13, 'http://image.zoshow.com/upload/goods20170922/10599593/105995930001/g1_402_536.jpg', '男士灰色纯棉休闲外套 \n	                	 [ 限时8折 ]', '3048'),
(14, 'http://image.zoshow.com/upload/goods20170915/11762666/117626660001/g1_402_536.jpg', '女士Swallow燕子卫衣 \n	                	 [ 限时7折 ]', '2268'),
(15, 'http://image.zoshow.com/upload/goods20170915/11762659/117626590001/g1_402_536.jpg', '女士Tiger虎头刺绣图案羊毛衫 \n	                	 [ 限时8.5折 ]', '4301'),
(16, 'http://image.zoshow.com/upload/goods20170914/11762351/117623510001/g1_402_536.jpg', '圆领格纹连衣裙 \n	                	 [ 限时7.5折 ]', '938'),
(17, 'http://image.zoshow.com/upload/goods20170914/11762363/117623630001/g1_402_536.jpg', 'V领连衣裙 \n	                	 [ 限时7.5折 ]', '1095'),
(18, 'http://image.zoshow.com/upload/goods20170915/11763564/117635640001/g1_402_536.jpg', '女士条纹套头针织衫 \n	                	 [ 限时8折 ]', '608'),
(19, 'http://image.zoshow.com/upload/goods20170915/11763567/117635670001/g1_402_536.jpg', '女士灯芯绒小脚休闲裤 \n	                	 [ 限时8折 ]', '1024'),
(20, 'http://image.zoshow.com/upload/goods20170925/11766544/117665440001/g1_402_536.jpg', 'Swallow燕子图案连衣裙 \n	                	 [ 限时9.5折 ]', '2755'),
(21, 'http://image.zoshow.com/upload/goods20170925/11766551/117665510001/g1_402_536.jpg', '女士Swallow燕子图案羊毛衫 \n	                	 [ 限时9.5折 ]', '4085'),
(41, 'http://image.zoshow.com/upload/goods20170727/11747286/117472860001/g1_402_536.jpg', '女士蕾丝真丝衬衫 \n	                	 [ 限时8折 ]', '2536'),
(43, 'http://image.zoshow.com/upload/goods20170626/11739161/117391610001/g1_402_536.jpg', '女士纯棉字符五分袖T恤 \n	                	 [ 限时8折 ]', '1760'),
(44, 'http://image.zoshow.com/upload/goods20170804/11749426/117494260001/g1_402_536.jpg', '女士格纹西装 \n	                	 [ 限时8折 ]', '3232'),
(46, 'http://image.zoshow.com/upload/goods20170926/11767251/117672510001/g1_402_536.jpg', '女士纯棉动物卫衣 \n	                	 [ 限时6.5折 ]', '3471'),
(47, 'http://image.zoshow.com/upload/goods20161201/11679571/116795710001/g1_402_536.jpg', '女士休闲皮夹克 \n	                	 [ 限时3.5折 ]', '1992'),
(48, 'http://image.zoshow.com/upload/goods20170614/11736863/117368630001/g1_402_536.jpg', '波点连衣裙 \n	                	 [ 限时9.5折 ]', '2841'),
(49, 'http://image.zoshow.com/upload/goods20170906/11758241/117582410001/g1_402_536.jpg', '女士丝绒荷叶边吊带衫 \n	                	 [ 限时9折 ]', '2637'),
(50, 'http://image.zoshow.com/upload/goods20170913/11760462/117604620001/g1_402_536.jpg', '褶皱拼色条纹连衣裙 \n	                	 [ 限时8.5折 ]', '2975'),
(52, 'http://image.zoshow.com/upload/goods20170727/11747288/117472880001/g1_402_536.jpg', '女士褶皱条纹纯棉衬衫 \n	                	 [ 限时9折 ]', '2556'),
(53, 'http://image.zoshow.com/upload/goods20170904/11757366/117573660001/g1_402_536.jpg', '女士字符羊毛衫 \n	                	 [ 限时7折 ]', '3689'),
(54, 'http://image.zoshow.com/upload/goods20170926/11767249/117672490001/g1_402_536.jpg', '泰迪熊羊毛针织连衣裙 \n	                	 [ 限时6折 ]', '4416'),
(55, 'http://image.zoshow.com/upload/goods20161130/11679276/116792760001/g1_402_536.jpg', '女士格纹棉卫衣 \n	                	 [ 限时9折 ]', '3087'),
(56, 'http://image.zoshow.com/upload/goods20170926/11767170/117671700001/g1_402_536.jpg', '女士双口袋宽松纯棉衬衫 \n	                	 [ 限时8折 ]', '3760'),
(58, 'http://image.zoshow.com/upload/goods20170728/11747538/117475380001/g1_402_536.jpg', '女士大波点衬衫 \n	                	 [ 限时9.5折 ]', '1017'),
(59, 'http://image.zoshow.com/upload/goods20170727/11747324/117473240001/g1_402_536.jpg', '女士拼色条纹连帽衫 \n	                	 [ 限时8折 ]', '1936'),
(60, 'http://image.zoshow.com/upload/goods20170914/73049794/730497940001/g1_402_536.jpg', '男士条纹十字架图案短款钱包 \n	                	 [ 限时9.5折 ]', '3373');

-- --------------------------------------------------------

--
-- 表的结构 `registor`
--

CREATE TABLE IF NOT EXISTS `registor` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(40) CHARACTER SET utf8 NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- 转存表中的数据 `registor`
--

INSERT INTO `registor` (`sid`, `name`, `password`) VALUES
(13, 'juzi', '81dc9bdb52d04dc20036dbd8313ed055'),
(14, 'xigua', '827ccb0eea8a706c4c34a16891f84e7b'),
(15, 'donggua', 'e10adc3949ba59abbe56e057f20f883e'),
(16, 'pingguo', 'fcea920f7412b5da7be0cf42b8c93759'),
(17, 'xiangjiao', '25d55ad283aa400af464c76d713c07ad'),
(18, 'pemo', '594193171872f188e6dc020c58eb48e5'),
(21, 'putao', '594193171872f188e6dc020c58eb48e5'),
(22, '123', '202cb962ac59075b964b07152d234b70');
