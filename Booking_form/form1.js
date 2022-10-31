// const posts=[
//     { title:"Post One", body:"This is post one",createdAt:new Date().getTime()},
//     { title:"Post Two", body:"This is post two",createdAt:new Date().getTime()},
//     {title:"Post Three",body:"This is post three",createdAt:new Date().getTime()},
// ];
// // creatPost({title:"Post Three",body:"This is post three"},getPosts);
// // getPosts();

// // function getPosts(){
// //     let output='';
// //     posts.forEach((post, index)=>{
// //         output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
// //     });
// //     document.body.innerHTML=output;
// // }


// function getPosts(){
//     setTimeout(() => {
//         let output='';
//         posts.forEach((post)=>{
//             output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
//         });
//         document.body.innerHTML=output;
//     }, 1000);
// }

// // function getPosts(){
// //     setInterval(() => {
// //         let output='';
// //         posts.forEach((post, index)=>{
// //             output+=`<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`
// //         });
// //         document.body.innerHTML=output;
// //     }, 1000);
// // }

// // function createPost(post,callback){
// //     setTimeout(()=>{
// //         posts.push({...post, createdAt:new Date().getTime()});
// //         callback();
// //     },1000);
// //     getPosts();
// // }
// // function creat4thPost(post,callback){
// //     setTimeout(()=>{
// //         posts.push({...post, createdAt:new Date().getTime()});
// //         callback();
// //     },4000);
// //     getPosts();
// // }

// // creatPost({title:"Post Three",body:"This is post three"},getPosts);
// // // creat4thPost({title:"Post Four",body:"This is post four"},getPosts);

// // getPosts();


// //PROMISES

// function createPost(post){
//     return new Promise((resolves,rejects)=>{
//         setTimeout(()=>{
//             if (!post.length){
//                 resolves(posts.push({...post ,createdAt:new Date().getTime()}));
//             }else {
//                 rejects('Error:something went wrong')
//             }
//         },1000);    
//     });   
// }

// // createPost({title:"Post Three",body:"This is post three",createdAt:new Date().getTime()}).then(getPosts);

// function deletePost(){
//     return new Promise((resolves,rejects)=>{
//         setTimeout(() => {
//             if (posts.length>0){
//                 resolves(posts.pop());
//             }else {
//                 rejects("Array is Empty now")
//             }
//         }, 1000);
//     });
// }

// // createPost({title:"Post Three",body:"This is post three",createdAt:new Date().getTime()})

// deletePost().then(()=>{
//     getPosts();
//     deletePost().then(()=>{
//         getPosts();
//         deletePost().then(()=>{
//             getPosts();
//             createPost({title:"Post Four",body:"This is post four"}).then(()=>{    
//                     getPosts();
//                 }).then(()=>{
//                     setTimeout(() => {
//                         deletePost();
//                         getPosts();
//                     }, 2000);
//                 })
//                 .catch(err=>{
//                     console.log("Inside the catch block",err);
//                 })
//             })
//         })
//     })
//     .catch(err=>console.log(err));

// createPost({title:"Post Four",body:"This is post four"}).then(()=>{    
//     getPosts();
//     deletePost();
// });
// // console.log(posts);

// console.log("person1  : shows tickets")
// console.log("person2  : shows tickets")

// const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000)
// })

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//     console.log(`wife: i have the tickets`)
//     console.log(`husband: we should go in`)
//     console.log(`wife: no i am hungry`)
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
// })

// const getButter=getPopcorn.then((t)=>{
//     console.log("husban: i got some popcorn")
//     console.log("husban: we should go in")
//     console.log("husban: I need butter on my popcorn")
//     return new Promise((resolve,reject)=>resolve(`${t} butter`))
// })

// getButter.then((t)=>console.log(t));


// console.log("person3  : shows tickets")
// console.log("person4  : shows tickets")

console.log("person1  : shows tickets")
console.log("person2  : shows tickets")


const preMovie=async()=>{
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("ticket");
    },3000)
})
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const getButter=new Promise((resolve,reject)=>resolve(`butter`));
const getColddrinks=new Promise((resolve,reject)=>resolve(`butter`));

let ticket= await promiseWifeBringingTicks;
 
console.log(`wife: i have the tickets`)
console.log(`husband: we should go in`)
console.log(`wife: no i am hungry`)

let popcorn=await  getPopcorn;

console.log("husband: i got some popcorn")
console.log("husband: we should go in")
console.log("wife: I need butter on my popcorn")
    
let butter=await getButter;

console.log(`husband: i got some ${butter} on popcorn`)
console.log(`wife: lets go now`)

let Colddrinks=await getColddrinks;

console.log(`husband: i going to get some colddrinks`)
console.log(`wife: ok`)

return ticket;
}


preMovie().then((m)=>console.log(`person3  : shows ${m}`));







// getButter.then((t)=>console.log(t));


console.log("person3  : shows tickets")
console.log("person4  : shows tickets")


function buyCar(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("buy a car")
        }, 5000);
    })
}

function planTrip(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res("lets plan a trip to manali")
        }, 2000);
    })
}
buyCar().then((m)=>{
    console.log(m);
    planTrip().then((m1)=>{
        console.log(m1);
    })
});