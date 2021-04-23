import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {

  title:String = "Books"


  constructor(private booksService:BooksService,private router:Router) { }

  booksObj:any;
  bookObj:any;

  ngOnInit(): void {
    this.booksService.getBooks()
    .subscribe(data => {
      this.booksObj = data;
      // alert(this.booksObj);
    });
  }


  getOnebook(id:any){
    alert(id);
    // this.booksService.getAbook(id)
    // .subscribe(data => {
    //   this.bookObj = data;
    //   console.log(this.bookObj);
    // });
    // this.router.navigate(["/book"],this.bookObj);
  }

}
