// JavaScript Document
function lunbo(obj1,obj2,obj3,count,m)
{
	var timer=null;

for(var i=0;i<obj1.length;i++)
	{
	 obj1[i].index=i;
	 obj1[i].onclick=function()
	 {
		 for(var i=0;i<obj1.length;i++)
		 {
		    obj1[i].className="";	 
		 }
		 count=m=this.index;
		 obj1[this.index].className="active";
		 sport(obj2,'left',-this.index*cssStyle(obj3[0],'width'));
	 };	
	}
	cssStyle(obj2,'left',cssStyle(obj3[0],'width')*obj3.length);
	timer=setInterval(function(){
		if(count<obj3.length)
		{
		for(var i=0;i<obj1.length;i++)
		{
		  obj1[i].className="";
		}
		  obj1[count].className="active";
		 sport(obj2,'left',-count*cssStyle(obj3[0],'width'));
		 count++;
		 m++;
		 
		}else
		{
			if(m>0)
			{ 	
			   m--;
			  for(var i=0;i<obj1.length;i++)
		     {
		      obj1[i].className="";
		     }
		      obj1[m].className="active";
			  sport(obj2,'left',-m*cssStyle(obj3[0],'width'));
				
			}
			else
			{
			 m=4;
			 count=1;	
			}
		}
	},2000)
	
}