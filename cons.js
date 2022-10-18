    function Student(firstName,lastName,rollNo,sex,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.rollNo=rollNo;
        this.sex=sex;
        this.dob=new Date(dob);
        this.getBirthYear=function(){
            return this.dob.getFullYear()
        }
        this.fullName=function(){
            return `${this.firstName} ${this.lastName}`
        }
    }

    const student1=new Student('Mary','William','1','Female','10-21-2010')
    const student2=new Student('Alex','Smith','2','Male','12-31-2020')


    Student.prototype.eligibiliy=function(){
        if (this.getBirthYear()<=2017){
            return this.fullName()+' is Eligibile'
        }
        else {
            return this.fullName()+' is not Eligibile'
        }
    }



    if (student1.dob.getFullYear()<student2.dob.getFullYear()){
        console.log(student1.fullName())
    }
    else {
        console.log(student2.fullName())
    }


    document.write(student1.eligibiliy())
    document.write(student2.eligibiliy())