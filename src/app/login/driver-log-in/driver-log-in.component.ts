import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-driver-log-in',
  templateUrl: './driver-log-in.component.html',
  styleUrls: ['./driver-log-in.component.css']
})
export class DriverLogInComponent implements OnInit {

  loginform:FormGroup;
  successMessage:string;
  failMessage:string;

  constructor(private router:Router,private driverservice:AppserviceService){}
  
  ngOnInit(){
    this.loginform=new FormGroup({
      myemail:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
     });
  }

  driverlogin(){
    if(this.loginform.valid){
      this.driverservice.driverLogin(this.loginform.value.myemail,this.loginform.value.pwd).subscribe((res)=>{
        alert('sucess')
        this.router.navigate(['driver/:driverId']);
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
  // loginform:FormGroup;
  // sucessMessage:string;
  // failMessage:string;
  // constructor() {
  //   this.loginform=new FormGroup({
  //     myemail:new FormControl("",[Validators.required]),
  //     pwd:new FormControl("", [Validators.required,Validators.minLength(8)])
  //   });
  //  }
  //  get myemail(){
  //    return this.loginform.get('myemail');
  //  }
  //  get pwd(){
  //    return this.loginform.get('pwd');
  //  }

  //  driverlogin(){
  //    console.log(this.loginform.value.myemail);
  //    console.log(this.loginform.value.pwd);
  //    if(this.loginform.value.myemail=='kaples.patil.kp@gmail.com' && this.loginform.value.pwd=='12345678'){
  //     alert('sucessfully login...');
  //     this.sucessMessage="SUCCESSFULLY LOGIN";
      
  //    }else{
  //     alert('invalid username and password');
  //      this.failMessage="INVALID USERNAME AND PASSWORD";
  //    }
  //  }
  // ngOnInit() {
  // }

}
