export class Customer{
    username:string;
    email:string;
    mobile_number:number;
    password:string;

    constructor(username:string,email:string,mobile_number:number,password:string){
        this.username=username;
        this.email=email;
        this.mobile_number=mobile_number;
        this.password=password;
    }
}