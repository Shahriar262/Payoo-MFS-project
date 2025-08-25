const validPin = 1234

document.getElementById('btn-add-money').addEventListener('click', function(e){
 e.preventDefault();
 const bank = document.getElementById('bank').value;
 const accountNum = document.getElementById('bank-acc-num').value;
 const amount = parseInt(document.getElementById('bank-amount').value);
 const pinNum = parseInt(document.getElementById('pin-num').value);
 const availableBalance = parseInt(document.getElementById('available-balance').innerText);

 if(accountNum.length < 11){
    alert('Please provide valid account number');
    return;
 }

 if(pinNum !== validPin){
    alert('Please provide correct pin');
    return;
 }

 const totalNewBalance = amount + availableBalance;
 document.getElementById('available-balance').innerText = totalNewBalance;
});


// toggling feature

document.getElementById('add-btn').addEventListener('click', function(){
   document.getElementById('cash-out-parent').style.display = 'none';
   document.getElementById('add-money-parent').style.display = 'block';
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
   document.getElementById('add-money-parent').style.display = 'none';
   document.getElementById('cash-out-parent').style.display = 'block';
})