import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';
@Component({
  selector: 'app-customer-log-in',
  templateUrl: './customer-log-in.component.html',
  styleUrls: ['./customer-log-in.component.css']
})
export class CustomerLogInComponent implements OnInit {
  loginform:FormGroup;
  successMessage:string;
  failMessage:string;

  constructor(private router:Router,private customerservice:AppserviceService){}
  
  ngOnInit(){
    this.loginform=new FormGroup({
      myemail:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
     });
  }

  customerlogin(){
    if(this.loginform.valid){
      this.customerservice.customerLogin(this.loginform.value.myemail,this.loginform.value.pwd).subscribe((res)=>{
        alert('sucess')
        this.router.navigate(['customer/:customerId']);
      },(err:Error)=>{
        alert(err.message)
      })
      this.loginform.reset();
    }
  }
  
  // constructor() {
  //   this.loginform=new FormGroup({
  //     myemail:new FormControl("",[Validators.required]),
  //     pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
  //   });
  //  }

   get myemail(){
     return this.loginform.get('myemail');
   }

   get pwd(){
     return this.loginform.get('pwd');
   }
//  loginform:FormGroup;
//  successMessage:string;
//  failMessage:string;

//   constructor() { 
//     this.loginform=new FormGroup({
//       myemail:new FormControl("",[Validators.required]),
//       pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
//     });
//   }

//   get myemail(){
//     return this.loginform.get('myemail');
//   }

//   get pwd(){
//     return this.loginform.get('pwd');
//   }

//   customerlogin(){
//     console.log(this.loginform.value.myemail);
//     console.log(this.loginform.value.pwd);
//     if(this.loginform.value.myemail=='kaples.patil.kp@gmail.com' && this.loginform.value.pwd=='12345678'){
//       alert('sucessfully login...');
//        this.successMessage="SUCESSFULLY LOGIN";
//      }else{
//       alert('invalid username and password');
//        this.failMessage="INVALID USERNAME AND PASSWORD";
//      }

//   }
//   ngOnInit() {
//   }

}
