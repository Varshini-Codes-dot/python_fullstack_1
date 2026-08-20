let registerForm = document.getElementById("registerForm")
if (registerForm){
     registerForm.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let date=document.getElementById("date").value;
        let male=document.getElementById("male").value;
        let female=document.getElementById("female").value;
        let course=document.querySelector('input[name="course"]:checked').value;
        let gender=" ";
        if(male){
      gender="male";
        }
      else if(female){
         gender="female";
      }
      if(name == ""|| email == "" || password == "" ||gender ==""|| date == ""||gender =="" ||course ==""){
         alert("please fill all the fields");
      }else{
         alert("Registration successful");
      }
     }
    )
}
let loginForm = document.getElementById("loginForm")
if (loginForm){
     loginForm.addEventListener("submit",function(event){
        event.preventDefault();
        console.log(event);
        let email=document.getElementById("loginEmail").value;
        let password=document.getElementById("loginPassword").value;
if(email == "" || password == "" ||){
         alert("please fill all the fields");
      }else{
         alert("Login successful");
      }
     }
    )