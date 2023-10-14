import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/service/loader.service';
import { LoginService } from 'src/app/service/login.service';
import { SnackBarErrorComponent } from 'src/app/snack-bar-error/snack-bar-error.component';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';
import { User } from 'src/app/User';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // progressBar:boolean=false;
  
  public email = {
    "recipient": ""
  }
  
  user: User = new User();
  // roletype = { "roleid": { "roleName": "USER" } }
  rolename = {
    "roleid": { "roleId": "", "roleName": "" }
  }


  constructor(
    private snack: MatSnackBar,
    private login: LoginService,
    private router: Router,
    public loaderService : LoaderService,

  ) { }

  
  ngOnInit(): void { }

  

  forgetPassword(){
    this.login.forgetPassword(this.email).subscribe(
      (data:any)=>{
        // this._snack.open('Congratulation ', 'Please check your Password on Mail', {
        //   duration: 5000,
        // });
        this.snack.openFromComponent(SnackBarComponent,{
          duration:4000,
          data:{message:'Congratulation you are Successfuly Reset your Password. Kindly, Check your Mail.'},
        });
        // this.progressBar=true;
      },
      (error)=>{
        // this.snack.open('Warning ', 'Error for Reset Password', {
        //   duration: 5000,
        // });
        this.snack.openFromComponent(SnackBarErrorComponent,{
          duration:4000,
          data:{message:'Sorry, Your are unable to Reset your password. Please Try Again.'},
        });
        // this.progressBar=true;
      }
    )

  }
  

  formSubmit() {
    

    if (
      this.user.emailId.trim() == '' ||
      this.user.emailId == null ||
      this.user.emailId == undefined
    ) {
      this.snack.open('Email Id is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.user.password.trim() == '' ||
      this.user.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }



    //request to server to generate token
    this.login.loginDetails(this.user).subscribe(
      (data: any) => {

        // console.log('success');
        // console.log(data);
        
        this.login.loginUser(data.emailId)

          this.login.loginDetails(this.user).subscribe((user: any) => {
          this.login.setUser(user);
          
          // this._snack.open('Just Before Checking Cridential', '', {
          //   duration: 3000,
          // });
         
          if (this.login.getUserRole()== 'Admin') {
            
            // window.location.href = '/admin';
            // this.snack.open('Welcome '+this.login.getUser().userName, 'You have an Admin Role', {
            //   duration: 4000,
            // });

            this.snack.openFromComponent(SnackBarComponent,{
              duration:4000,
              data:{message:'Welcome '+this.login.getUser().userName+', You have an Admin Role'},
            });
            this.router.navigate(['admin']);
           
            this.login.loginStatusSubject.next(true);
          }
          else if (this.login.getUserRole() == 'VSM' || this.login.getUserRole()== 'TSM') {
            
            // window.location.href = '/user-dashboard';
            this.snack.openFromComponent(SnackBarComponent,{
              duration:4000,
              data:{message:'Welcome '+this.login.getUser().userName+', You have an SM Role'},
            });
            this.router.navigate(['vsm-tsm']);
            this.login.loginStatusSubject.next(true);
          }
          else if (this.login.getUserRole() == 'CIRCLE') {
           
            // window.location.href = '/user-dashboard';
            // this._snack.open('Welcome '+this.login.getUser().userName, 'You have an Circle Role', {
            //   duration: 3000,
            // });
            this.snack.openFromComponent(SnackBarComponent,{
              duration:4000,
              data:{message:'Welcome '+this.login.getUser().userName+', You have an CIRCLE Role'},
            });
            
            this.router.navigate(['circle']);
            this.login.loginStatusSubject.next(true);
          }
          else {
            this.login.logout();
            // this.snack.open('Warning', 'Invalid User Name and password Please try again', {
            //   duration: 3000,
            // });
            this.snack.openFromComponent(SnackBarErrorComponent,{
              duration:4000,
              data:{message:'Sorry, Your have not any Role. Please Contact to the Admin.'},
            });
          }

        })
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        // this.snack.open('Invalid Details !! Try again', '', {
        //   duration: 3000,
        // });
        this.snack.openFromComponent(SnackBarErrorComponent,{
          duration:4000,
          data:{message:'Sorry, Your Emai Id and Password is Invalid. Please Try Again.'},
        });
      }
    );
  }
 

}
