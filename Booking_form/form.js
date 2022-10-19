var userEmail=document.getElementById('form1');
var userName=document.getElementById('form2');
var userList=document.getElementById('users');
var submit=document.getElementById('sb');
var show=document.getElementById('shw');
// console.log(userEmail);
// console.log(userName.data);
// console.log(submit);

show.addEventListener('click', showDetails);
submit.addEventListener('click', onClick);
userList.addEventListener('click', deleteUser);


function onClick(e){
    e.preventDefault();
    var li = document.createElement('li')
    li.className='user'
    // li.appendChild(document.createTextNode(userName.value+'  :  '+userEmail.value+'   '));
    li.appendChild(document.createTextNode(userName.value));
    li.appendChild(document.createTextNode(' : '));
    li.appendChild(document.createTextNode(userEmail.value));
    li.appendChild(document.createTextNode('   '));
    var deleteButton=document.createElement('button');
    deleteButton.className='dltbtn';
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);

    let user= {
        emailId:userEmail.value,
        name:userName.value
    }

    localStorage.setItem(`user${userEmail.value}`,JSON.stringify(user))
    userList.appendChild(li);
}


function deleteUser(e){
    e.preventDefault();
    if(e.target.classList.contains('dltbtn')){
        var li=e.target.parentElement;
        userList.removeChild(li);
        var temp=li.childNodes[2].data;
        localStorage.removeItem(`user${temp}`);
    }
}

function showDetails(e){
    e.preventDefault();
    Object.values(localStorage).forEach((value) => {
        const fetchedDetails=JSON.parse(value)//localStorage.getItem(key));
        let li;
        li = document.createElement('li')
        li.className='user'
        Object.values(fetchedDetails).forEach((value) => {
            li.appendChild(document.createTextNode(value));
        })
        var deleteButton=document.createElement('button');
        deleteButton.className='dltbtn';
        deleteButton.appendChild(document.createTextNode('X'));
        li.appendChild(deleteButton);
        userList.appendChild(li);  
    })
}
