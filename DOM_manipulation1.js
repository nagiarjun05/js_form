/*const ul = document.querySelector('.items');

ul. firstElementChild.innerHTML='<h3>Hello</h3>';
ul.firstElementChild.style.color ='green';
ul.children[1].innerHTML='<h3>Hello</h3>';
u1.children[1].style.color ='yellow';-->*/

//Single Element selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('h1'));


//Multiple Elements selectors
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'))


//Iteration through items of nodelist
//const i1=document.querySelectorAll('.item');
//i1.forEach(i => console.log(i));


//const i1=document.querySelector('.items');
//console.log(i1.firstElementChild);
//console.log(i1.lastElementChild);
//i1.children[1].remove();
//i1.lastElementChild.innerHTML='<h1>Hello</h1>';
//i1.children[0].style.background='yellow';
// i1.lastElementChild.style.color='red';


const btn=document.querySelector('.btn');
btn.style.color='blue';
btn.style.background='black';

/*btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background='red';
    document.querySelector('body').style.background='#ccc';
    document.querySelector('.items').lastElementChild='<h1>Arjun</h1>'
})*/

const myForm=document.querySelector('#my-form');
const uName=document.querySelector('#name');
const uEmail=document.querySelector('#email');


//const msg=document.querySelector('.msg');
//const uList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);



//Function to add name and email in the Ul list
// function onSubmit(e){
//     e.preventDefault();
//     if (uName.value===''||uEmail.value===''){
//         msg.classList.add('error');
//         msg.textContent='Please Enter Fields';
//         setTimeout(()=>msg.remove(), 2000);
//     }else { 
//         const li=document.createElement('li');
//         li.appendChild(document.createTextNode(`${uName.value} : ${uEmail.value}`));

//         uList.appendChild(li);

//         uName.value='';
//         uEmail.value='';

//     }
// };

function onSubmit(e){
    e.preventDefault();
    if (uName.value===''||uEmail.value===''){
        msg.classList.add('error');
        msg.textContent='Please Enter Fields';
        setTimeout(()=>msg.remove(), 2000);
    }else { 
        localStorage.setItem(`name`,`${uName.value}`);
        localStorage.setItem(`email`,`${uEmail.value}`);
        console.log(uName.value)
        console.log(uEmail.value)
        uName.value='';
        uEmail.value='';

    }
};
    

/*const container=document.querySelector('#my-form');

container.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector('.items').firstElementChild.style.background='blue';
    document.querySelector('.items').firstElementChild.style.color='white';
})*/

/*const heading=document.querySelector('h1');

heading.addEventListener('mouseout', (f)=>{
    document.querySelector('body').style.background='#ddd';
});*/

