function countingUp() {
    document.getElementById("to100").innerHTML=window.cntr;
   if (window.cntr<100) {
       window.cntr++;
       setTimeout(function(){countingUp();},20);
   } else {
   }
 }
 window.cntr=0; 

