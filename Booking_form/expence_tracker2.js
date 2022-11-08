// const { default: axios } = require("axios");

var filled=document.getElementById("submit");
var eAmount=document.getElementById("amount");
var eDisc=document.getElementById("expense-type");
var eCat=document.getElementById("expense-catogary");
var expList=document.getElementById("exp-list");

filled.addEventListener('click',onAdd);

expList.addEventListener('click', removeExpense);
expList.addEventListener('click', editExpDetails);
    

var flag=true;

axios({
    method:'get',
    url:"https://crudcrud.com/api/b7deaa66ad714b22afdf8b2272fa9917/expensesData",
}).then(res=>{
    res.data.forEach(element => {
        var li = document.createElement('li');
        li.className='expenseDet';
        li.innerHTML=`${element.amount} - ${element.discr} - ${element.catg}`;
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
        li.id=`${element._id}`;
        expList.appendChild(li);
    });
}).catch(err=>console.log(err));



function onAdd(e){
    e.preventDefault();
    if(flag==true){
        axios({
            method:'post',
            url:"https://crudcrud.com/api/b7deaa66ad714b22afdf8b2272fa9917/expensesData",
            data:{
                "amount":`${eAmount.value} `,
                "discr":`${eDisc.value} `,
                "catg":`${eCat.value} `
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        
        var li = document.createElement('li');
        li.className='expenseDet';
        li.innerHTML=`${eAmount.value} - ${eDisc.value} - ${eCat.value} `; 
        
        
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
    }else{
        axios({
            method:'post',
            url:`https://crudcrud.com/api/b7deaa66ad714b22afdf8b2272fa9917/expensesData/${filled.name}`,
            data:{
                "amount":`${eAmount.value} `,
                "discr":`${eDisc.value} `,
                "catg":`${eCat.value} `
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        
        var li = document.createElement('li');
        li.className='expenseDet';
        li.innerHTML=`${eAmount.value} - ${eDisc.value} - ${eCat.value} `; 
        
        
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
        li.id=filled.name;
        filled.removeAttribute("name");
        expList.appendChild(li);
        flag=true;
    }
    
}


function removeExpense(e){
    e.preventDefault();
    if(e.target.classList.contains('dlt')){
        axios({
            method:'delete',
            url:`https://crudcrud.com/api/b7deaa66ad714b22afdf8b2272fa9917/expensesData/${e.target.parentElement.id}`,  
        }).then(res=>console.log(res)).catch(err=>console.log(err))
        expList.removeChild(e.target.parentElement)
    }
}


function editExpDetails(e){
    e.preventDefault();
    if(e.target.classList.contains('edt')){
        
        if(flagvar li = e.target.parentElement
        eAmount.value=li.innerHTML.split(' ')[0]
        eDisc.value=li.innerHTML.split(' ')[3]
        eCat.value=li.innerHTML.split(' ')[6]
        filled.name=li.id;
        // console.log(filled.name);
        expList.removeChild(li);
        flag=false;
    }
}
