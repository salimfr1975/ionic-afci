window.onload=function(){
  
    var btn=document.querySelector("#btn");
    var txtnom = document.querySelector("#fnom").value;
    btn.onclick = function(){
      
        localStorage.setItem("nom",txtnom);
        
    }
}


