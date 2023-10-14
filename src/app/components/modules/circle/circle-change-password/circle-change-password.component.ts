import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader.service';
import { LoginService } from 'src/app/service/login.service';
import { SnackBarErrorComponent } from 'src/app/snack-bar-error/snack-bar-error.component';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-circle-change-password',
  templateUrl: './circle-change-password.component.html',
  styleUrls: ['./circle-change-password.component.css']
})
export class CircleChangePasswordComponent implements OnInit {

  user = {
    "email": "",
    "oldPassword":"",
    "newPassword":"",
  };
  


  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    // private router: Router,
    public loaderService : LoaderService,
    
  ) { }

  ngOnInit(): void { }
  formSubmit(){
    this.login.changePassword(this.user).subscribe(
      (data:{})=>{
        
        
        // this.snack.open('Password has been changed successfuly','ok',{duration:5000,});
        this.snack.openFromComponent(SnackBarComponent,{
          duration:4000,
          data:{message:'Password has been changed successfuly'},
        });
      },
      (error)=>{
        // this.snack.open('Warning '
        // ,'Try Again',{duration:4200,});
        
        this.snack.openFromComponent(SnackBarErrorComponent,{
          data:{message:'You are unable to change your password'},
          duration:4000,
        });
     
      }
    );

  }

}
