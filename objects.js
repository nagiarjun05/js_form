const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'boston',
        state:'MA'
    }
}

console.log(person.hobbies[1]);
console.log(person.address.state);

const {age, address:{state}}=person;
console.log(age);
console.log(state);

const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appointment',
        isCompleted:true
    }
];

for (let i=0;i<todos.length;i++){
    console.log(todos[i].id)
};

let i=0;
while(i<todos.length){
    console.log(todos[i].text)
    i++;
}