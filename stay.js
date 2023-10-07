  var nav=document.querySelector("#nav"); 
  var button=document.getElementById('but');  
  var toggle=document.getElementById('ball');  
  var tog=document.getElementById('toggle');  
  var body=document.querySelector("body");
  var home=document.querySelector("#home");
  var line=document.getElementById('line'); 
  button.onclick=function (){  
  
      if(toggle.className=='open')  
      {  
          toggle.className="";  
  
  
      }else{  
          toggle.className="open";  
  
      }  
      if(tog.className=='open')  
      {  
          tog.className="";  
  
  
      }else{  
          tog.className="open";  
  
      }  
  
      if(body.className=='open')  
      {  
          body.className="";  
  
  
      }else{  
          body.className="open";  
  
      }  
  
      if(nav.className=='open')  
      {  
          nav.className="";  
  
  
      }else{  
          nav.className="open";  
  
      }  
      if(line.className=='open')  
      {  
          line.className="";  
  
  
      }else{  
          line.className="open";  
  
      }
  
  };
 home.onclick=function(){
     window.scrollTo(0,0);
 }
