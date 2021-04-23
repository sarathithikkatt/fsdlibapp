import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { BookModel } from './book.model';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  title:String = "UpdateBook";

  constructor(private booksService:BooksService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  id:any;
  bookObj:any;
  bookItem :any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      // console.log(params);
      this.id = params.get("id");
      // alert(this.id);
      this.booksService.getAbook(this.id)
      .subscribe(data => {
        this.bookObj = data;
        this.bookItem = new BookModel(this.bookObj.title,this.bookObj.author,this.bookObj.genre,this.bookObj.image,this.bookObj.about);

        console.log(this.bookObj);
      });
       
   });
  }

  updatedBook:any;
  updateBook(){
    console.log(this.bookItem);
    // alert(this.bookItem.image);
    this.booksService.updateBook(this.bookItem,this.id)
    .subscribe(data => {
      this.updatedBook = data;
      alert(this.updatedBook);

    }); 
    alert("Updated book Successfully !!!");
    this.router.navigate(["/books"]);
  }

}
