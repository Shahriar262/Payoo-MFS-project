const validPin = 1234

//function to get input values
function getInputValueNum(id){
    const value = document.getElementById(id).value.trim();
    const num = parseInt(value);

    if(isNaN(num) || num.toString() !== value){
        return NaN; 
    }
    return num;
}

//get inner text function call
  function getInnerText(id){
    return parseInt(document.getElementById('available-balance').innerText);
  }

// add-money feature
document.getElementById('btn-add-money').addEventListener('click', function(e){
 e.preventDefault();
 const bank = document.getElementById('bank').value;
 const accountNum = document.getElementById('bank-acc-num').value;
 const amount = getInputValueNum('bank-amount');
 const pinNum = getInputValueNum('pin-num');
 const availableBalance = getInnerText('available-balance');

 if(accountNum.length < 11){
    alert('Please provide valid account number');
    return;
 }

 if(pinNum !== validPin){
    alert('Please provide correct pin');
    return;
 }

 if(isNaN(amount) || amount <= 0){
   alert('Please enter a valid amount');
   return;
}

 const totalNewBalance = amount + availableBalance;
 document.getElementById('available-balance').innerText = totalNewBalance;
});

// cash out feature
const cashOutPin = 1234

document.getElementById('btn-withdraw-money').addEventListener('click', function(e){
   e.preventDefault();
   const agentNum = document.getElementById('agent-num').value;
   const withdrawAmount = getInputValueNum('withdraw-amount');
   const cashOutPinNum = getInputValueNum('cash-out-pin');
   const availableBalance = getInnerText('available-balance');

   if(agentNum.length < 11){
      alert('Please provide valid Agent Number')
      return;
   }

   if(cashOutPinNum !== cashOutPin){
      alert('Please provide correct pin')
      return;
   }

   if(isNaN(withdrawAmount) || withdrawAmount <= 0){
   alert('Please enter a valid Withdraw amount');
   return;
}

if(withdrawAmount > availableBalance){
   alert('Insufficient balance');
   return;
}

   const newBalance = availableBalance - withdrawAmount;
   document.getElementById('available-balance').innerText = newBalance;
})

//transfer feature
const transferPin = 1234

document.getElementById('btn-send-money').addEventListener('click', function(e){
   e.preventDefault();
   const userAccNum = document.getElementById('user-acc').value;
   const transferAmount = getInputValueNum('transfer-amount');
   const transferPinNum = getInputValueNum('transfer-pin');
   const availableBalance = getInnerText('available-balance');

   if(userAccNum.length < 11){
      alert('Please provide valid User Account Number')
      return;
   }

   if(transferPinNum !== transferPin){
      alert('Please provide correct pin')
      return;
   }

   if(isNaN(transferAmount) || transferAmount <= 0){
   alert('Please enter a valid Transfer amount');
   return;
}

if(transferAmount > availableBalance){
   alert('Insufficient balance');
   return;
}

   const newBalance = availableBalance - transferAmount;
   document.getElementById('available-balance').innerText = newBalance;
})

//get bonus feature
document.getElementById('btn-get-bonus').addEventListener('click', function(e){
   e.preventDefault();
   const bonusAmount = getInputValueNum('bonus-coupon');
   const availableBalance = getInnerText('available-balance');
    const totalNewBonus = bonusAmount + availableBalance;
 document.getElementById('available-balance').innerText = totalNewBonus;

})
// toggling feature

document.getElementById('add-btn').addEventListener('click', function(){
   document.getElementById('cash-out-parent').style.display = 'none';
   document.getElementById('transfer-parent').style.display = 'none';
   document.getElementById('get-bonus-parent').style.display = 'none';
   document.getElementById('add-money-parent').style.display = 'block';
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
   document.getElementById('add-money-parent').style.display = 'none';
   document.getElementById('transfer-parent').style.display = 'none';
   document.getElementById('get-bonus-parent').style.display = 'none';
   document.getElementById('cash-out-parent').style.display = 'block';
})
document.getElementById('transfer-btn').addEventListener('click', function(){
   document.getElementById('add-money-parent').style.display = 'none';
   document.getElementById('cash-out-parent').style.display = 'none';
   document.getElementById('get-bonus-parent').style.display = 'none';
   document.getElementById('transfer-parent').style.display = 'block';
})
document.getElementById('bonus-btn').addEventListener('click', function(){
   document.getElementById('add-money-parent').style.display = 'none';
   document.getElementById('cash-out-parent').style.display = 'none';
   document.getElementById('transfer-parent').style.display = 'none';
   document.getElementById('get-bonus-parent').style.display = 'block';
})