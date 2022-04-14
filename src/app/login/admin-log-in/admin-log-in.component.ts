import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { AppserviceService } from 'src/app/appservice.service';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent implements OnInit {
  loginform:FormGroup;
  successMessage:string;
  failMessage:string;

  constructor(private router:Router,private service:AppserviceService){}
  
  ngOnInit(){
    this.loginform=new FormGroup({
      myemail:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
     });
  }

  adminlogin(){
    if(this.loginform.valid){
      this.service.adminLogin(this.loginform.value.myemail,this.loginform.value.pwd).subscribe((res)=>{
        alert('sucess')
        this.router.navigate(['admin/:adminId']);
      },(err:Error)=>{
        alert(err.message)
        this.loginform.reset();
      })
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

  //  adminlogin(){
  //   //  alert('sucessfully login...');
  //    console.log(this.loginform.value.myemail);
  //    console.log(this.loginform.value.pwd);

  //    if(this.loginform.value.myemail=='kaples.patil.kp@gmail.com' && this.loginform.value.pwd=='12345678'){
  //     alert('sucessfully login...');
  //      this.successMessage="SUCESSFULLY LOGIN";
  //    }else{
  //      alert('invalid username and password');
  //      this.failMessage="INVALID USERNAME AND PASSWORD";
  //    }
  //    this.loginform.reset();
  //  }
  // ngOnInit() {
  // }

}
