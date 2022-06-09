function input_number(e){
   var input=document.getElementById("kalkulator-input").value;
   if(input=="" && (e.value=="/" || e.value=="*" || e.value=="-" || e.value=="+"|| e.value=="%")){

   }
   else if(input=="" && e.value=="."){
      document.getElementById("kalkulator-input").value="0."
   }
   else if(e.value=="."&& input.charAt(input.length - 1)=="."){

   }
   else{
      document.getElementById("kalkulator-input").value=document.getElementById("kalkulator-input").value+e.value;
   }
   
}

function input_clear(e){
   if(e.value=="AC"){
      document.getElementById("kalkulator-input").value=null;
   }
   else if(e.value=="del"){
      var del=document.getElementById("kalkulator-input").value;
      document.getElementById("kalkulator-input").value=del.substring(0, del.length - 1);
   }
}

var equal = document.getElementById("equal");
equal.addEventListener('click',function(e){
   var input=document.getElementById("kalkulator-input").value;
   var total=eval(input);
   document.getElementById("kalkulator-input").value=total
})