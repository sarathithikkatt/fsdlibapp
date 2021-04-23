import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title:String = "Authors"

  constructor(private authorsService:AuthorsService) { }

  authorsObj:any;

  ngOnInit(): void {
    this.authorsService.getAuthors()
    .subscribe(data => {
      this.authorsObj = data;
      // alert(this.booksObj);
    });
  }

}
