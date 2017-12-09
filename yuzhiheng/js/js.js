define(['jquery', 'cookie'], function($) {
	return {
		//滑过
		hover: (function() {
			$('.l-third').hover(function() {
				$('.select').show();
				$('.l-third').css('background', '#fff');
				$('.active').css('color', 'red')
			}, function() {
				$('.select').hide();
				$('.l-third').css('background', 'none')
				$('.l-third a').eq(0).css('color', '#d7d7d7');
			})
			$('.txt').on('blur', function() {
				$('#baidu').hide();
				$(this).val('')
			})
		})(),
		
		//下划线
		wire: (function() {
			$('.header-listnav li').hover(function() {
				$(this).css('border-bottom', '1px solid #fff').find('a').css({
					opacity: 0.8
				})
			}, function() {
				$(this).css('border-bottom', 'none').find('a').css('opacity', '1')
			})
		})(),
		bag: (function() {
			$('.nav ul li').hover(function() {
				$(this).css('background', '#fff').siblings('.li-list').show();
			}, function() {
				$(this).css('background', 'none').siblings('.li-list').hide();
			})
		})(),
		//获取图片以及轮播图
		image: (function() {
			$.ajax({
				url: "http://localhost/yuzhiheng/php/php.php",
				dataType: 'json',
			}).done(function(img) {
				var $html = '';
				for(var i = 0; i < img.length; i++) {
					$html += '<li><a href="#"><img src="' + img[i].url + '" /></a></li>';
				}
				$('.lunbo').find('ul').html($html);
				var $ul = $('.lunbo ul');
				var $firstClone = $('.lunbo ul li').first().clone();
				var $lastClone = $('.lunbo ul li').last().clone();
				$ul.append($firstClone);
				$ul.prepend($lastClone);
				var $uli = $('.lunbo ul li');
				var $oli = $('.lunbo ol li');
				var $left = $('.lunbo #left');
				var $right = $('.lunbo #right');
				var $width = $uli.first().width();
				var $index = 0;
				$ul.width($uli.length * $uli.width());
				var position = $ul.css('left', -$width + 'px');
				var $timer = null;
				//点击按钮切换图片
				$oli.on('click', function() {
					$index = $(this).index();
					$(this).addClass('active').siblings('li').removeClass('active');
					$ul.animate({
						left: -$width * ($index + 1)
					})
				})
				//tab按钮显示与隐藏
				$('.lunbo').hover(function() {
					clearInterval($timer)
					$left.show();
					$right.show()
				}, function() {
					$left.hide();
					$right.hide();
					clearInterval($timer)
					$timer = setInterval(function() {
						$right.click()
					}, 5000)
				})
				//tab切换
				$right.on('click', function() {
					$index++;
					if($index == $oli.length) {
						$ul.css('left', -$width + 'px')
						$index = 0;
						$oli.eq(0).addClass('active').siblings('li').removeClass('active')
					} else {
						$oli.eq($index).addClass('active').siblings('li').removeClass('active')
						$ul.stop(true, true).animate({
							left: -$width * ($index + 1)
						})
					}
				})
				$left.on('click', function() {
					$index--;
					if($index == -1) {
						$ul.css('left', -$width * $oli.length + 'px')
						$index = $oli.length - 1;
						$oli.eq($index).addClass('active').siblings('li').removeClass('active')
					} else {
						$oli.eq($index).addClass('active').siblings('li').removeClass('active')
						$ul.stop(true, true).animate({
							left: -$width * ($index + 1)
						});
					};
					//console.log($index)
				});
				$timer = setInterval(function() {
					$right.click()
				}, 2000)
			})
		})(),
		//图片向左移动
		mleft: (function() {
			$('.share a').hover(function() {
				$(this).css('margin-left', '40px')
			}, function() {
				$(this).css('margin-left', '50px')
			})
		})(),
		//图片放大
		bigger1: (function() {
			$('.pic-first a').hover(function() {
				$(this).find('img').stop(true, true).animate({
					width: 620,
					height: 320
				});
			}, function() {
				$(this).find('img').stop(true, true).animate({
					width: 600,
					height: 300
				});
			})
		})(),
		bigger2: (function() {
			$('.pic-third a').hover(function() {
				$(this).find('img').stop(true, true).animate({
					width: 620,
					height: 320
				});
			}, function() {
				$(this).find('img').stop(true, true).animate({
					width: 600,
					height: 300
				});
			})
		})(),
		//图片透明
		opacity: (function() {
			$('.clothes a').hover(function() {
				$(this).find('img').animate({
					opacity: 0.6
				})
			}, function() {
				$(this).find('img').animate({
					opacity: 1
				})
			});
			$('.shoes a').hover(function() {
				$(this).find('img').animate({
					opacity: 0.6
				})
			}, function() {
				$(this).find('img').animate({
					opacity: 1
				})
			});
			$('.found-car a').hover(function() {
				$(this).find('img').animate({
					opacity: 0.6
				})
			}, function() {
				$(this).find('img').animate({
					opacity: 1
				})
			})
		})(),
		//商品列表以及信息
		goodsListInfor: (function() {
			$.ajax({
				url: 'http://localhost/yuzhiheng/php/php1.php',
				dataType: 'json'
			}).done(function(data) {
				var $html = '';
				for(var i = 0; i < data.length; i++) {
					$html += '<li>' +
						'<img src="' + data[i].url + '">' +
						'<p>' + data[i].title + '</p>' +
						'<span>' + data[i].price + '</span>' +
						'</li>'
				}
				$('.goods-list').find('ul').html($html);
			})
		})(),
		//楼梯部分
		louti: (function() {
			var $li = $('.louti li');
			$(window).scroll(function() {
				var $y = $(window).scrollTop();
				if($y >= 130) {
					$('.louti').fadeIn(1000); //显示或者淡入效果
				} else {
					$('.louti').fadeOut(1000);
				};
				//4.触发滚轮使楼层与对应的nav值相匹配
				$li.each(function() {
					var $top = $('.stairs').eq($(this).index()).offset().top;
					if($top > $y) {
						$li.removeClass('active');
						$li.eq($(this).index()).addClass('active');
						return false; //满足一次循环就停止一次
					}
				})
			})
			//2.点击每个li获取对应的楼层top值并赋给body和html
			$li.on('click', function() {
				$(this).addClass('active').siblings().removeClass('active');
				var $index = $(this).index();
				var $top = $('.stairs').eq($index).offset().top
				$('html,body').animate({
					scrollTop: $top,
				});
			});
			//回到顶部
			$('a').on('click', function() {
				$('html,body').animate({
					scrollTop: 0,
				});
			})
		})(),
		//放大镜效果
		//小图：pic-small---小放：f-small---大图：pic-big---大放：f-big
		//比例pic-small/pic-big=f-small/f-big
		biggerPicture: (function() {
			var $scale = $('.pic-big').width() / $('.pic-small').width()
			//console.log($scale)
			var $width = parseInt($('.pic-small').width() * $('.f-big').width() / $('.pic-big').width());
			var $height = parseInt($('.pic-small').height() * $('.f-big').height() / $('.pic-big').height());
			//console.log($width,$height)
			$('.box .init').hover(function(e) {
				$('.f-small').width($width).height($height).show();
				$('.f-big').show();
				$(this).on('mousemove', function(e) {
					drag(e);
				})
			}, function(e) {
				$('.f-small').hide()
				$('.f-big').hide()
			})
			var $li = $('.ears-list').find('li');
			$li.each(function() {
				$(this).on('mousemove', function() {
					var $srcList = $(this).find('img').attr('src');
					$('.pic-small').attr('src', $srcList)
					$('.pic-big').attr('src', $srcList)
				})
			})
			var $index = ''
			$('#right').on('click', function() {
				$index++;
				var $tabPic = $li.eq($index).find('img').attr('src')
				if($index >= $li.length - 1) {
					$index = -1
				}
				$('.pic-small').attr('src', $tabPic)
			})
			$('#left').on('click', function() {
				$index--;
				var $tabPic = $li.eq($index).find('img').attr('src')
				if($index < 0) {
					$index = $li.length
				}
				$('.pic-small').attr('src', $tabPic)
			})
			//拖拽
			function drag(e) {
				var e = e || event;
				var $scroll = $(window).scrollTop()
				var $x = e.clientX - $('.init').offset().left - $('.f-small').width() / 2;
				var $y = e.clientY - $('.init').offset().top - $('.f-small').height() / 2 + $scroll;
				if($x < 0) {
					$x = 0
				} else if($x >= $('.init').width() - $('.f-small').width()) {
					$x = $('.init').width() - $('.f-small').width()
				}
				if($y < 0) {
					$y = 0
				} else if($y >= $('.init').height() - $('.f-small').height()) {
					$y = $('.init').height() - $('.f-small').height()
				}
				$('.f-small').css({
					left: $x,
					top: $y
				})
				$('.pic-big').css({
					left: -$x * $scale,
					top: -$y * $scale
				})
			}
		})(),
		//购物车效果
		//获取数据
		shopping: (function() {
			$.ajax({
				url: 'http://localhost/yuzhiheng/php/php1.php',
				dataType: 'json'
			}).done(function(data) {
				var $html = '';
				for(var i = 0; i < data.length; i++) {
					$html += '<li>' +
						'<img src="' + data[i].url + '" sid="' + data[i].sid + '">' +
						'<p>' + data[i].title + '</p>' +
						'<span>' + data[i].price + '</span>' +
						'<button class="btn">添加到购物车</button>' +
						'</li>'
				}
				$('.choose-goods').find('ul').html($html);
				//6.让存在cookie里面的商品显示出来
				if(getCookie('cartsid') && getCookie('cartnum')) {
					var $s = getCookie('cartsid').split(',')
					var $n = getCookie('cartnum').split(',')
					for(var i = 0; i < $s.length; i++) {
						craeteGoodsList($s[i], $n[i])
					}
					empty();
				}
			});
			//2.1将cookie里面的字符串--->数组
			var $arrsid = [];
			var $arrnum = [];

			function strToArr() {
				if(getCookie('cartsid')) {
					$arrsid = getCookie('cartsid').split(',')
				} else {
					$arrsid = []
				}
				if(getCookie('cartnum')) {
					$arrnum = getCookie('cartnum').split(',')
				} else {
					$arrnum = []
				}
			}
			//2.0点击按钮添加商品
			$('.choose-goods ul').on('click', '.btn', function() {
				//找到sid的值
				var $sid = $(this).parents('li').find('img').attr('sid');
				strToArr();
				//3.判断商品是否存在于cookie中
				if($.inArray($sid, $arrsid) != -1) {
					$('.myGoods:visible').each(function() {
						if($sid == $(this).find('img').attr('sid')) {
							var $num = $(this).find('.my-right .txt').val();
							$num++;
							$(this).find('.my-right .txt').val($num);
							var $price = $(this).find('.my-right b').html();
							$(this).find('.my-right .all').html($price * $num.toFixed(2))
							$arrnum[$.inArray($sid, $arrsid)] = $num;
							addCookie('cartnum', $arrnum.toString(), 7)
						}
					})
				} else {
					//4.创建商品列表且存入cookie
					$arrsid.push($sid);
					addCookie('cartsid', $arrsid.toString(), 7);
					$arrnum.push(1);
					addCookie('cartnum', $arrnum.toString(), 7)
					craeteGoodsList($sid, 1);
					empty();
				}
				$('#checkall').click(function() {
					$('.check').not('#checkall').prop('checked', $(this).prop('checked'));
				});
				//全选按钮
				var $inlength = $('.my-left').find('.check').not('#checkall').length;
				$('.check').not('#checkall').change(function() {
					if($('.check:checked').not('#checkall').size() == $inlength) {
						$('#checkall').prop('checked', true)
					} else {
						$('#checkall').prop('checked', false)
					}
				})
			});
			//5.封装：创建商品列表
			function craeteGoodsList(sid, num) {
				$.ajax({
					type: "get",
					url: "http://localhost/yuzhiheng/php/php1.php",
					dataType: 'json'
				}).done(function(data) {
					for(var i = 0; i < data.length; i++) {
						if(data[i].sid == sid) {
							var $clone = $('.myGoods:hidden').clone(true);
							$clone.css('display', 'block');
							$clone.find('.my-left img').attr({
								src: data[i].url,
								sid: data[i].sid
							})
							$clone.find('.my-right b').html(data[i].price);
							$clone.find('.my-right .all').html(data[i].price);
							$clone.find('.my-right .txt').val(num)
							$clone.find('.my-left .name').html(data[i].title);
							$('.have-no').append($clone);
						}
					}
				})
			} //结束
			7. //有了商品时，头部就消失，反之出现
			function empty() {
				if(getCookie('cartsid')) {
					$('.hid').hide();
				} else {
					$('hid').show()
				}
			}
			//删除cookie的函数
			function delgoodslist(sid, sidarr) { //sid：当前的sid，sidarr:cookie的sid的值
				var index = -1;
				for(var i = 0; i < sidarr.length; i++) {
					if(sid == sidarr[i]) {
						index = i;
					}
				}
				$arrsid.splice(index, 1); //删除数组对应的值
				$arrnum.splice(index, 1); //删除数组对应的值
				addCookie('cartsid', sidarr.toString(), 7); //添加cookie
				addCookie('cartnum', numarr.toString(), 7);
			}
			//删除单个商品列表			
			$('.myGoods .my-right').on('click', '.dele a', function() {
				//console.log($(this).parents('.myGoods').find('img').attr('sid'))
				strToArr() //转数组
				$(this).parents('.myGoods').remove();
				delgoodslist($(this).parents('.myGoods').find('img').attr('sid'), $arrsid)
			})
		})(),
		//表单注册		
		registor: (function() {
			var $username = $('.username');
			var $span = $('.span-1');
			var $spanTwo = $('.span-2');
			var $form = $('form');
			var $password = $('.password');
			var $stop = true;
			$username.on('blur', function() {
				var $value = $(this).val();
				console.log($value)
				var $reg = /\w{3,15}/
				if($value != '') {
					if($reg.test($value)) {
						$.ajax({
							type: 'post',
							url: 'php/php2.php',
							data: {
								name: $value
							}
						}).done(function(d) {
							if(d) {
								$span.html('用户名已存在!');
								$span.css('color', 'red')
								$stop = true;
							} else {
								$span.html('√');
								$span.css('color', 'green')
								$stop = false;
							}
						})
					} else {
						$span.html('格式不正确!');
						$span.css('color', 'red')
						$stop = true;
					}
				} else {
					$span.html('用户名不能为空!')
					$span.css('color', 'red')
					$stop = true;
				}
			})
			$password.on('blur', function() {
				var $passvalue = $(this).val();
				var $regTwo = /\w{3,}/
				//console.log($passvalue)
				if($passvalue != '') {
					if($regTwo.test($passvalue)) {
						$spanTwo.html('√');
						$spanTwo.css('color', 'green');
					} else {
						$spanTwo.html('格式不正确!');
						$spanTwo.css('color', 'red');
						$stop = true;
					}
				} else {
					$spanTwo.html('密码不能为空!')
					$spanTwo.css('color', 'red');
					$stop = true;;
				}
			})

			//验证码部分
			var $spanThree = $('.s-code');
			var $str = '';
			for(var i = 1; i <= 4; i++) {
				var $num = parseInt(Math.random() * 130);
				if($num >= 48 && $num <= 57 || $num >= 97 && $num <= 122 || $num >= 65 && $num <= 90) {
					$str = $str.concat(String.fromCharCode($num))
				} else {
					i--;
				}
			}
			$spanThree.html($str)
			//console.log($spanThree.html())
			$('.code').on('blur', function() {
				var $codevalue = $(this).val();
				var $mathvalue = $('.s-code').html();
				if($codevalue != '') {
					if($codevalue == $mathvalue) {
						$('.in').html('√')
						$('.in').css('color', 'green')
					} else {
						$('.in').html('验证码不正确!')
						$('.in').css('color', 'red');
						$stop = true;
					}
				} else {
					$('.in').html('验证码不能为空!')
					$('.in').css('color', 'red');
					$stop = true;
				}
			})

			$form.on('submit', function() {
				if($username.val() == '') {
					$span.html('用户名不能为空!')
					$span.css('color', 'red')
				}
				if($password.val() == '') {
					$spanTwo.html('请设置密码!')
					$spanTwo.css('color', 'red')
				}
				if($('.code').val() == '') {
					$('.in').html('请输入验证码!')
					$('.in').css('color', 'red')
				}
				if($stop) {
					return false;
				}
			})
		})(),

		//用户登录
		login: (function() {
			var $valueError = $('#valueError')
			var $btn = $('#l-login');
			var $value1 = $('#username');
			var $value2 = $('#password');
			$btn.on('click', function() {
				//console.log($value1.val(), $value2.val())
				if($value1.val() != "" && $value2.val() != "") {
					$.ajax({
						type: 'post',
						url: 'php/php3.php',
						data: {
							name: $value1.val(),
							pass: $value2.val()
						}
					}).done(function(data) {
						if(!data) {
							$valueError.html('用户名或者密码错误！')
							$valueError.css('color', 'red');
							$value2.val('');
						} else {
							$(location).attr('href', 'index.html')
							addCookie('customer', $value1.val(), 7)
						}
					})
				} else {
					$valueError.html('用户名或者密码不能为空！');
					$valueError.css('color', 'red')
				}
			})
		})(),
		//登录成功
		success: (function() {
			if(getCookie('customer')) {
				$('.customer').show();
				$('.l-first').find('.change').html('您好，' + getCookie('customer') + '欢迎登录').attr('href', '').css('color','#fff')
			}
		})(),
		//退出登录
		out: (function() {
			$('.customer').on('click', function() {
				$(this).hide();
				delCookie('customer')
			})
		})(),
		//懒加载部分
		lazyload: (function() {
			var lazyLoad = (function() {
				var clock;

				function init() {
					$(window).on("scroll", function() {
						if(clock) {
							clearTimeout(clock);
						}
						clock = setTimeout(function() {
							checkShow();
						}, 200);
					})
					checkShow();
				}

				function checkShow() {
					$(".lazyload img").each(function() {
						var $cur = $(this);
						if($cur.attr('isLoaded')) {
							return;
						}
						if(shouldShow($cur)) {
							showImg($cur);
						}
					})
				}

				function shouldShow($node) {
					var scrollH = $(window).scrollTop(),
						winH = $(window).height(),
						top = $node.offset().top;
					if(top < winH + scrollH) {
						return true;
					} else {
						return false;
					}
				}

				function showImg($node) {
					$node.attr('src', $node.attr('data-img'));
					$node.attr('isLoaded', true);
				}
				return {
					init: init
				}
			})()
			lazyLoad.init();
		})(),
	}
})