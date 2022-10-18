class user{
    static count=0

    static registeredUser(){
        console.log('Users registred so far are '+user.count);
    }
    
    constructor(username,sex,psswrd) {
        this.username=username;
        this.sex=sex;
        this.psswrd=psswrd;
        user.count++;
        let date =new Date();
        let month=date.getMonth();
        let day=date.getDay();
        let year=date.getFullYear();
        this.validTill=new Date(year,month+1,day);
    }

    pkgValidity() {
        console.log(this.validTill)
       }
    
    renewPkg(){
        if (this.pckg=='Standard'){
            let date =new Date();
            let month=date.getMonth();
            let day=date.getDay();
            let year=date.getFullYear();
            this.validTill=new Date(year,month+1,day);
        }else if(this.pckg=='Premimium') {
            let date =new Date();
            let month=date.getMonth();
            let day=date.getDay();
            let year=date.getFullYear();
            this.validTill=new Date(year+1,month,day);
        }
    }
}
class member extends user{
    constructor(username,sex,psswrd,pckg) {
        super(username,sex,psswrd);
        this.pckg=pckg
    }   

    getPackage(){
        console.log(this.username+' is registered for '+this.pckg+' package')
    }
}   

const u1=new member('Arjun','Male','arjun','Standard');
const u2=new member('Simran','Female','simran','Premimium');
const u3=new member('Jagdish','Male','jagdish','Standard');
const u4=new member('Jasmine','Female','jasmine','Premimium');



user.registeredUser()

u1.pkgValidity();
console.log('')
u1.getPackage();
console.log('')
u2.pkgValidity();
console.log('')
u2.getPackage();
console.log('')


u1.renewPkg();
console.log('')
u2.renewPkg();
console.log('')
u1.pkgValidity();
console.log('')
u2.pkgValidity();
