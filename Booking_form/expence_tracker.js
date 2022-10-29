var filled=document.getElementById("submit");
var eAmount=document.getElementById("amount");
var eDisc=document.getElementById("expense-type");
var eCat=document.getElementById("expense-cat");
var expList=document.getElementById("exp-list");

filled.addEventListener('click',onAdd);

expList.addEventListener('click', removeExpense);
expList.addEventListener('click', editExpDetails);
    

for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.getItem(localStorage.key(i)));
    var li = document.createElement('li');
    li.className='expenseDet';
    li.innerHTML=localStorage.getItem(localStorage.key(i));
    var deleteExpense=document.createElement('button');
    deleteExpense.className='dlt';
    deleteExpense.textContent='Delete Expense';
    deleteExpense.style.border='solid 2px red';


    var editExpense=document.createElement('button');
    editExpense.className='edt';
    editExpense.textContent='Edit Expense';
    editExpense.style.border='solid 2px green';
    li.appendChild(deleteExpense);
    li.appendChild(editExpense);
    expList.appendChild(li);
}





function onAdd(e){
    e.preventDefault();
    var li = document.createElement('li');
    li.className='expenseDet';
    li.innerHTML=`${eAmount.value} ${eDisc.value} ${eCat.value} `;    
    var deleteExpense=document.createElement('button');
    deleteExpense.className='dlt';
    deleteExpense.textContent='Delete Expense';
    deleteExpense.style.border='solid 2px red';


    var editExpense=document.createElement('button');
    editExpense.className='edt';
    editExpense.textContent='Edit Expense';
    editExpense.style.border='solid 2px green';
    li.appendChild(deleteExpense);
    li.appendChild(editExpense);

    localStorage.setItem(eDisc.value,`${eAmount.value} ${eDisc.value} ${eCat.value} `);

    expList.appendChild(li);
}


function removeExpense(e){
    e.preventDefault();
    if(e.target.classList.contains('dlt')){
        var li = e.target.parentElement
        localStorage.removeItem(li.innerHTML.split(' ')[1]);
        expList.removeChild(li);
    }
}


function editExpDetails(e){
    e.preventDefault();
    if(e.target.classList.contains('edt')){
        var li = e.target.parentElement
        eAmount.value=li.innerHTML.split(' ')[0]
        eDisc.value=li.innerHTML.split(' ')[1]
        eCat.value=li.innerHTML.split(' ')[2]
        localStorage.removeItem(li.innerHTML.split(' ')[1]); 
        expList.removeChild(li);
    }
}


