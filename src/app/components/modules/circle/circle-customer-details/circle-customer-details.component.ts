import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/service/loader.service';
import { LoginService } from 'src/app/service/login.service';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-circle-customer-details',
  templateUrl: './circle-customer-details.component.html',
  styleUrls: ['./circle-customer-details.component.css']
})
export class CircleCustomerDetailsComponent implements OnInit {

  s:string = '';
  constructor(

    private snack: MatSnackBar,
    private login: LoginService,
    // private router: Router,
    public loaderService : LoaderService,
  ) { }

  ngOnInit(): void {
  }
  hide = true;
  
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  formSubmit(){
    this.snack.openFromComponent(SnackBarComponent,{
      duration:4000,
      data:{message:'Your Profile has been Updated successfuly'},
    });

  }

}
