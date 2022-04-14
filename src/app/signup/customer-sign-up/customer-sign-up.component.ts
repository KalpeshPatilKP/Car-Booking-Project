import { Component, OnInit } from '@angular/core';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppserviceService } from 'src/app/appservice.service';
import { User } from '../user';
import { Customer } from './Customer';


@Component({
  selector: 'app-customer-sign-up',
  templateUrl: './customer-sign-up.component.html',
  styleUrls: ['./customer-sign-up.component.css']
})
export class CustomerSignUpComponent implements OnInit {
  myform:NgForm;
  uname:string;
  email:string;
  pwd:string;
  mno:number;
  customer:Customer;
  msg:string="";
  flag:boolean=false;
  constructor(private customersignupservice:AppserviceService){}

  signupForCustomer(data:any){
    console.log(data.value);
    this.uname=data.value.uname;
    this.email=data.value.email;
    this.pwd=data.value.pwd;
    this.mno=data.value.mno;

    this.customer=new Customer(this.uname,this.email,this.mno,this.pwd);
    this.customersignupservice.doCustomerSignup(this.customer).subscribe(res=>{
      data.form.reset();
      this.msg=res;
      this.flag=true;
    });
    
    }
  ngOnInit() {
    
  }

}


  // myform1:FormGroup;
  // customer:any={};
  // message:any;

  // constructor(private service:AppserviceService) { 
  //   this.myform1=new FormGroup({
  //     uname:new FormControl("",[Validators.required]),
  //     myemail:new FormControl("",[Validators.required]),
  //     pwd:new FormControl("",[Validators.required,Validators.minLength(8)]),
  //     mno:new FormControl("",[Validators.required,Validators.minLength(10)])
  //   });
  // }
   
  //  public signupForCustomer(){
  //    console.log(this.customer);
  //   //  let resp=this.service.doCustomerSignup(this.customer);
  //   //  resp.subscribe((data)=>this.message=data);
    
  // }
  //  get uname(){
  //    return this.myform1.get('uname');
  //  }
  //  get myemail(){
  //    return this.myform1.get('myemail');
  //  }
  //  get pwd(){
  //    return this.myform1.get('pwd');
  //  }
  //  get mno(){
  //    return this.myform1.get('mno');
  //  }

  
