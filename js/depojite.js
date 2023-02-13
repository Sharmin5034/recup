document.getElementById('Deposit').addEventListener('click', function(){

    const newDepojiteAmount = getInputFieldValueById('user-Deposit');

    const previousDepojitTotal = getElementvalueById('deposit-Total');
    const newDepojitTotal = previousDepojitTotal + newDepojiteAmount;
    setTexElementvalueById('deposit-Total', newDepojitTotal);

    const previouseBalenceTotal = getElementvalueById('total-Balance');
    const newBalenceTotal = previouseBalenceTotal + newDepojitTotal;
     setTexElementvalueById('total-Balance', newBalenceTotal);
    
})