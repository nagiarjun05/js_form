class Student{
    constructor(firstName,lastName,rollNo,sex,dob) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.rollNo=rollNo;
        this.sex=sex;
        this.dob=new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    eligibility() {
        if (this.getBirthYear()<=2017){
            return this.fullName() +' is Eligibile';
        }
        else {
            return this.fullName() +' is not Eligibile';
        }
    }
}

const student1=new Student('Mary','William','1','Female','10-21-2010');
const student2=new Student('Alex','Smith','2','Male','12-31-2020');


console.log(student1.getBirthYear());
console.log(student2.fullName());
console.log('')
console.log(student1.eligibility())
console.log(student2.eligibility())