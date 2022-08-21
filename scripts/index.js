document.getElementById("view").style.display="none";

document.getElementById("viewbtn").addEventListener("click",function(){

    var one = document.getElementById("view").style.display="none";
    var two = document.getElementById("view").style.display="flex";
    if(one){
        document.getElementById("view").style.display="flex";
        document.getElementById("vbtn").innerHTML="View Less"; 
    }
    else{
        document.getElementById("view").style.display="none";
        document.getElementById("vbtn").innerHTML="View More";
    }

})

function loginpop(){
    alert("Successfully loggedin")
    document.getElementById("login_btn").innerHTML="LOGOUT";
    
}
