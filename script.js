
var primeiro=0;
var lastcommand;
function escrever(valor)
{
    window.document.tela.screen.value=window.document.tela.screen.value+valor;
}
function salvavalor(nome)
{
   if(primeiro==0)
   {
      primeiro=window.document.tela.screen.value;
      window.document.tela.screen.value="";
      lastcommand=nome;
   }
   else
   {
      switch(lastcommand)
      {
      case '+':
         window.document.tela.screen.value=eval(primeiro+'+'+window.document.tela.screen.value);
         primeiro=window.document.tela.screen.value;
         return primeiro;
         break;
      case '-':
         window.document.tela.screen.value=primeiro-window.document.tela.screen.value;
         primeiro=window.document.tela.screen.value;
         return primeiro;
         break;
      case '/':
         window.document.tela.screen.value=(primeiro)/(window.document.tela.screen.value);
         primeiro=window.document.tela.screen.value;
         return primeiro;   
         break;
      case '*':
         window.document.tela.screen.value=primeiro*window.document.tela.screen.value;
         primeiro=window.document.tela.screen.value; 
         return primeiro;      
         break;
      }
   }
}

























/*
function esc1(){
    let n1 = document.getElementById('key_1').value = 1;
    document.getElementById('text_box').value = n1;
    console.log(n1); 
    
}
function esc2(){
    let n2 = document.getElementById('key_2').value = 2;
    document.getElementById('text_box').value = n2;
    console.log(n2); 
    
}
function esc3(){
    let n3 = document.getElementById('key_3').value = 3;
    document.getElementById('text_box').value = n3;
    console.log(n3);
}
function esc4(){
    let n4 = document.getElementById('key_4').value = 4;
    document.getElementById('text_box').value = n4;
    console.log(n4);
}
function esc5(){
    let n5 = document.getElementById('key_5').value = 5;
    document.getElementById('text_box').value = n5;
    console.log(n5);
}
function esc6(){
    let n6 = document.getElementById('key_6').value = 6;
    document.getElementById('text_box').value = n6;
    console.log(n6);
}
function esc7(){
    let n7 = document.getElementById('key_7').value = 7;
    document.getElementById('text_box').value = n7;
    console.log(n7);
}
function esc8(){
    let n8 = document.getElementById('key_8').value = 8;
    document.getElementById('text_box').value = n8;
    console.log(n8); 
}
function esc9(){
    let n9 = document.getElementById('key_9').value = 9;
    document.getElementById('text_box').value = n9;
    console.log(n9); 
}
function esc0(){
    let n0 = document.getElementById('key_0').value = 0;
    document.getElementById('text_box').value = n0;
    console.log(n0); 
}
function esc_ded(){
    let nded = document.getElementById('key_ded').value = "-";
    document.getElementById('text_box').value = nded;
    console.log(nded); 
}
function esc_add(){
    let nadd = document.getElementById('key_add').value = "+";
    document.getElementById('text_box').value = nadd;
    console.log(nadd); 
}
function esc_divd(){
    let ndivd = document.getElementById('key_divd').value = "/";
    document.getElementById('text_box').value = ndivd;
    console.log(ndivd); 
}
function esc_mult(){
    let nmult = document.getElementById('key_mult').value = "*";
    document.getElementById('text_box').value = nmult;
    console.log(nmult); 
}
function cls(){
  console.clear();
} 

function esc_equl(){
    let nequl = document.getElementById('key_equl').value = "=";
    document.getElementById('text_box').value = nequl;
    console.log(nequl); 
}
*/




/*
let n1 = document.getElementById('text_box').value = n1;
let n2 = document.getElementById('text_box').value = n2;
let n3 = document.getElementById('text_box').value = n3;
let n4 = document.getElementById('text_box').value = n4;
let n5 = document.getElementById('text_box').value = n5;
let n6 = document.getElementById('text_box').value = n6;
let n7 = document.getElementById('text_box').value = n7;
let n8 = document.getElementById('text_box').value = n8;
let n9 = document.getElementById('text_box').value = n9;
let n0 = document.getElementById('text_box').value = n0;
let nded = document.getElementById('text_box').value = nded;
let nadd = document.getElementById('text_box').value = nadd;
let ndivd = document.getElementById('text_box').value = ndivd;
let nmult = document.getElementById('text_box').value = nmult;
let nequl = document.getElementById('text_box').value = nequl;
let n = document.getElementById('text_box').value = " ";
let n1 = document.getElementById('key_1').value = "1";



let n1 = document.getElementById('key_1').value = 1";
document.getElementById('text_box').value = n1;

let n2 = document.getElementById('key_2').value = "2";
document.getElementById('text_box').value = n2;

let n3 = document.getElementById('key_3').value = "3";
document.getElementById('text_box').value = n3;

let n4 = document.getElementById('key_4').value = "4";
document.getElementById('text_box').value = n4;

let n5 = document.getElementById('key_5').value = "5";
document.getElementById('text_box').value = n5;

let n6 = document.getElementById('key_6').value = "6";
document.getElementById('text_box').value = n6;

let n7 = document.getElementById('key_7').value = "7";
document.getElementById('text_box').value = n7;

let n8 = document.getElementById('key_8').value = "8";
document.getElementById('text_box').value = n8;

let n9 = document.getElementById('key_9').value = "9";
document.getElementById('text_box').value = n9;

let n0 = document.getElementById('key_0').value = "0";
document.getElementById('text_box').value = n0;
let nded = document.getElementById('key_ded').value = "-";
document.getElementById('text_box').value = nded;;
    
let nadd = document.getElementById('key_add').value = "+";
document.getElementById('text_box').value = nadd;
    
let ndivd = document.getElementById('key_divd').value = "/"
document.getElementById('text_box').value = ndivd;
    
let nmult = document.getElementById('key_mult').value = "*";
document.getElementById('text_box').value = nmult;
    
let nequl = document.getElementById('key_equl').value = "=";
document.getElementById('text_box').value = nequl;
 


function esc(){
    let n = document.getElementsByClassName('key').value;
    
    switch (n) {
        case 1:
          document.getElementById('text_box').value = 1 ;
            break;
        case 2:
          document.getElementById('text_box').value = 2 ;
            break;
        case 3:
            document.getElementById('text_box').value = 3 ;
                break;
    
       
    }
}
*/