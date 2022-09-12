
const myButton = document.getElementsByClassName('selected');
let count = 0;
for(let btn of myButton){
    btn.addEventListener('click',function(event){
        count++;
        if(count <= 5){
        const name = event.target.parentNode.children[0].innerText;
        const mainContainer = document.getElementById('right');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `
        <td>${count + "."}</td>
        <td>${name}</td>

        `;
        mainContainer.appendChild(tableContainer);
        }
        else{
            alert('invalid player')
        }
    });
};




document.getElementById('calculate-btn').addEventListener('click',function(){
    const inputFieldValue = document.getElementById('input-field');
    const newInputFieldValueString = inputFieldValue.value;
    const newInputFieldValue = parseFloat(newInputFieldValueString);


    const expenseAmount = document.getElementById('expense');
    const newExpenseAmountString = expenseAmount.innerText;
    const newExpenseAmount = parseFloat(newExpenseAmountString);
    const totalExpense = count * newInputFieldValue;
    expenseAmount.innerText = totalExpense;


    
    // document.getElementById('total-btn').addEventListener('click',function(){
        
    //     const newInputAmount = getInputFieldById('input-manager');
    //     // console.log(inputManager);
    
       
    //     // console.log(inputCoach);
    //     const newDepositAmount = getElementValueById('input-coach');
    //     const totalPrice = newInputAmount + newDepositAmount + totalExpense;
    //     // console.log(totalPrice);
    
    //     const priceValue = document.getElementById('price-value');
    //     const newPriceValueString = priceValue.innerText;
    //     const newPriceValue = parseFloat(newPriceValueString);
    //     const newPrice = newPriceValue + totalPrice;
    //     priceValue.innerText = newPrice;
    
       
    
        
    // });
});





