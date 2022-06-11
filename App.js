var operations=["+","-","*","/"];
var checkdot=false;
function input_number(e){
   var input=document.getElementById("kalkulator-input").value;
   var zero=["*","/","-","+"];
   if(zero.includes(e.value) && ( input=="" || input.charAt(input.length - 1)==".")){
      document.getElementById("kalkulator-input").value=input;
   }
   else if(operations.includes(input.slice(-1))&&operations.includes(e.value)){

   }
   else if(e.value=="."&& (input=="" ||operations.includes(input.charAt(input.length - 1)) )){
      document.getElementById("kalkulator-input").value=input+'0.';
      checkdot=true;
   }
   else if(e.value=="."&& input.charAt(input.length - 1)=="."){
      document.getElementById("kalkulator-input").value=input;
   }
   else if(e.value=="."&& checkdot){
      document.getElementById("kalkulator-input").value=input;
   }
   else{
      if(operations.includes(e.value)){
         checkdot=false;
      }
      else if(e.value=="."){
         checkdot=true;
      }
      document.getElementById("kalkulator-input").value=document.getElementById("kalkulator-input").value+e.value;
   }
   
}

function input_clear(e){
   if(e.value=="AC"){
      document.getElementById("kalkulator-input").value=null;
      number=null;
      checkdot=false;
   }
   else if(e.value=="del"){
      var del=document.getElementById("kalkulator-input").value;
      if(del.substring(0, del.length - 1)=="."){
         checkdot=false;
      }
      document.getElementById("kalkulator-input").value=del.substring(0, del.length - 1);

   }
}



var equal = document.getElementById("equal");
equal.addEventListener('click',function(e){
   var input=document.getElementById("kalkulator-input").value;
   var prev,next,total;
   if(input||operations.includes(input.slice(-1))){
      // console.log(input);
      var total=eval(input);
      document.getElementById("kalkulator-input").value=total
      checkdot=false;
   }
})