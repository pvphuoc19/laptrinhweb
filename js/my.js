//alert("DCT19A")

console.log("Day la consloe log");

var xname = prompt("ten ban la gi: ");
console.log("Xin chao: "+ xname);

function test(){
    var ns=document.getElementById("namsinh");
    var t=document.getElementById("tuoi");
    var current= new Date().getFullYear();
    var x=document.getElementById("an");
   

   
    if(ns.value > current){
     (x.style.display='block');//show
    }
    else{
        (x.style.display='none');//hidden
        t.value = (current - ns.value) ;

    }
    
}
var trangthaitrc=0;
function battat(){
var s=document.getElementById("t1");
var t=document.getElementById("t2");
var bt=document.getElementById("BvT");

if(trangthaitrc==0){
    trangthaitrc = 1;
    bt.innerText =" tat";
    t.style.display='none';
    s.style.display='block';
}else 
{
    
    trangthaitrc = 0;
    bt.innerText ="bat";
    s.style.display='none';
    t.style.display='block'

}
}