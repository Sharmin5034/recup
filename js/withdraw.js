document.getElementById('btn-Withdrow').addEventListener('click', function(){

    const newWithdrawAount = getInputFieldValueById('user-Withdrow');

   const previouseWithdrawTotal =getElementvalueById('Withdrow-Total');
   const newWithdrawTotalAmount = previouseWithdrawTotal + newWithdrawAount;
   setTexElementvalueById('Withdrow-Total', newWithdrawTotalAmount);
    
   const previouseBalenceTotal = getElementvalueById('total-Balance');
   const balenceTotalElement = previouseBalenceTotal-newWithdrawTotalAmount;
   setTexElementvalueById('total-Balance', balenceTotalElement)
})