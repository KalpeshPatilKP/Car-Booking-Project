import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { User } from '../user';
import { AppserviceService } from 'src/app/appservice.service';
import { Driver } from './Driver';

@Component({
  selector: 'app-driver-sign-up',
  templateUrl: './driver-sign-up.component.html',
  styleUrls: ['./driver-sign-up.component.css']
})
export class DriverSignUpComponent implements OnInit {

  myform=NgForm;
  uname:string;
  email:string;
  pwd:string;
  mno:number;
  driver:Driver;
  msg:string="";
  flag:boolean=false;
  constructor(private driversignupservice:AppserviceService){}

  signupForDriver(data:any){
    console.log(data.value);
    this.uname=data.value.uname;
    this.email=data.value.email;
    this.pwd=data.value.pwd;
    this.mno=data.value.mno;

    this.driver=new Driver(this.uname,this.email,this.mno,this.pwd);
    this.driversignupservice.doDriverSignup(this.driver).subscribe(res=>{
      data.form.reset();
      this.msg=res;
      this.flag=true;
    })
  }
//   myform:FormGroup;
//   user:User[]=[];
//   constructor() {
//     this.myform=new FormGroup({
//       uname:new FormControl("",[Validators.required]),
//       myemail:new FormControl("",[Validators.required]),
//       pwd:new FormControl("",[Validators.required,Validators.minLength(8)]),
//       mno:new FormControl("",[Validators.required,Validators.minLength(10)])
//     });
//    }
//    get uname(){
//      return this.myform.get('uname');
//    }
//    get myemail(){
//      return this.myform.get('myemail');
//    }
//    get pwd(){
//      return this.myform.get('pwd');
//    }
//    get mno(){
//      return this.myform.get('mno');
//    }
//    signupForDriver(){
//     this.user.push(new User(this.myform.value.uname,this.myform.value.myemail,this.myform.value.pwd,this.myform.value.mno));
//    console.log(this.user);
   
//  }
  ngOnInit() {
  }

}
