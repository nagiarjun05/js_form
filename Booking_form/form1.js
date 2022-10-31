const posts=[
    { title:"Post One", body:"This is post one",createdAt:new Date().getTime()},
    { title:"Post Two", body:"This is post two",createdAt:new Date().getTime()},
    {title:"Post Three",body:"This is post three",createdAt:new Date().getTime()},
];
// creatPost({title:"Post Three",body:"This is post three"},getPosts);
// getPosts();

// function getPosts(){
//     let output='';
//     posts.forEach((post, index)=>{
//         output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
//     });
//     document.body.innerHTML=output;
// }


function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post, index)=>{
            output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
        });
        document.body.innerHTML=output;
    }, 1000);
}

// function getPosts(){
//     setInterval(() => {
//         let output='';
//         posts.forEach((post, index)=>{
//             output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
//         });
//         document.body.innerHTML=output;
//     }, 1000);
// }

// function creatPost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post, createdAt:new Date().getTime()});
//         callback();
//     },2000);
//     getPosts();
// }
// function creat4thPost(post,callback){
//     setTimeout(()=>{
//         posts.push({...post, createdAt:new Date().getTime()});
//         callback();
//     },4000);
//     getPosts();
// }

// creatPost({title:"Post Three",body:"This is post three"},getPosts);
// // creat4thPost({title:"Post Four",body:"This is post four"},getPosts);

getPosts();


//PROMISES

function createPost(post){
    return new Promise((resolves,rejects)=>{
        setTimeout(()=>{
            if (post.length>0){
                resolves(posts.push({...post ,createdAt:new Date().getTime()}));
            }else {
                rejects('Error:something went wrong')
            }
        },1000);    
    });   
}

// createPost({title:"Post Three",body:"This is post three",createdAt:new Date().getTime()}).then(getPosts);

function deletePost(){
    return new Promise((resolves,rejects)=>{
        setTimeout(() => {
            if (posts.length>0){
                resolves(posts.pop());
            }else {
                rejects("Array is Empty now")
            }
        }, 1000);
    });
}

// createPost({title:"Post Three",body:"This is post three",createdAt:new Date().getTime()})

deletePost().then(()=>{
    getPosts();
    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{}).catch(err=>{
                    console.log("Inside the catch block",err);
                })
            })
        })
    })
}).catch(err=>console.log(err));

createPost({title:"Post Four",body:"This is post four"}).then(()=>{
    getPosts();
    setTimeout(()=>{
        deletePost();
    },1000)
});
