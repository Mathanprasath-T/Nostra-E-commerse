var productContaier=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContaier.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(var i=0;i<productlist.length;i=i+1){

        var productname=productlist[i].querySelector("h3").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }

        }
    


})
