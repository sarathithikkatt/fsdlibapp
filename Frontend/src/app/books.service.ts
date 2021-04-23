import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks(){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:5555/books",{headers:httpHeaders});
  }

  newBook(book:any)
  {
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.post<any>("http://localhost:5555/addbook",book,{headers:httpHeaders});
    
  } 

  getAbook(id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:5555/books/"+id,{headers:httpHeaders});
  }


  updateBook(updatedBook:any,id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.post<any>("http://localhost:5555/updatebook/"+id,updatedBook,{headers:httpHeaders});
  }
  
 
  deleteBook(id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    })
    return this.http.get<any>("http://localhost:5555/delete/"+id,{headers:httpHeaders});

  }
  
}
