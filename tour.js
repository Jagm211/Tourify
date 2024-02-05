let login = document.getElementById("login");
let loginBtn = document.getElementById("loginBtn");
let bar = document.getElementById("bar");
let card = document.querySelectorAll(".card");

login.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active");
})

loginBtn.addEventListener("click", function(){
    
    let email = document.getElementById("email");
    let password = document.getElementById("pass");

    if(email.value == ""&& password.value == ""){
        alert("Please Enter Details")
    }else{
        alert("You successfully logged In")
    }
})

bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
})

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        window.open("https://paytm.com/", "_blank")
    })
})