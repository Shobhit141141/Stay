var namec = document.getElementById("namecheck"); 
 var mailc = document.getElementById("emailcheck"); 
 var passwordc = document.getElementById("passwordcheck"); 
 var passwordd = document.getElementById("password"); 
 function validatename(){ 
     var name = document.querySelector("#username").value; 
     if(name.length==0){ 
         namec.innerHTML='<i class="fa-solid fa-xmark"></i>'; 
         namec.style.color="red"; 
         return false; 
     } 
     if(!name.match(/^[A-Za-z][A-Za-z0-9]*$/)){ 
         namec.innerHTML='<i class="fa-solid fa-xmark"></i>'; 
         namec.style.color="red"; 
         return false; 
     } 
     namec.innerHTML='<i class="fa-solid fa-check"></i>'; 
     namec.style.color="#00c04b"; 
      return true; 
 } 
 function validatemail(){ 
     var mail = document.querySelector("#mail").value; 
     if(mail.length==0){ 
         mailc.innerHTML='<i class="fa-solid fa-xmark"></i>'; 
         mailc.style.color="red"; 
         return false; 
     } 
     if(!mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){ 
         mailc.innerHTML='<i class="fa-solid fa-xmark"></i>'; 
         mailc.style.color="red"; 
         return false; 
     } 
     mailc.innerHTML='<i class="fa-solid fa-check"></i>'; 
     mailc.style.color="#00c04b"; 
      return true; 
 } 
 var a; 
 function pass(){ 
     if(a==1){ 
         document.getElementById("password").type="password"; 
         passwordc.innerHTML='<i class="fa-solid fa-eye"></i>'; 
         a=0; 
     } 
     else{ 
         document.getElementById("password").type="text"; 
         passwordc.innerHTML='<i class="fa-solid fa-eye-slash"></i>'; 
         a=1; 
     } 
  
 } 
  
 function validateform(event){ 
     if(!validatename() || !validatemail() || !passcheck()){ 
         event.preventDefault(); 
     } 
 } 
 function passcheck(){ 
  
     if(passwordd.value.length==0){ 
         passwordd.style.borderBottomColor="red"; 
         return false; 
     } 
     if(!passwordd.value.match(/^.{8,}$/)) {
         passwordd.style.borderBottomColor="red"; 
         return false; 
     }
     passwordd.style.borderBottomColor="#65fe08"; 
     return true; 
 }