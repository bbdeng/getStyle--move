//创建一个执行简单动画的函数
			//obj定义需要执行动画的对象
			//attr要执行动画的样式,比如:height top let width
			//target为元素需要移动的位置
			//speed动画移动的速度 填写正值即可
			
			function move(obj,attr,target,speed,callback){
				
					//每次单击触发动画都关闭一次计时器，不让计时器重叠加速
					clearInterval(obj.timer);
					//通过原始元素的位置和目标位置相比较，判断出speed的值是正值还是负值
					//如果原始的位置在目标位置的左侧，这speed应该为正值不进行改变；反则speed应该变成负值
					var current=parseInt(getStyle(obj,attr));
					if (current>target){
						speed = -speed;
					};
					//开启定时器来执行动画效果
					//取消掉全局定义变量timer，将定时器变成obj的属性保存，解决各元素定时器冲突问题
					obj.timer=setInterval(function(){
						//获取box的原来的left值
						var oldValue=parseInt(getStyle(obj,attr));
						//修改后的left新值
						var newValue=oldValue+speed;
						
						if(speed>0&&newValue>target ||speed<0 && newValue<target){
							newValue=target;
						};
						
						obj.style[attr]=newValue+"px";
						
						//当元素移动到800px的时候让他停止
						if(newValue==target){
							clearInterval(obj.timer);
							//在动画执行结束后来个回调函数，改变后续的动画效果
							callback && callback();
						};
						
					
					},30);
				
					
				
			};
			