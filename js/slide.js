   // var img = document.getElementsByTagName('li');











    var box = document.getElementById('box');
	var warp = document.getElementById('warp');
	var li = warp.getElementsByTagName('li');
	var btnclass = document.getElementsByClassName('spanlist');
	var btnul = document.getElementById('btn-ul');
	var btnli = btnul.getElementsByTagName('li');
	var spanleft = document.getElementById('left');
	var spanright = document.getElementById('right');
	console.log(btnli);
	console.log(btnclass);
	var i = 0;
	var time;
      
   


	function demo(){
	    time = setInterval(function(){
		go(i);
		i++;
		addclass(i);

		if(i>5){
		     goback();
		     i = 0;
		}
	    },6000)
       //  spanright.onclick = function(){//向右走

       //  	if(i == 5){
       //  		btnli[5].setAttribute('class','');
       //  		i = 0;
       //  	}
       //  	go(i);
       //  	i++;
       //    btnli[i].setAttribute('class','spanlist');
       //    btnli[i-1].setAttribute('class','')


       //  }
       //  spanleft.onclick = function(){//向左走
       //  	if(i == 0){
       //  		i = 5;
       //  	}
       //  	if(li[i+1].style.display == '')
       //  	{
       //  		li[i-1].style.display = 'block';
       //  		goback(i);
        		
       //  	}
       //  	if(li[i+1].style.display == 'block'){
       //  		li[i-1].style.display = 'block';
       //  		goback(i);
       //  	}
        	
           

	      // }
	}
demo();


    function go(i){
		li[i].style.display = 'none';

	}
	function goback(){
		for(var i = 0;i<=5;i++){
			li[i].style.display = 'block';
		}
		btnli[0].setAttribute('class','spanlist');
	}
// 	start();
   function addclass(i){
   	console.log(i);
   	if(i<=5){
          btnli[i].setAttribute('class','spanlist');
          
          btnli[i-1].setAttribute('class','')
      }else{
      	
      	btnli[5].setAttribute('class','')
      }
      
   }
   
box.onmouseover = function(){
	clearInterval(time);
}

box.onmouseout = function(){
	demo();
}
