import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { AccountModel } from './account.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title:String = "SignUp";

  constructor(private accountService:AccountService,private router:Router) { }

  accountItem = new AccountModel("","","","");

  ngOnInit(): void {
  }

  accntObj:any;

  addAccount()
  {
    this.accountService.newAccount(this.accountItem)
    .subscribe(data => {
      this.accntObj = data;
      alert(this.accntObj);
    });
    alert("Signed Up Successfully !!!");
    this.router.navigate(["/login"]);
  }

}
