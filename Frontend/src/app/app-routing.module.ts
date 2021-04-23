import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BodyComponent } from './body/body.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"books",component:BooksComponent,
  children: [
    {path:"",component:BookslistComponent},
    {path:"book/:id",component:BookComponent},
    {path:"update/:id",component:UpdatebookComponent}
  ]},
  {path:"authors",component:AuthorsComponent},
  {path:"addbook",component:AddbookComponent},
  {path:"addauthor",component:AddauthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
