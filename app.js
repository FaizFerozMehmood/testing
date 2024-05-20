var username = document.getElementById("username")
var gmail = document.getElementById("gmail")
var btn = document.getElementById("btn")

// var result = username,gmail
btn.addEventListener("click",function(){
    // console.log(result.value);
    alert("Dear"+" " +username.value+" "+ gmail.value+" ,"+ "Thank you for providing your credentials!");
})