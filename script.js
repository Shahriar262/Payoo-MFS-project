//login button functionality

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNum = 12345678910;
    const pinNum = 1234;
    const mobileNumValue = document.getElementById('mobile-num').value;
    const mobileNumValueConverted = parseInt(mobileNumValue);

    const pinNumValue = document.getElementById('pin-num').value;
    const pinNumValueConverted = parseInt(pinNumValue)
   
    if(mobileNumValueConverted === mobileNum && pinNumValueConverted === pinNum){
        window.location.href="./home.html";
        
    }
    else{
        alert('Invalid credentials');
        
    }
    
})