var typed=new Typed(".text",{
    strings:['Python Developer','Frontend developer','web developer','Backend Developer'],
    typespeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
});
function sendwhatsup(){
    var phonenumber = "+8074523835";

    var name = document.querySelector('.name').value;
    var email= document.querySelector('.email').value;
    var subject= document.querySelector('.subject').value;
    var message= document.querySelector('.message').value;
    
    var url="https://whatsapp.com/dl/" + phonenumber +"?text="
      +"*Name :* "+name+"%0a"
      +"*Enter your Email  :* "+email+"%0a"
      +"*Enter your subject  :* "+subject+"%0a"
      +"*Enter your message :* "+message+"%0a"
      window.open(url,target='_blank').focus();
    

}
function myFunction() {
    alert("message successfully sent").then(response => {
      window.location.href = '#home';
    })
  }