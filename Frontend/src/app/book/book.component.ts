import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title:String = "Book";

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private booksService:BooksService) { }

  // sub:any;
  id:any;
  bookObj:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => { 
      // console.log(params);
      this.id = params.get("id");
      // alert(this.id);
      this.booksService.getAbook(this.id)
      .subscribe(data => {
        this.bookObj = data;
        console.log(this.bookObj);
      });
       
   });

  }

  delete(id:any){
    alert("Do you want to delete this book?");
    this.booksService.deleteBook(this.id)
    .subscribe(data => {

    });
    alert("Deleted Successfully !!!");
    this.router.navigate(["/books"]);
  }

}
