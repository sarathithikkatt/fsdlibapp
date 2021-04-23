import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AccountService } from './account.service';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksService } from './books.service';
import { AuthorsService } from './authors.service';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    BooksComponent,
    AuthorsComponent,
    AddauthorComponent,
    AddbookComponent,
    BookComponent,
    AuthorComponent,
    BookslistComponent,
    UpdatebookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService,
              BooksService,
              AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
