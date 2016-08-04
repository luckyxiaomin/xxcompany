// JavaScript Document
function sport(obj,prop,end,fn)
{
	clearInterval(obj.timer);
	
	var speed=0;
	var val=0;
	obj.timer=setInterval(function(){
    if(prop=='opacity')
	{
		val=Math.round(cssStyle(obj,prop)*100);		
	}
	else
	{
		val=cssStyle(obj,prop);
	}
	
	speed=(end-val)/10;
	
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	
	if(val==end)
	{
		
		clearInterval(obj.timer);	
	}
	else
	{
		//obj.style.width=obj.offsetWidth+speed+'px';
		if(prop=='opacity')
		{
			obj.style.filter='alpha(opacity:'+(val+speed)+')';  //IE浏览器
			obj.style.opacity=(val+speed)/100;
		}
		else
		{	
	    cssStyle(obj,prop,cssStyle(obj,prop)+speed);
		}
		
	 }

		},30);
	 		
}

function cssStyle(obj,prop,value)
{  
   //传递两个参数的时候的功能是获取该对象的属性值
   //传递三个参数的时候的功能是设置该对象的属性的值
   //arguments 就是保存传递参数的数组
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		{
			return parseFloat(obj.currentStyle[prop]);  // IE 浏览器的使用	
		}
		else
		{
			return parseFloat(getComputedStyle(obj,false)[prop]);  //FF  chrome 高版本的浏览器
		}
	}
	else
	{
		obj.style[prop]=value+'px';	
	}		
}