import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  title:String = "Add a Book"

  constructor(private booksService:BooksService,private router:Router) { }

  bookItem = new BookModel("","","","","");

  ngOnInit(): void {
  }

  newbookObj:any;
  img:any;

  // imgupload($event:any){
  //   this.img = $event.target.value;
  // (change)="imgupload($event)" 
  //   alert(this.img);
  //   this.bookItem.image = "/assets/images/"+this.img;
  //   alert(this.bookItem.image);
  // }

  addBook()
  {
    alert(this.bookItem.image);
    this.booksService.newBook(this.bookItem)
    .subscribe(data => {
      this.newbookObj = data;
      alert(this.newbookObj);
    });
    alert("Added new book Successfully !!!");
    this.router.navigate(["/books"]);
  }

}
