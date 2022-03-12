function doit(){
   let a=document.getElementById("f1").value;
   let b=document.getElementById("f2").value;
   let show=document.getElementById("display");

  
   if (isNaN(a) || isNaN(b)){
    show.innerHTML= ("Hãy nhập vào số!")
}
else if (a == "" || b=="" ){
    show.innerHTML = ("a và b không được để trống")
}
else if (a == 0 ){
    show.innerHTML = ("Phương trình vô nghiệm!")
}
else if ( b == 0) {
    show.innerHTML = ("Phương trình vô số nghiệm ")
}
else{
    show.innerHTML ="nghiệm là:"+ -b/a
}
}