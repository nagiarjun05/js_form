var userEmail=document.getElementById('form1');
var userName=document.getElementById('form2');
var userList=document.getElementById('users');
var submit=document.getElementById('sb');
var show=document.getElementById('shw');

show.addEventListener('click', showDetails);
submit.addEventListener('click', onClick);
userList.addEventListener('click', deleteUser);
userList.addEventListener('click', editDetails);

var flag=true;

function onClick(e){
    if (userEmail.value!=''||userName.value!=''||flag==true){
        e.preventDefault();
        var li = document.createElement('li')
        li.className='user'
        // li.appendChild(document.createTextNode(userName.value+'  :  '+userEmail.value+'   '));
        li.innerHTML=`${userName.value} - ${userEmail.value} `
        // li.appendChild(document.createTextNode(userName.value));
        // li.appendChild(document.createTextNode('  '));
        // li.appendChild(document.createTextNode(userEmail.value));
        // li.appendChild(document.createTextNode('   '));
        
        var deleteButton=document.createElement('button');
        deleteButton.className='dltbtn';
        deleteButton.style.border='solid 3px red';
        deleteButton.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteButton);

        var editButton=document.createElement('button');
        editButton.className='editbtn';
        editButton.style.border='solid 3px green';
        editButton.appendChild(document.createTextNode('Edit'));
        li.appendChild(editButton);
        
        localStorage.setItem(userEmail.value,`${userName.value} - ${userEmail.value}`)

        

        axios({
            method:'post',
            url:"https://crudcrud.com/api/ace6d6ea67804b4881993791ed5aa683/appointmentData",
            data:{
                "name":`${userName.value} `,
                "emailId":`${userEmail.value} `
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        userList.appendChild(li);
    }else{
        e.preventDefault();
        var li = document.createElement('li')
        li.className='user'
        // li.appendChild(document.createTextNode(userName.value+'  :  '+userEmail.value+'   '));
        li.innerHTML=`${userName.value} - ${userEmail.value} `
        // li.appendChild(document.createTextNode(userName.value));
        // li.appendChild(document.createTextNode('  '));
        // li.appendChild(document.createTextNode(userEmail.value));
        // li.appendChild(document.createTextNode('   '));
        
        var deleteButton=document.createElement('button');
        deleteButton.className='dltbtn';
        deleteButton.style.border='solid 3px red';
        deleteButton.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteButton);

        var editButton=document.createElement('button');
        editButton.className='editbtn';
        editButton.style.border='solid 3px green';
        editButton.appendChild(document.createTextNode('Edit'));
        li.appendChild(editButton);
    
        localStorage.setItem(userEmail.value,`${userName.value} - ${userEmail.value}`)

        

        axios({
            method:'patch',
            url:`https://crudcrud.com/api/ace6d6ea67804b4881993791ed5aa683/appointmentData/`,
            data:{
                "name":`${userName.value} `,
                "emailId":`${userEmail.value} `
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
        userList.appendChild(li);
        flag=true;
    }
}

function editDetails(e){
    e.preventDefault();
    flag=false;
    if (e.target.classList.contains('editbtn')){
        // console.log(e.target.parentElement.innerHTML.split(' '));
        userEmail.value=e.target.parentElement.innerHTML.split(' ')[0];
        userName.value=e.target.parentElement.innerHTML.split(' ')[2];
        userList.removeChild(e.target.parentElement)


        axios({
            method:'get',
            url:`https://crudcrud.com/api/ace6d6ea67804b4881993791ed5aa683/appointmentData/${e.target.parentElement.id}`
          })
          .then(res=>{
            userEmail.value=res.data.emailId;
            userName.value=res.data.name;
          })
          .catch(err=>console.log(err));
    }
}


function deleteUser(e){
    e.preventDefault();
    // console.log(e.target.parentElement);
    if(e.target.classList.contains('dltbtn')){
        // // var li=e.target.parentElement;
        userList.removeChild(e.target.parentElement);
        // var temp=li.childNodes[2].data;
        // var temp = li.childNodes[0];
        // console.log(temp);
        // console.log(e.target.parentElement.innerHTML.split(' ')[2])
        // localStorage.removeItem(e.target.parentElement.innerHTML.split(' ')[2]);    
        // localStorage.removeItem(`${temp}`);
        // console.log(e.target.parentElement.id)
        //axios.remove
        axios({
            method:'delete',
            url:`https://crudcrud.com/api/ace6d6ea67804b4881993791ed5aa683/appointmentData/${e.target.parentElement.id}`
          })
          .then(res=>console.log(res))
          .catch(err=>console.log(err));

    }
}



function showDetails(e){
    e.preventDefault();
    // Object.values(localStorage).forEach((value) => {
    //     // console.log(value)
    //     // const fetchedDetails=JSON.parse(value)//localStorage.getItem(key));
    //     let li=document.createElement('li');
    //     li.className='user';
    //     li.innerHTML=`${value} `;
    //     // Object.values(fetchedDetails).forEach((value,index) => {
    //     //     // console.log(fetchedDetails)
    //     //     li.appendChild(document.createTextNode(`${value}`));
        
        
    //     var deleteButton=document.createElement('button');
    //     deleteButton.className='dltbtn';
    //     deleteButton.style.border='solid 3px red';
    //     deleteButton.appendChild(document.createTextNode('Delete'));
    //     li.appendChild(deleteButton);
         
    //     var editButton=document.createElement('button');
    //     editButton.className='editbtn';
    //     editButton.style.border='solid 3px green';
    //     editButton.appendChild(document.createTextNode('Edit'));
    //     li.appendChild(editButton);

    //     userList.appendChild(li);
    // }
    // )

    axios({
        method:'get',
        url:'https://crudcrud.com/api/ace6d6ea67804b4881993791ed5aa683/appointmentData'
    }).then(res=>res.data.forEach((d)=>{
        let li=document.createElement('li');
        li.className='user';
        li.innerHTML=`${d.name} - ${d.emailId} `
        
        var deleteButton=document.createElement('button');
        deleteButton.className='dltbtn';
        deleteButton.style.border='solid 3px red';
        deleteButton.appendChild(document.createTextNode('Delete'));
        li.appendChild(deleteButton);
         
        var editButton=document.createElement('button');
        editButton.className='editbtn';
        editButton.style.border='solid 3px green';
        editButton.appendChild(document.createTextNode('Edit'));
        li.appendChild(editButton);

        li.id=`${d._id}`;
        console.log(li.id)
        
        userList.appendChild(li);
    })).catch(err=>console.log(err));
}